"use client"

import { useLanguage } from '@/contexts/LanguageContext';
import { uploadImage } from '@/utils/uploadImage';
import { Input } from '@heroui/react';
import { Scan, SendHorizonal } from 'lucide-react';
import React, { type ChangeEvent, useState } from 'react';
import toast from 'react-hot-toast';
import { FaPaperclip } from 'react-icons/fa';

const AiPage = () => {
  const [preview, setPreview] = useState<string | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [question, setQuestion] = useState<string>('');
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  
  const { lang } = useLanguage();

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async () => {
    if (!question.trim() && !imageFile) {
      toast.error("Please type a message or select an image");
      return;
    }

    setLoading(true);
    let imageUrl = "";

    if (imageFile) {
      try {
        imageUrl = await uploadImage(imageFile);
      } catch (error) {
        console.error("Image upload error:", error);
        toast.error("Image upload failed!");
        setLoading(false);
        return;
      }
    }

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/aiAnswer`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question, imageUrl }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Failed to fetch response");
      }

      setResult(data.result);
      // Reset input state after success
      setQuestion('');
      setImageFile(null);
      setPreview(null);
    } catch (error: any) {
      toast.error(error.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="px-4">
      <div className="group max-w-xl mt-10 mx-auto bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl p-5 text-white shadow-md hover:shadow-lg transition flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-white/20 rounded-xl group-hover:scale-110 transition">
            <Scan size={24} />
          </div>
          <div>
            <h3 className="font-bold text-base sm:text-lg">
              {lang === "bn" ? "এআইর কাছে জিজ্ঞাসা করুন" : "Ask from AI"}
            </h3>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-xl mt-5 relative mb-114">
        {preview && (
          <div className="mb-3 relative inline-block">
            <img
              src={preview}
              alt="Selected image"
              className="w-24 h-24 object-cover rounded-lg border"
            />
            <button
              type="button"
              onClick={() => {
                setPreview(null);
                setImageFile(null);
              }}
              className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 cursor-pointer flex items-center justify-center text-xs"
            >
              ×
            </button>
          </div>
        )}

        <div className="relative flex items-center">
          <Input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !loading) {
                handleSubmit();
              }
            }}
placeholder={lang ==='bn' ? "আপনার প্রশ্ন লিখুন": "Type your Question..."}
            className="w-full bg-amber-50 pr-20"
            disabled={loading}
          />

          <label htmlFor="image" className="absolute right-10 text-[#2F5943] p-2 cursor-pointer hover:opacity-80">
            <FaPaperclip size={18} />
          </label>

          <input
            name="image"
            id="image"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageChange}
          />

          <button
            type="button"
            onClick={handleSubmit}
            disabled={loading || (!question.trim() && !imageFile)}
            className="absolute right-2 cursor-pointer p-1 rounded-md transition"
          >
            <SendHorizonal
              className={`${
                (question.trim() || imageFile) && !loading
                  ? "text-[#2F5943]"
                  : "text-gray-300"
              }`}
            />
          </button>
        </div>

        {/* Answer Display Section */}
{loading && <p className="mt-4 text-center text-gray-500">
  {lang === 'bn'?"চিন্তা করছে": 'Thinking...'}</p>}
        {result && (
          <div className="mt-6 p-4 bg-gray-50 rounded-xl border border-gray-200">
            <h4 className="font-bold text-gray-800 mb-2">
             {lang === 'bn' ?'উত্তরঃ': 'Answer:'}</h4>
            <p className="text-gray-700 whitespace-pre-line">{result}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AiPage;