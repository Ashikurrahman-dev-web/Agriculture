"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  ArrowLeft,
  CloudSun,
  Scan,
  TestTube2,
  Calendar,
  ShoppingBag,
  Send,
  BookOpen,
  TrendingUp,
  AlertCircle,
  Sparkles,
  User,
  Hand,
} from "lucide-react";
import { useSession } from "@/lib/auth-client";

const FarmerHomePage = () => {
  const { lang } = useLanguage();
  const currentLang = (lang as "bn" | "en") || "bn";
   const {data: session} = useSession();
  const user = session?.user;
  const features = [
    {
      id: "weather",
      icon: CloudSun,
      color: "bg-blue-500",
      lightColor: "bg-blue-50 text-blue-700 border-blue-200",
      title: { bn: "আবহাওয়া পূর্বাভাস", en: "Weather Forecast" },
      desc: {
        bn: "আজকের ও পরবর্তী ৩ দিনের সঠিক জিপিএস আবহাওয়া সতর্কতা।",
        en: "Today's and 3-day accurate weather alerts.",
      },
      tag: { bn: "আজকের আবহাওয়া", en: "Today's weather" },
      
    },
    {
      id: "ai-disease",
      icon: Scan,
      color: "bg-emerald-500",
      lightColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
      title: { bn: "এআই রোগ নির্ণয়", en: "AI Disease Diagnosis" },
      desc: {
        bn: "ফসলের ছবি আপলোড করে মুহূর্তেই রোগ চিহ্নিত করুন।",
        en: "Scan or upload crop photos for instant diagnosis.",
      },
      tag: { bn: "ইনস্ট্যান্ট স্ক্যান", en: "Instant Scan" },
      
    },
    {
      id: "ai-soil",
      icon: TestTube2,
      color: "bg-amber-500",
      lightColor: "bg-amber-50 text-amber-700 border-amber-200",
      title: { bn: "এআই মাটি পরীক্ষক", en: "AI Soil Tester" },
      desc: {
        bn: "মাটির ছবি ও রিপোর্ট দিয়ে পুষ্টি উপাদান ও সার সুপারিশ পান।",
        en: "Analyze soil quality & get fertilizer recommendations.",
      },
      tag: { bn: "স্মার্ট অ্যানালাইসিস", en: "Smart Analysis" },
      
    },
    {
      id: "calendar",
      icon: Calendar,
      color: "bg-rose-500",
      lightColor: "bg-rose-50 text-rose-700 border-rose-200",
      title: { bn: "ফসল পঞ্জিকা", en: "Crop Calendar" },
      desc: {
        bn: "বীজ রোপণ, যত্ন এবং ফসল তোলার সঠিক সময়সূচি।",
        en: "Sowing, care, and harvesting schedules.",
      },
      tag: { bn: "রবি মৌসুম", en: "Rabi Season" },
    },
    {
      id: "market",
      icon: ShoppingBag,
      color: "bg-orange-500",
      lightColor: "bg-orange-50 text-orange-700 border-orange-200",
      title: { bn: "বাজার দর", en: "Market Prices" },
      desc: {
        bn: "দেশের বিভিন্ন প্রান্তের প্রতিদিনের টাটকা ফসলের বাজার দর।",
        en: "Real-time crop prices across Bangladesh markets.",
      },
      tag: { bn: "লাইভ আপডেট", en: "Live Updates" },
    },
    {
      id: "consultation",
      icon: Send,
      color: "bg-indigo-500",
      lightColor: "bg-indigo-50 text-indigo-700 border-indigo-200",
      title: { bn: "বিশেষজ্ঞ পরামর্শ", en: "Expert Consultation" },
      desc: {
        bn: "কৃষি বিশেষজ্ঞদের সাথে সরাসরি কথা বা মেসেজে প্রশ্ন করুন।",
        en: "Consult directly with agricultural experts.",
      },
      tag: { bn: "অনলাইন সাপোর্ট", en: "Online Support" },
    },
    {
      id: "library",
      icon: BookOpen,
      color: "bg-teal-500",
      lightColor: "bg-teal-50 text-teal-700 border-teal-200",
      title: { bn: "রোগ লাইব্রেরি", en: "Disease Library" },
      desc: {
        bn: "৩০+ ফসলের রোগ, লক্ষণ ও সমাধানের এনসাইক্লোপিডিয়া।",
        en: "Encyclopedia of 30+ crop diseases & remedies.",
      },
      tag: { bn: "৩০+ গাইডলাইব্রেরি", en: "30+ Guides" },
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* নেভিগেশন ও স্বাগতম হেডার */}
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#1F3D2B] transition hover:text-[#2F5943] mb-4"
          >
            <ArrowLeft size={16} />
            {currentLang === "bn" ? "হোমপেজে ফিরে যান" : "Go to Homepage"}
          </Link>

          {/* কৃষক প্রোফাইল সামারি ব্যানার */}
          <div className="bg-gradient-to-r from-emerald-800 to-teal-900 rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
            <div className="absolute -right-10 -bottom-10 opacity-10 text-white">
              <Sparkles size={250} />
            </div>

            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-emerald-300 font-bold text-2xl shrink-0">
                  <User size={32} />
                </div>
                <div>
                  <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                    {currentLang === "bn"
                      ? "স্বাগতম, কৃষক ড্যাশবোর্ডে!"
                      : "Welcome, Farmer Dashboard!"}
                  </h1>
                  <p className="text-emerald-100 text-sm sm:text-base mt-1">
                    {currentLang === "bn"
                      ? "আপনার কৃষিভিত্তিক সমস্ত সেবা ও তথ্য এখন এক জায়গায়।"
                      : "All your smart agricultural services in one place."}
                  </p>
                </div>
              </div>
           <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-4 py-3 rounded-2xl border border-white/15 self-start md:self-auto">
                <Hand size={28} className="text-amber-300 shrink-0" />
                <div>
<p className="text-sm font-bold">{currentLang === "bn" ? "হেই" : "Hi"},{user?.name}</p>
                </div>
              </div>   
            </div>
          </div>
        </div>

        {/* এআই কুইক অ্যাকশন ব্যানার */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div      
className="group bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl p-5 text-white shadow-md hover:shadow-lg transition flex items-center justify-between"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-white/20 rounded-xl group-hover:scale-110 transition">
                <Scan size={24} />
              </div>
              <div>
                <h3 className="font-bold text-base sm:text-lg">
                  {currentLang === "bn" ? "ফসলের রোগ স্ক্যান করুন" : "Scan Crop Disease"}
                </h3>
                <p className="text-xs text-emerald-100 mt-0.5">
                  {currentLang === "bn" ? "এআই প্রযুক্তি দিয়ে মুহূর্তেই ফলাফল" : "Instant results using AI"}
                </p>
              </div>
            </div>
        
          </div>

          <div
            className="group bg-gradient-to-r from-amber-500 to-orange-600 rounded-2xl p-5 text-white shadow-md hover:shadow-lg transition flex items-center justify-between"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-white/20 rounded-xl group-hover:scale-110 transition">
                <TrendingUp size={24} />
              </div>
              <div>
                <h3 className="font-bold text-base sm:text-lg">
                  {currentLang === "bn" ? "আজকের লাইভ বাজার দর" : "Today's Live Market Price"}
                </h3>
                <p className="text-xs text-amber-100 mt-0.5">
                  {currentLang === "bn" ? "ধান, আলু ও টমেটোর সর্বশেষ দাম" : "Latest rates for rice, potato & tomato"}
                </p>
              </div>
            </div>
            
          </div>
        </div>

        {/* সকল সেবা সমূহের গ্রিড (Services Grid) */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-800">
                {currentLang === "bn" ? "আমাদের সেবাসমূহ" : "Our Services"}
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                {currentLang === "bn"
                  ? "যে কোনো সেবায় ক্লিক করে বিস্তারিত জানুন"
                  : "Click any service to view details"}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {features.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.id}
                  
                  className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* আইকন এবং ট্যাগ */}
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className={`w-12 h-12 rounded-xl ${item.color} text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform`}
                      >
                        <Icon size={24} />
                      </div>
                      <span
                        className={`text-[11px] font-bold px-2.5 py-1 rounded-full border ${item.lightColor}`}
                      >
                        {item.tag[currentLang]}
                      </span>
                    </div>

                    {/* টাইটেল */}
                    <h3 className="text-slate-800 font-bold text-lg mb-2 group-hover:text-emerald-700 transition-colors">
                      {item.title[currentLang]}
                    </h3>

                    {/* বিবরণ */}
                    <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                      {item.desc[currentLang]}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* জরুরি সাহায্য / টিপস কার্ড */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 flex items-start gap-4 text-amber-900">
          <AlertCircle size={24} className="text-amber-600 shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm leading-relaxed">
            <span className="font-bold">
              {currentLang === "bn" ? "কৃষি পরামর্শ:" : "Farming Tip:"}
            </span>{" "}
            {currentLang === "bn"
              ? "চলতি রবি মৌসুমে আপনার জমিতে ছত্রাকজনিত রোগ দেখা দিলে তাত্ক্ষণিকভাবে 'এআই রোগ নির্ণয়' অপশনে ছবি আপলোড করুন অথবা রোগ লাইব্রেরি পরিদর্শন করুন।"
              : "If fungal diseases occur on your land during this season, immediately upload a picture in the 'AI Disease Diagnosis' option or check the Disease Library."}
          </div>
        </div>

      </div>
    </div>
  );
};

export default FarmerHomePage;