"use client"
import { useLanguage } from "@/contexts/LanguageContext";
import React, { useState, useEffect } from "react";

const HeroSlider = () => {
  const images = [
    "https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1635562985686-4f8bb9c0d3bf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmljZXxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1568584711075-3d021a7c3ca3?w=800",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const {lang} = useLanguage();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); 

    return () => clearInterval(timer); 
  }, [images.length]);

  return (
    <div className="relative w-full max-w-7xl mx-auto rounded-xl md:rounded-2xl h-[350px] sm:h-[420px] md:h-[500px] overflow-hidden px-4 sm:px-0">
  {/* ব্যাকগ্রাউন্ড ছবি */}
  <img
    src={images[currentIndex]}
    alt="Hero Background"
    className="w-full h-full object-cover transition-all duration-700 ease-in-out"
  />

  {/* কন্টেন্ট ও ডট ওভারলে */}
  <div className="absolute inset-0 bg-black/50 sm:bg-black/40 flex flex-col items-center justify-center text-white text-center p-4">
    
    {/* রেসপন্সিভ হেডিং */}
    <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold leading-tight max-w-3xl">
      {lang === 'bn' ? 'প্রযুক্তির মাধ্যমে কৃষির উন্নয়ন' : "Development of agriculture through technology"}
    </h1>

    {/* ব্যাজ / ট্যাগের স্থান */}
    <div className="mt-3 sm:mt-4 inline-flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-sm">
      {/* বামপাশের ছোট হলুদ ডট */}
      <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
      
      {/* টেক্সট */}
      <span className="text-xs sm:text-sm font-medium text-white/90">
        {lang === 'bn' ? '১০+ কৃষকের বিশ্বস্ত প্ল্যাটফর্ম' : "Trusted by 10+ farmers"}
      </span>
    </div>

    {/* অটো ইন্ডিকেটর */}
    <div className="absolute bottom-4 sm:bottom-6 flex items-center gap-1.5 sm:gap-2">
      {images.map((_, index) => (
        <span
          key={index}
          className={`h-2 sm:h-2.5 rounded-full transition-all duration-500 ${
            currentIndex === index
              ? "w-6 sm:w-8 bg-yellow-400"
              : "w-2 sm:w-2.5 bg-gray-400 opacity-60"
          }`}
        />
      ))}
    </div>
  </div>
</div>
  );
};

export default HeroSlider;