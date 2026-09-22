import type { Metadata } from "next";
import "../globals.css";

import { LanguageProvider } from "../../contexts/LanguageContext";
import { Toaster } from "react-hot-toast";
import AgriTechNavbar from "@/components/Navbar";
import Footer from "@/components/Footer";


export const metadata: Metadata = {
  title: "AgriTech | Modern Agriculture Platform",
  description:
    "AI-powered smart agriculture platform for modern farmers.",
};

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LanguageProvider>
     <AgriTechNavbar />
      <main className="pb-16 lg:pb-0">{children}</main>
      <Footer />
      <Toaster position="top-center" />
    </LanguageProvider>
      
  );
}