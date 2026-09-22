"use client";

import React, { useState } from "react";
import { AlertTriangle, ShieldCheck, Search, Filter } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface Disease {
  id: number;
  cropName: { bn: string; en: string };
  riskLevel: { bn: string; en: string; type: "high" | "medium" | "low" };
  category: { bn: string; en: string };
  diseaseName: { bn: string; en: string };
  symptom: { bn: string; en: string };
  solution: { bn: string; en: string };
  image: string;
}

const diseasesData: Disease[] = [
  {
    id: 1,
    cropName: { bn: "ধান", en: "Rice" },
    riskLevel: { bn: "উচ্চ ঝুঁকি", en: "High Risk", type: "high" },
    category: { bn: "ছত্রাকজনিত", en: "Fungal" },
    diseaseName: { bn: "ধানের ব্লাস্ট রোগ", en: "Rice Blast" },
    symptom: {
      bn: "পাতায় ছোট ছোট বাদামী বা ধূসর দাগ দেখা যায়।",
      en: "Small brown or grayish spots appear on the leaves.",
    },
    solution: {
      bn: "আক্রান্ত অংশ পর্যবেক্ষণ করুন এবং প্রয়োজনে অনুমোদিত ছত্রাকনাশক ব্যবহার করুন।",
      en: "Inspect affected parts and apply approved fungicides if needed.",
    },
    image: "https://images.unsplash.com/photo-1536657464919-892534f60d6e?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 2,
    cropName: { bn: "টমেটো", en: "Tomato" },
    riskLevel: { bn: "মাঝারি ঝুঁকি", en: "Medium Risk", type: "medium" },
    category: { bn: "ছত্রাকজনিত", en: "Fungal" },
    diseaseName: { bn: "টমেটোর পাতার দাগ", en: "Tomato Leaf Spot" },
    symptom: {
      bn: "পাতায় গোলাকার কালচে বা বাদামী দাগ দেখা যায়।",
      en: "Circular dark or brown spots appear on leaves.",
    },
    solution: {
      bn: "আক্রান্ত পাতা অপসারণ করে জমি পরিষ্কার রাখুন।",
      en: "Remove infected leaves and keep the field clean.",
    },
    image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 3,
    cropName: { bn: "আলু", en: "Potato" },
    riskLevel: { bn: "উচ্চ ঝুঁকি", en: "High Risk", type: "high" },
    category: { bn: "ছত্রাকজনিত", en: "Fungal" },
    diseaseName: { bn: "আলুর লেট ব্লাইট", en: "Potato Late Blight" },
    symptom: {
      bn: "পাতায় পানির মতো ভেজা বাদামী দাগ দেখা যায়।",
      en: "Water-soaked dark brown patches appear on leaves.",
    },
    solution: {
      bn: "আক্রান্ত গাছ দ্রুত শনাক্ত করে নিয়ন্ত্রণ ব্যবস্থা গ্রহণ করুন।",
      en: "Identify infected plants quickly and apply protective sprays.",
    },
    image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 4,
    cropName: { bn: "ভুট্টা", en: "Maize" },
    riskLevel: { bn: "উচ্চ ঝুঁকি", en: "High Risk", type: "high" },
    category: { bn: "কীটপতঙ্গজনিত", en: "Pest Attack" },
    diseaseName: { bn: "ফল আর্মিওয়ার্ম পোকা", en: "Fall Armyworm" },
    symptom: {
      bn: "পাতায় বড় বড় ছিদ্র এবং কচি ডগায় বিষ্ঠা দেখা যায়।",
      en: "Large holes in leaves and frass inside leaf whorls.",
    },
    solution: {
      bn: "জৈব বালাইনাশক স্প্রে করুন ও ফেরোমন ফাঁদ ব্যবহার করুন।",
      en: "Spray bio-pesticides and install pheromone traps.",
    },
    image: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 5,
    cropName: { bn: "বেগুন", en: "Eggplant" },
    riskLevel: { bn: "উচ্চ ঝুঁকি", en: "High Risk", type: "high" },
    category: { bn: "কীটপতঙ্গজনিত", en: "Pest Attack" },
    diseaseName: { bn: "ডগা ও ফল ছিদ্রকারী পোকা", en: "Fruit and Shoot Borer" },
    symptom: {
      bn: "গাছের কচি ডগা ও বেগুন ছিদ্র হয়ে শুকিয়ে যায়।",
      en: "Young shoots wilt and fruits have visible entry holes.",
    },
    solution: {
      bn: "আক্রান্ত ডগা কেটে ধ্বংস করুন এবং লিউর ফাঁদ বসান।",
      en: "Prune and destroy infected shoots; use sex pheromone lures.",
    },
    image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 6,
    cropName: { bn: "গম", en: "Wheat" },
    riskLevel: { bn: "উচ্চ ঝুঁকি", en: "High Risk", type: "high" },
    category: { bn: "ছত্রাকজনিত", en: "Fungal" },
    diseaseName: { bn: "গমের ব্লাস্ট রোগ", en: "Wheat Blast" },
    symptom: {
      bn: "শীষের গোড়ায় ধূসর দাগ হয় এবং শীষ শুকিয়ে সাদা হয়ে যায়।",
      en: "Spikes turn completely bleached white above infected nodes.",
    },
    solution: {
      bn: "প্রতিরোধক জাতের বীজ ব্যবহার করুন ও ট্রায়াজোল স্প্রে করুন।",
      en: "Use blast-resistant seed varieties and approved triazole spray.",
    },
    image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 7,
    cropName: { bn: "সরিষা", en: "Mustard" },
    riskLevel: { bn: "মাঝারি ঝুঁকি", en: "Medium Risk", type: "medium" },
    category: { bn: "কীটপতঙ্গজনিত", en: "Pest Attack" },
    diseaseName: { bn: "সরিষার জাবে পোকা", en: "Mustard Aphid" },
    symptom: {
      bn: "কচি পাতা ও ফুল থেকে রস চুষে খায়, ফলে গাছ বাড়ে না।",
      en: "Insects suck sap from flowers and leaves, stunting growth.",
    },
    solution: {
      bn: "ছায়াযুক্ত সকালে সাবান পানি বা নিম তেল স্প্রে করুন।",
      en: "Spray soapy water or neem oil solution early in the morning.",
    },
    image: "https://images.unsplash.com/photo-1508610048659-a06b669e3321?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 8,
    cropName: { bn: "কলা", en: "Banana" },
    riskLevel: { bn: "উচ্চ ঝুঁকি", en: "High Risk", type: "high" },
    category: { bn: "ছত্রাকজনিত", en: "Fungal" },
    diseaseName: { bn: "সিগাটোকা রোগ", en: "Sigatoka Leaf Spot" },
    symptom: {
      bn: "পাতায় লম্বাটে হলুদ থেকে লালচে-বাদামী দাগ সৃষ্টি হয়।",
      en: "Elongated yellowish-green to dark reddish-brown streaks on leaves.",
    },
    solution: {
      bn: "আক্রান্ত পাতা কেটে পুড়িয়ে ফেলুন ও সঠিক সেচ বজায় রাখুন।",
      en: "Cut and burn infected leaves; ensure proper drainage.",
    },
    image: "https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 9,
    cropName: { bn: "আম", en: "Mango" },
    riskLevel: { bn: "মাঝারি ঝুঁকি", en: "Medium Risk", type: "medium" },
    category: { bn: "ছত্রাকজনিত", en: "Fungal" },
    diseaseName: { bn: "অ্যানথ্রাকনোজ রোগ", en: "Mango Anthracnose" },
    symptom: {
      bn: "কচি পাতা, মুকুল ও ফলে কালচে ছোপ ছোপ দাগ পড়ে।",
      en: "Black sunken spots on young leaves, blossoms, and fruits.",
    },
    solution: {
      bn: "মুকুল আসার পূর্বে এবং পরে মানকোজেব স্প্রে করুন।",
      en: "Apply Mancozeb spray before and after blossom onset.",
    },
    image: "https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 10,
    cropName: { bn: "মরিচ", en: "Chili" },
    riskLevel: { bn: "উচ্চ ঝুঁকি", en: "High Risk", type: "high" },
    category: { bn: "ভাইরাসজনিত", en: "Viral" },
    diseaseName: { bn: "পাতা কোঁকড়ানো রোগ", en: "Chili Leaf Curl" },
    symptom: {
      bn: "পাতা কোঁকড়ে ছোট হয়ে যায় ও গাছের বৃদ্ধি থেমে যায়।",
      en: "Leaves curl upward, shrink, and plant growth stunting occurs.",
    },
    solution: {
      bn: "সাদা মাছি দমনে হলুদ আঠা ফাঁদ ব্যবহার করুন।",
      en: "Use yellow sticky traps to control whiteflies spreading the virus.",
    },
    image: "https://images.unsplash.com/photo-1588252303782-cb80119abd6d?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 11,
    cropName: { bn: "পেঁয়াজ", en: "Onion" },
    riskLevel: { bn: "মাঝারি ঝুঁকি", en: "Medium Risk", type: "medium" },
    category: { bn: "ছত্রাকজনিত", en: "Fungal" },
    diseaseName: { bn: "পার্পল ব্লচ (বেগুনি দাগ)", en: "Purple Blotch" },
    symptom: {
      bn: "পাতায় বেগুনি রঙের চোখ আকৃতির কেন্দ্রযুক্ত দাগ তৈরি হয়।",
      en: "Purplish oval spots with yellow concentric zones on leaves.",
    },
    solution: {
      bn: "জমিতে পানি জমা রোধ করুন এবং ইপ্রোডিওন স্প্রে করুন।",
      en: "Avoid waterlogging and spray recommended fungicide.",
    },
    image: "https://plus.unsplash.com/premium_photo-1668076517573-fa01307d87ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8b25pb258ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 12,
    cropName: { bn: "রসুন", en: "Garlic" },
    riskLevel: { bn: "কম ঝুঁকি", en: "Low Risk", type: "low" },
    category: { bn: "ব্যাকটেরিয়াজেনিত", en: "Bacterial" },
    diseaseName: { bn: "রসুনের সফট রট", en: "Bacterial Soft Rot" },
    symptom: {
      bn: "কন্দ পচে দুর্গন্ধ বের হয় এবং পাতা শুকিয়ে হলুদ হয়।",
      en: "Bulbs decay with foul odor and leaves turn yellow and dry.",
    },
    solution: {
      bn: "সুস্থ বীজ নির্বাচন করুন এবং ফসল তোলার পর ভালো করে শুকান।",
      en: "Select healthy seeds and cure bulbs properly after harvest.",
    },
    image: "https://images.unsplash.com/photo-1540148426945-6cf22a6b2383?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 13,
    cropName: { bn: "পেঁপে", en: "Papaya" },
    riskLevel: { bn: "উচ্চ ঝুঁকি", en: "High Risk", type: "high" },
    category: { bn: "ভাইরাসজনিত", en: "Viral" },
    diseaseName: { bn: "রিং স্পট ভাইরাস", en: "Papaya Ringspot Virus" },
    symptom: {
      bn: "ফলে আংটির মতো গোলাকার দাগ এবং পাতায় মোজাইক ছাপ।",
      en: "Dark green rings on fruit skin and leaf mosaic symptoms.",
    },
    solution: {
      bn: "রোগাক্রান্ত গাছ তুলে পুড়িয়ে ফেলুন, জাব পোকা দমন করুন।",
      en: "Uproot and destroy infected plants; control aphid vectors.",
    },
    image: "https://images.unsplash.com/photo-1517282009859-f000ec3b26fe?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 14,
    cropName: { bn: "শসা", en: "Cucumber" },
    riskLevel: { bn: "মাঝারি ঝুঁকি", en: "Medium Risk", type: "medium" },
    category: { bn: "ছত্রাকজনিত", en: "Fungal" },
    diseaseName: { bn: "ডাউনি মিলডিউ", en: "Downy Mildew" },
    symptom: {
      bn: "পাতার ওপরের পিঠে কোণাকৃতির হলুদ দাগ ও নিচে ধূসর ছত্রাক।",
      en: "Angular yellow spots on upper leaves and purplish downy growth below.",
    },
    solution: {
      bn: "সকালে গাছে পানি দেওয়া এড়িয়ে চলুন ও ছত্রাকনাশক স্প্রে করুন।",
      en: "Avoid overhead irrigation and spray systemic fungicides.",
    },
    image: "https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 15,
    cropName: { bn: "লাউ", en: "Bottle Gourd" },
    riskLevel: { bn: "কম ঝুঁকি", en: "Low Risk", type: "low" },
    category: { bn: "ছত্রাকজনিত", en: "Fungal" },
    diseaseName: { bn: "পাউডারি মিলডিউ", en: "Powdery Mildew" },
    symptom: {
      bn: "পাতায় সাদা পাউডারের মতো গুঁড়ো আস্তরণ দেখা যায়।",
      en: "White talcum powder-like patches covering upper leaf surfaces.",
    },
    solution: {
      bn: "সালফারযুক্ত ছত্রাকনাশক বা বেকিং সোডা দ্রবণ ব্যবহার করুন।",
      en: "Apply sulfur-based fungicides or baking soda water spray.",
    },
    image: "https://images.unsplash.com/photo-1590005354167-6da97870c757?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 16,
    cropName: { bn: "গাজর", en: "Carrot" },
    riskLevel: { bn: "কম ঝুঁকি", en: "Low Risk", type: "low" },
    category: { bn: "ছত্রাকজনিত", en: "Fungal" },
    diseaseName: { bn: "অলটারনারিয়া লিফ ব্লাইট", en: "Alternaria Leaf Blight" },
    symptom: {
      bn: "পুরাতন পাতার কিনারে কালো-বাদামী পোড়া দাগ।",
      en: "Dark brown to black spot lesions along older leaf margins.",
    },
    solution: {
      bn: "সঠিক দূরত্বে বীজ রোপণ করুন ও পানি নিষ্কাশন নিশ্চিত করুন।",
      en: "Maintain proper spacing and prevent water congestion.",
    },
    image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2Fycm90fGVufDB8fDB8fHww",
  },
  {
    id: 17,
    cropName: { bn: "ফুলকপি", en: "Cauliflower" },
    riskLevel: { bn: "মাঝারি ঝুঁকি", en: "Medium Risk", type: "medium" },
    category: { bn: "ব্যাকটেরিয়াজেনিত", en: "Bacterial" },
    diseaseName: { bn: "ব্ল্যাক রট (কালো পচন)", en: "Black Rot" },
    symptom: {
      bn: "পাতার কিনারায় 'V' আকৃতির হলুদ বা কালো দাগ।",
      en: "V-shaped yellow lesions appearing along leaf margins.",
    },
    solution: {
      bn: "কপার অক্সিক্লোরাইড স্প্রে করুন ও শস্য পর্যায় অনুসরণ করুন।",
      en: "Spray Copper Oxychloride and practice crop rotation.",
    },
    image: "https://images.unsplash.com/photo-1568584711075-3d021a7c3ca3?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 18,
    cropName: { bn: "বাঁধাকপি", en: "Cabbage" },
    riskLevel: { bn: "উচ্চ ঝুঁকি", en: "High Risk", type: "high" },
    category: { bn: "ছত্রাকজনিত", en: "Fungal" },
    diseaseName: { bn: "ক্লাবরুট রোগ", en: "Clubroot" },
    symptom: {
      bn: "শিকড় ফুলে টিউমারের মতো আকার নেয়, গাছ নেতিয়ে পড়ে।",
      en: "Swollen distorted roots and severe wilting during hot days.",
    },
    solution: {
      bn: "মাটিতে চুন প্রয়োগ করে pH বৃদ্ধি করুন (pH ৬.৮-৭.৫)।",
      en: "Apply lime to soil to increase pH level above 7.0.",
    },
    image: "https://images.unsplash.com/photo-1611105637889-3afd7295bdbf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Q2FiYmFnZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 19,
    cropName: { bn: "মিষ্টি কুমড়া", en: "Pumpkin" },
    riskLevel: { bn: "মাঝারি ঝুঁকি", en: "Medium Risk", type: "medium" },
    category: { bn: "কীটপতঙ্গজনিত", en: "Pest Attack" },
    diseaseName: { bn: "রেড পাম্পকিন বিটল", en: "Red Pumpkin Beetle" },
    symptom: {
      bn: "লাল পোকা পাতা খেয়ে কঙ্কাল বানিয়ে ফেলে।",
      en: "Red beetles chew holes and defoliate young leaves completely.",
    },
    solution: {
      bn: "সকালে পোকা হাত দিয়ে ধরে মেরে ফেলুন বা ছাই ছিটিয়ে দিন।",
      en: "Handpick beetles early morning or dust wood ash on leaves.",
    },
    image: "https://images.unsplash.com/photo-1506917728037-b6af01a7d403?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 20,
    cropName: { bn: "পেয়ারা", en: "Guava" },
    riskLevel: { bn: "উচ্চ ঝুঁকি", en: "High Risk", type: "high" },
    category: { bn: "ছত্রাকজনিত", en: "Fungal" },
    diseaseName: { bn: "পেয়ারার উইল্ট (ঢলে পড়া)", en: "Guava Wilt" },
    symptom: {
      bn: "গাছের পাতা হঠাৎ হলুদ হয়ে শুকিয়ে ঝরে যায় ও গাছ মারা যায়।",
      en: "Yellowing, browning of leaves followed by sudden wilting.",
    },
    solution: {
      bn: "আক্রান্ত গাছ উঠিয়ে চুনের গুঁড়া ছিটিয়ে দিন ও জৈব সার বাড়ান।",
      en: "Uproot infected tree and treat soil with lime and organic matter.",
    },
    image: "https://images.unsplash.com/photo-1689996647099-a7a0b67fd2f6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8R3VhdmF8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 21,
    cropName: { bn: "লেবু", en: "Lemon" },
    riskLevel: { bn: "মাঝারি ঝুঁকি", en: "Medium Risk", type: "medium" },
    category: { bn: "ব্যাকটেরিয়াজেনিত", en: "Bacterial" },
    diseaseName: { bn: "সিট্রাস ক্যানকার", en: "Citrus Canker" },
    symptom: {
      bn: "পাতা, ডাল ও ফলে খসখসে বাদামী গুটি দাগ তৈরি হয়।",
      en: "Corky, raised brown lesions on leaves, stems, and fruits.",
    },
    solution: {
      bn: "আক্রান্ত ডালপালা ছেঁটে বোর্ডো মিশ্রণ স্প্রে করুন।",
      en: "Prune infected twigs and spray Bordeaux mixture regularly.",
    },
    image: "https://images.unsplash.com/photo-1534531173927-aeb928d54385?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 22,
    cropName: { bn: "তরমুজ", en: "Watermelon" },
    riskLevel: { bn: "উচ্চ ঝুঁকি", en: "High Risk", type: "high" },
    category: { bn: "ছত্রাকজনিত", en: "Fungal" },
    diseaseName: { bn: "ফিউজারিয়াম উইল্ট", en: "Fusarium Wilt" },
    symptom: {
      bn: "দিনের আলোতে লতা নেতিয়ে পড়ে এবং রাতের বেলা ঠিক হয় না।",
      en: "Vines wilt during warm days and fail to recover at night.",
    },
    solution: {
      bn: "ট্রাইকোডার্মা দিয়ে মাটি শোধন করুন ও প্রতিরোধী জাত লাগান।",
      en: "Treat soil with Trichoderma and plant resistant varieties.",
    },
    image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 23,
    cropName: { bn: "ভেন্ডি (ঢেঁড়শ)", en: "Okra" },
    riskLevel: { bn: "উচ্চ ঝুঁকি", en: "High Risk", type: "high" },
    category: { bn: "ভাইরাসজনিত", en: "Viral" },
    diseaseName: { bn: "হলুদ মোজাইক ভাইরাস", en: "Yellow Vein Mosaic" },
    symptom: {
      bn: "পাতার শিরাগুলো হলুদ হয়ে যায় এবং ফল ছোট কাঠিন্য পায়।",
      en: "Veins turn bright yellow; fruits become pale, small, and tough.",
    },
    solution: {
      bn: "রোগবাহী সাদা মাছি পোকা দমনে কীটনাশক প্রয়োগ করুন।",
      en: "Control whitefly vectors using recommended systemic insecticides.",
    },
    image: "https://images.unsplash.com/photo-1425543103986-22abb7d7e8d2?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 24,
    cropName: { bn: "আদা", en: "Ginger" },
    riskLevel: { bn: "উচ্চ ঝুঁকি", en: "High Risk", type: "high" },
    category: { bn: "ছত্রাকজনিত", en: "Fungal" },
    diseaseName: { bn: "আদার সফট রট (রাইজোম পচন)", en: "Rhizome Rot" },
    symptom: {
      bn: "গাছের গোড়া নরম হয়ে পচে যায় ও পাতা হলুদ হয়ে শুকায়।",
      en: "Water-soaked lesions at pseudostem base causing shoot decay.",
    },
    solution: {
      bn: "বীজ আদা ট্রাইকোডার্মা দিয়ে শোধন করে রোপণ করুন।",
      en: "Treat seed rhizomes with Trichoderma before planting.",
    },
    image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 25,
    cropName: { bn: "হলুদ", en: "Turmeric" },
    riskLevel: { bn: "মাঝারি ঝুঁকি", en: "Medium Risk", type: "medium" },
    category: { bn: "ছত্রাকজনিত", en: "Fungal" },
    diseaseName: { bn: "লিফ স্পট (পাতার দাগ)", en: "Turmeric Leaf Spot" },
    symptom: {
      bn: "পাতায় বাদামী থেকে ধূসর রঙের উপবৃত্তাকার দাগ পড়ে।",
      en: "Elliptical brown spots with yellow halos on leaf surface.",
    },
    solution: {
      bn: "আক্রান্ত পাতা অপসারণ করুন ও ম্যানকোজেব ছিটিয়ে দিন।",
      en: "Remove infected leaves and spray Mancozeb fungicide.",
    },
    image: "https://plus.unsplash.com/premium_photo-1726862790171-0d6208559224?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8VHVybWVyaWN8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 26,
    cropName: { bn: "পাট", en: "Jute" },
    riskLevel: { bn: "মাঝারি ঝুঁকি", en: "Medium Risk", type: "medium" },
    category: { bn: "ছত্রাকজনিত", en: "Fungal" },
    diseaseName: { bn: "কান্ড পচা রোগ", en: "Jute Stem Rot" },
    symptom: {
      bn: "কান্ডে কালো দাগ পড়ে এবং কাণ্ড দুর্বল হয়ে ভেঙে যায়।",
      en: "Dark brown lesions on stems leading to stem breakage.",
    },
    solution: {
      bn: "কার্বেনডাজিম দিয়ে বীজ শোধন করুন এবং নিষ্কাশন ভালো রাখুন।",
      en: "Treat seeds with Carbendazim and maintain field drainage.",
    },
    image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 27,
    cropName: { bn: "চা", en: "Tea" },
    riskLevel: { bn: "উচ্চ ঝুঁকি", en: "High Risk", type: "high" },
    category: { bn: "ছত্রাকজনিত", en: "Fungal" },
    diseaseName: { bn: "রেড রাস্ট (লাল মরিচা)", en: "Red Rust" },
    symptom: {
      bn: "পাতার ওপর তামাতে-লাল বা কমলা রঙের থোকা দেখা যায়।",
      en: "Orange-red velvety spots on upper leaf surfaces and stems.",
    },
    solution: {
      bn: "গাছের পর্যাপ্ত ছাঁটাই নিশ্চিত করুন ও কপার ছত্রাকনাশক দিন।",
      en: "Ensure adequate shade pruning and apply Copper Oxychloride.",
    },
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 28,
    cropName: { bn: "পেঁপে", en: "Papaya" },
    riskLevel: { bn: "মাঝারি ঝুঁকি", en: "Medium Risk", type: "medium" },
    category: { bn: "ছত্রাকজনিত", en: "Fungal" },
    diseaseName: { bn: "ড্যাম্পিং অফ (চারা ধসা)", en: "Damping Off" },
    symptom: {
      bn: "নার্সারিতে কচি চারার গোড়া পচে মাটি ছূয়ে ঢলে পড়ে।",
      en: "Seedlings collapse at soil level due to stem collar rot.",
    },
    solution: {
      bn: "বীজতলার মাটি বাষ্প বা ছত্রাকনাশক দিয়ে শোধন করুন।",
      en: "Solarize or treat nursery bed soil before seed sowing.",
    },
    image: "https://images.unsplash.com/photo-1526318472351-c75fcf070305?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UGFwYXlhfGVufDB8fDB8fHww",
  },
  {
  id: 29,
  cropName: { bn: "ধান", en: "Rice" },
  riskLevel: { bn: "উচ্চ ঝুঁকি", en: "High Risk", type: "high" },
  category: { bn: "ছত্রাকজনিত", en: "Fungal" },
  diseaseName: { bn: "ধানের ব্লাস্ট রোগ", en: "Rice Blast" },
  symptom: {
    bn: "পাতায় চোখের মতো দাগ পড়ে, শীষের গোড়া পচে কালো হয়ে ভাঙ পড়ে ও চিটা হয়।",
    en: "Spindle-shaped spots on leaves, rotting at the base of the panicle causing unfilled grains.",
  },
  solution: {
    bn: "সুষম সার ব্যবহার করুন, জমিত পটাশ দিন এবং ট্রাইসাইক্লাজোল বা ট্রাইফ্লক্সিস্ট্রবিন স্প্রে করুন।",
    en: "Apply balanced fertilizer, add potassium, and spray Tricyclazole or Trifloxystrobin fungicide.",
  },
  image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=800",
},
  {
    id: 30,
    cropName: { bn: "স্ট্রবেরি", en: "Strawberry" },
    riskLevel: { bn: "উচ্চ ঝুঁকি", en: "High Risk", type: "high" },
    category: { bn: "ছত্রাকজনিত", en: "Fungal" },
    diseaseName: { bn: "গ্রে মোল্ড (ধূসর পচন)", en: "Gray Mold (Botrytis)" },
    symptom: {
      bn: "পাকা ফলে ধূসর রঙের তুলোর মতো পচন সৃষ্টি হয়।",
      en: "Gray velvet-like mold covering developing and ripe berries.",
    },
    solution: {
      bn: "ফলের নিচে খড় বিছিয়ে দিন যাতে মাটি স্পর্শ না করে।",
      en: "Mulch with straw to prevent fruit contact with moist soil.",
    },
    image: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&q=80&w=800",
  },
];

