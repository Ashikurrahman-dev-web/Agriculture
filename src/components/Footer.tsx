"use client";

import React from "react";
import Link from "next/link";
import {
  Sprout,
  Mail,
  Phone,
  MapPin,
  Globe2,
  Video,
  Send,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const { lang } = useLanguage();
  const currentLang = (lang as "bn" | "en") || "bn";

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          
          {/* কলাম ১: লোগো এবং সংক্ষিপ্ত বিবরণ */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center">
              <Link
                href="/"
                className="group flex items-center gap-2.5"
                style={{ textDecoration: "none" }}
              >
                <span
                  className="flex h-10 w-10 items-center justify-center rounded-xl transition-transform duration-200 group-hover:-translate-y-0.5"
                  style={{
                    background: "linear-gradient(145deg, #2F5943, #1F3D2B)",
                    color: "#E0A458",
                    boxShadow: "0 4px 12px -2px rgba(31,61,43,0.3)",
                  }}
                >
                  <Sprout size={22} strokeWidth={2.2} />
                </span>

                <span className="text-xl font-bold text-white tracking-tight">
                  AgriTech
                </span>
              </Link>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed pr-4">
              {currentLang === "bn"
                ? "কৃষি এবং কৃষকের সমৃদ্ধিতে আমরা সদা প্রস্তুত। কৃত্রিম বুদ্ধিমত্তা ও আধুনিক প্রযুক্তির মাধ্যমে বাংলাদেশের কৃষিখাতকে এক নতুন উচ্চতায় নিয়ে যাওয়াই আমাদের মূল উদ্দেশ্য।"
                : "Empowering farmers with modern agricultural technology, AI crop diagnosis, real-time market prices, and expert advice for a sustainable future."}
            </p>

            {/* সোশ্যাল মিডিয়া লিঙ্কসমূহ */}
            <div className="flex items-center gap-3 pt-2">
        {[FaYoutube, FaFacebook, FaInstagram, FaTwitter].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-emerald-600 hover:text-white transition-colors duration-200"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>


          {/* কলাম ৩: সেবাসমূহ */}
          <div>
            <h3 className="text-white font-semibold text-base mb-4 border-l-2 border-emerald-500 pl-2.5">
              {currentLang === "bn" ? "সেবাসমূহ" : "Our Services"}
            </h3>
            <ul className="space-y-2.5 text-sm">
              {[
     { name: currentLang === "bn" ? "এআই রোগ নির্ণয়" : "AI Disease Diagnosis", },
    { name: currentLang === "bn" ? "এআই মাটি পরীক্ষক" : "AI Soil Tester",  },
    { name: currentLang === "bn" ? "রোগ লাইব্রেরি" : "Disease Library", },
    { name: currentLang === "bn" ? "ফসল পঞ্জিকা" : "Crop Calendar", },
    { name: currentLang === "bn" ? "বাজার দর" : "Market Prices", },
    { name: currentLang === "bn" ? "আবহাওয়া সেবা" : "Weather Updates",},
              ].map((link, i) => (
                <li key={i}>
                    {link.name}
                </li>
              ))}
            </ul>
          </div>

          {/* কলাম ৪: যোগাযোগ তথ্য */}
          <div>
            <h3 className="text-white font-semibold text-base mb-4 border-l-2 border-emerald-500 pl-2.5">
              {currentLang === "bn" ? "যোগাযোগ" : "Contact Us"}
            </h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-emerald-500 shrink-0 mt-0.5" />
                <span>
                  {currentLang === "bn"
                    ? "ঢাকা, বাংলাদেশ"
                    : "Dhaka, Bangladesh"}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-emerald-500 shrink-0" />
                <span>+880 1700-000000</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-emerald-500 shrink-0" />
                <span>info@agritech.com</span>
              </li>
            </ul>
            </div>
        </div>

        {/* কপিরাইট অংশ */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>
            © {new Date().getFullYear()} AgriTech.{" "}
            {currentLang === "bn"
              ? "সর্বস্বত্ব সংরক্ষিত।"
              : "All rights reserved."}
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-slate-400 transition-colors">
              {currentLang === "bn" ? "গোপনীয়তা নীতি" : "Privacy Policy"}
            </Link>
            <Link href="/terms" className="hover:text-slate-400 transition-colors">
              {currentLang === "bn" ? "ব্যবহারের শর্তাবলী" : "Terms of Service"}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;