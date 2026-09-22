"use client"
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

const ExpertHomePage = () => {
    const {lang} = useLanguage();

    return (
        <div>
            <Link href={"/"} 
className="mb-6 flex items-center gap-2 text-sm font-semibold text-[#1F3D2B] transition hover:text-[#2F5943] ml-100">
  <ArrowLeft size={16} />
  {lang === "bn" ? "ফিরে যান" : "Go Back"}
</Link>
            expert
        </div>
    );
};

export default ExpertHomePage;