export default function DiseasePage() {
  const { lang } = useLanguage();
  const currentLang = (lang as "bn" | "en") || "bn";

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    ...Array.from(
      new Set(diseasesData.map((d) => d.category[currentLang]))
    ),
  ];

  const filteredDiseases = diseasesData.filter((item) => {
    const matchesSearch =
      item.diseaseName[currentLang].toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.cropName[currentLang].toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory =
      selectedCategory === "All" || item.category[currentLang] === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-slate-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">
            {currentLang === "bn" ? "রোগ লাইব্রেরি" : "Disease Library"}
          </h1>
          <p className="text-slate-500 text-sm sm:text-base mt-1">
            {currentLang === "bn"
              ? "ফসলের বিভিন্ন রোগব্যাধি, লক্ষণ এবং বিশেষজ্ঞদের পরামর্শ অনুযায়ী প্রতিকার।"
              : "Comprehensive guide on crop diseases, symptoms, and expert remedies."}
          </p>
        </div>

        {/* Search & Category Filter Bar */}
        <div className="mb-8 flex flex-col md:flex-row gap-4 justify-between items-stretch md:items-center bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
          {/* Search Bar */}
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input
              type="text"
              placeholder={
                currentLang === "bn"
                  ? "রোগ বা ফসলের নাম দিয়ে খুঁজুন..."
                  : "Search by disease or crop..."
              }
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-sm focus:outline-none focus:border-emerald-600 text-slate-800"
            />
          </div>

          {/* Categories */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
            <Filter size={16} className="text-slate-400 shrink-0 hidden sm:block" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors ${
                  selectedCategory === cat
                    ? "bg-slate-900 text-white"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {cat === "All" ? (currentLang === "bn" ? "সবগুলো" : "All") : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Diseases Grid List */}
        {filteredDiseases.length === 0 ? (
          <div className="text-center py-16 text-slate-500 bg-white rounded-2xl border border-slate-200">
            <p className="text-base font-medium">
              {currentLang === "bn" ? "কোনো তথ্য পাওয়া যায়নি!" : "No diseases found!"}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDiseases.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Image Container with Badges */}
                  <div className="relative h-52 w-full bg-slate-100 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.diseaseName[currentLang]}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />

                    {/* Top Right: Risk Badge */}
                    <div className="absolute top-3 right-3">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-bold text-white shadow-md ${
                          item.riskLevel.type === "high"
                            ? "bg-red-600"
                            : item.riskLevel.type === "medium"
                            ? "bg-amber-500"
                            : "bg-emerald-600"
                        }`}
                      >
                        {item.riskLevel[currentLang]}
                      </span>
                    </div>

                    {/* Bottom Left: Affected Crop Badge */}
                    <div className="absolute bottom-3 left-3 bg-black/75 backdrop-blur-md px-3 py-1 rounded-lg text-xs font-medium text-white border border-white/10">
                      {currentLang === "bn" ? "আক্রান্ত ফসল: " : "Crop: "}
                      <span className="font-bold">{item.cropName[currentLang]}</span>
                    </div>

                    {/* Bottom Center: Decorative Dots */}
                    <div className="absolute bottom-3 right-4 flex gap-1 items-center">
                      <div className="w-2.5 h-1 bg-white rounded-full"></div>
                      <div className="w-1 h-1 bg-white/60 rounded-full"></div>
                      <div className="w-1 h-1 bg-white/60 rounded-full"></div>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-5">
                    {/* Category tag & ID */}
                    <div className="flex items-center justify-between text-xs text-slate-400 font-medium mb-2">
                      <span className="bg-slate-100 text-slate-600 px-2.5 py-0.5 rounded-md font-semibold">
                        {item.category[currentLang]}
                      </span>
                      <span>#{item.id}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-slate-900 mb-4">
                      {item.diseaseName[currentLang]}
                    </h3>

                    {/* Main Symptom Box */}
                    <div className="bg-amber-50/70 border border-amber-200/60 rounded-xl p-3.5 mb-3">
                      <div className="flex items-center gap-1.5 text-amber-800 font-semibold text-xs mb-1.5">
                        <AlertTriangle size={15} className="text-amber-600 shrink-0" />
                        <span>{currentLang === "bn" ? "প্রধান লক্ষণ" : "Primary Symptoms"}</span>
                      </div>
                      <p className="text-xs text-slate-700 leading-relaxed font-normal">
                        {item.symptom[currentLang]}
                      </p>
                    </div>

                    {/* Solution Box */}
                    <div className="bg-emerald-50/70 border border-emerald-200/60 rounded-xl p-3.5">
                      <div className="flex items-center gap-1.5 text-emerald-800 font-semibold text-xs mb-1.5">
                        <ShieldCheck size={15} className="text-emerald-600 shrink-0" />
                        <span>{currentLang === "bn" ? "প্রস্তাবিত প্রতিকার" : "Suggested Solution"}</span>
                      </div>
                      <p className="text-xs text-slate-700 leading-relaxed font-normal">
                        {item.solution[currentLang]}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}