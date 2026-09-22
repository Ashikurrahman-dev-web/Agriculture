"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Bot } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const ScrollButtons = () => {
  const [isVisible, setIsVisible] = useState(true);
  const { lang } = useLanguage();
  const currentLang = (lang as "bn" | "en") || "bn";

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY >= 0) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 flex flex-col gap-4 z-[9999] pointer-events-none">
      <AnimatePresence>
        {isVisible && (
          <Link href="/ai">
            <motion.button
              initial={{ opacity: 0, scale: 0.5, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.5, y: 20 }}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
className="pointer-events-auto cursor-pointer flex items-center gap-2.5 h-12 px-5 rounded-2xl font-bold text-white bg-gradient-to-r from-emerald-500 to-teal-600 shadow-xl border border-white/20 backdrop-blur-md hover:shadow-emerald-500/25 transition-all duration-300"
            >
              <Bot size={20} className="animate-pulse" />
              <span>
                {currentLang === "bn" ? "এআই চ্যাটবট" : "Chat With AI"}
              </span>
            </motion.button>
          </Link>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ScrollButtons;