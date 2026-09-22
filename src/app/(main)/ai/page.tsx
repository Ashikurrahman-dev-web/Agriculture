"use client"
import { useLanguage } from '@/contexts/LanguageContext';
import { Input } from '@heroui/react';
import { Scan, SendHorizonal } from 'lucide-react';
import React from 'react';
import { FaPaperclip } from 'react-icons/fa';

const AiPage = () => {
    const {lang} = useLanguage();
    return (
        <div>
        <div
className="group max-w-xl mt-10 mx-auto bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl p-5 text-white shadow-md hover:shadow-lg transition flex items-center justify-between">
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
            <div className='mx-auto max-w-xl mt-5 relative'>
            <Input
            type="text"
            className="w-full bg-amber-50"/> 
<button className='absolute right-1 top-1'><SendHorizonal /></button>  
 <label htmlFor="image" className="absolute right-6 text-[#2F5943] p-2 cursor-pointer">
                                 <FaPaperclip size={18} />
                             </label>
                    
                         <input
                             name="image"
                             id="image"
                             type="file"
                             accept="image/*"
                             className="hidden"
                             
                         />            
            </div>
          </div>
    );
};

export default AiPage;