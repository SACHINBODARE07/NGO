"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { 
  ArrowRight, Heart, ShieldCheck, CheckCircle2, 
  Star, Megaphone, Info, Maximize2, 
  ShoppingBag, BookOpen, Users
} from "lucide-react";

// --- Hero Content ---
const slides = [
  { 
     image: "/images/home/Fashion-Design-blog.jpg", 
    title: "Empowering Rural Women, Changing Lives.", 
    sub: "Pukar Mahila Mandal (Reg: 02/40/01/21798/17) is a grassroots movement in Guna, dedicated to sustainable livelihood since 2017." 
  },
  { 
   image: "/images/home/empowerment-of-women.jpg", 
    title: "Economic Freedom Through Skill Training.", 
    sub: "Establishing decentralized garment units to ensure rural women earn with dignity from their own villages." 
  },
  { 
    image: "/images/home/image-3.webp", 
    title: "Legal Literacy and Social Excellence.", 
    sub: "Bridging the gap between government welfare schemes and the women who need them most through education." 
  },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col bg-white pt-[72px] md:pt-[96px]">
      
      {/* --- SPLIT HERO: LEFT CONTENT, RIGHT IMAGE CAROUSEL (COMPACT) --- */}
      <section className="relative w-full bg-gradient-to-br from-teal-50 via-white to-rose-50">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-8 md:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            {/* LEFT COLUMN: Text & Buttons (reduced sizes) */}
            <div className="space-y-4 md:space-y-5">
              <span className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-teal-200 text-teal-800 text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-sm">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-rose-600"></span>
                </span>
                Registered NGO: Guna, Madhya Pradesh
              </span>

              <h1 className="text-2xl md:text-4xl lg:text-5xl font-black text-teal-950 leading-tight">
                {slides[currentSlide].title}
              </h1>
              
              <p className="text-zinc-600 text-sm md:text-base max-w-xl font-medium leading-relaxed">
                {slides[currentSlide].sub}
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <Link href="/donate" className="bg-rose-600 hover:bg-rose-700 text-white px-6 py-2.5 rounded-lg font-bold text-xs md:text-sm transition-all flex items-center gap-2 shadow-md">
                  Join the Movement <Heart size={16} />
                </Link>
                <Link href="/our-work" className="bg-white hover:bg-teal-950 hover:text-white text-teal-950 border border-teal-200 px-6 py-2.5 rounded-lg font-bold text-xs md:text-sm transition-all shadow-sm">
                  Our Impact
                </Link>
              </div>

              {/* Trust indicators (compact) */}
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck size={16} className="text-rose-500" />
                  <span className="text-[11px] font-bold text-teal-800">80G Certified</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 size={16} className="text-rose-500" />
                  <span className="text-[11px] font-bold text-teal-800">NITI Aayog</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Star size={16} className="text-rose-500" />
                  <span className="text-[11px] font-bold text-teal-800">2,500+ Empowered</span>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Image Carousel (smaller, tighter) */}
            <div className="relative rounded-2xl overflow-hidden shadow-lg border-2 border-white">
              <div className="aspect-[4/3] relative bg-zinc-100">
                <Image
                  src={slides[currentSlide].image}
                  alt={slides[currentSlide].title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  quality={85}
                  priority
                  className="object-cover"
                />
              </div>
              
              {/* Carousel dots (smaller) */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 bg-white/80 backdrop-blur-sm px-2 py-1.5 rounded-full shadow-md">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentSlide(i)}
                    className={`h-1.5 rounded-full transition-all ${
                      i === currentSlide ? "w-5 bg-rose-600" : "w-1.5 bg-teal-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- TRUST BAR (unchanged) --- */}
      <section className="py-10 bg-white border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { t: "80G Certified", d: "Tax Benefits", i: ShieldCheck },
            { t: "NITI Aayog", d: "Verified Partner", i: CheckCircle2 },
            { t: "CSR-01", d: "Regd. NGO", i: Info },
            { t: "2,500+", d: "Women Empowered", i: Star },
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-3 group">
              <div className="bg-zinc-50 p-2.5 rounded-xl shadow-sm text-rose-500 group-hover:bg-rose-600 group-hover:text-white transition-all">
                <item.i size={20} />
              </div>
              <div>
                <h4 className="font-extrabold text-teal-950 text-xs md:text-sm">{item.t}</h4>
                <p className="text-[9px] uppercase font-bold text-zinc-400 tracking-wider">{item.d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- CORE PROGRAMS (unchanged) --- */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 space-y-3">
          <h2 className="text-rose-600 font-bold text-xs uppercase tracking-[0.3em]">Our Focus</h2>
          <h3 className="text-3xl md:text-4xl font-black text-teal-950 tracking-tight">Core Programs</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { 
              title: "Livelihood Units", 
              desc: "Establishing village-based garment units that provide consistent work and fair wages to rural women.",
              icon: ShoppingBag,
              color: "bg-teal-50 text-teal-600"
            },
            { 
              title: "Legal Awareness", 
              desc: "Training 'Pukar Sahayikas' to educate women about their constitutional rights and government schemes.",
              icon: BookOpen,
              color: "bg-rose-50 text-rose-600"
            },
            { 
              title: "Social Excellence", 
              desc: "Building Area Level Federations (ALFs) to promote leadership and community-driven social change.",
              icon: Users,
              color: "bg-teal-50 text-teal-600"
            }
          ].map((program, idx) => (
            <div key={idx} className="bg-white p-8 rounded-3xl border border-zinc-100 hover:border-rose-200 hover:shadow-xl hover:shadow-rose-100 transition-all group">
              <div className={`w-12 h-12 ${program.color} rounded-xl flex items-center justify-center mb-6`}>
                <program.icon size={24} />
              </div>
              <h4 className="text-xl font-black text-teal-950 mb-3">{program.title}</h4>
              <p className="text-zinc-500 text-sm leading-relaxed font-medium">{program.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- CAMPAIGNS BENTO GRID (unchanged) --- */}
      <section className="py-20 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div className="space-y-2">
              <h2 className="text-rose-600 font-bold text-xs uppercase tracking-[0.3em]">Urgent Appeals</h2>
              <h3 className="text-3xl md:text-4xl font-black text-teal-950 tracking-tight">Live Campaigns</h3>
            </div>
            <Link href="/campaigns" className="text-teal-900 font-bold text-sm flex items-center gap-2 hover:translate-x-1 transition-transform">
              All Campaigns <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-8 group relative rounded-[2.5rem] overflow-hidden min-h-[400px] shadow-lg">
              <Image 
                src="/images/home/image-4.jpg" 
                fill 
                alt="Campaign" 
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={85}
                className="object-cover group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-teal-950 via-teal-950/30 to-transparent" />
              <div className="absolute bottom-0 p-8 space-y-4">
                <span className="bg-rose-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase">Goal: ₹10 Lakhs</span>
                <h4 className="text-2xl md:text-3xl font-black text-white leading-tight">10 New Garment Training Units in Guna</h4>
                <div className="w-full h-1.5 bg-white/20 rounded-full overflow-hidden">
                  <div className="w-[45%] h-full bg-rose-500" />
                </div>
                <div className="flex justify-between items-center pt-2">
                  <Link href="/donate" className="bg-white text-teal-950 px-6 py-3 rounded-xl font-bold text-sm hover:bg-rose-500 hover:text-white transition-all">Support Now</Link>
                  <p className="text-white/80 text-xs font-bold tracking-widest uppercase">45% Raised</p>
                </div>
              </div>
            </div>

            <div className="md:col-span-4 bg-white rounded-[2.5rem] p-8 flex flex-col justify-between border border-zinc-200 shadow-sm">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-rose-100 rounded-xl flex items-center justify-center text-rose-600"><Megaphone size={20} /></div>
                <h4 className="text-xl font-black text-teal-950 leading-tight">Rural Legal Literacy Camps</h4>
                <p className="text-zinc-500 text-sm font-medium">Helping women understand their rights through village-level workshops.</p>
              </div>
              <Link href="/donate" className="w-full text-center py-3.5 mt-6 rounded-xl border-2 border-zinc-100 text-teal-950 font-bold hover:bg-teal-950 hover:text-white transition-all text-sm">Contribute ₹5,000</Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- NEWS & PRESS --- */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-12">
          <h3 className="text-2xl font-black text-teal-950 tracking-tight">Latest from <span className="text-rose-600 italic">the Field</span></h3>
          <div className="h-px flex-1 bg-zinc-100" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[1,2,3].map((i) => (
            <article key={i} className="group cursor-pointer">
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-5">
                <Image 
                  src={`/images/home/image-5.jpg`} 
                  fill 
                  alt="News" 
                  sizes="(max-width: 768px) 100vw, 33vw"
                  quality={80}
                  className="object-cover group-hover:scale-105 transition-transform duration-500" 
                />
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-[10px] font-bold uppercase text-rose-600 tracking-widest">
                  <span>May 20, 2026</span>
                  <span className="w-1 h-1 rounded-full bg-zinc-300" />
                  <span>Field Report</span>
                </div>
                <h4 className="text-lg font-black text-teal-950 group-hover:text-rose-600 transition-colors leading-tight">
                  Republic Day Honors for Area Level Federation
                </h4>
                <p className="text-zinc-500 text-xs md:text-sm font-medium line-clamp-2">
                  Recognized for 100% implementation of women welfare schemes in remote Guna blocks.
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="pb-20 container mx-auto px-6">
        <div className="bg-teal-950 rounded-[3rem] p-10 md:p-20 flex flex-col items-center text-center space-y-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-10 opacity-5 -rotate-12"><Heart size={300} /></div>
          <h3 className="text-3xl md:text-5xl font-black text-white leading-tight">Fuel the Movement.</h3>
          <p className="text-teal-100/60 text-sm md:text-lg max-w-xl font-medium">Join 500+ donors who are transforming rural Guna with dignity over charity.</p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link href="/donate" className="bg-rose-600 text-white px-10 py-3.5 rounded-xl font-bold text-base hover:bg-rose-700 transition-colors shadow-xl shadow-teal-950">Donate via Bank/QR</Link>
            <Link href="/donors" className="bg-white/10 text-white px-10 py-3.5 rounded-xl font-bold text-base hover:bg-white hover:text-teal-950 transition-all border border-white/20">Our Supporters</Link>
          </div>
        </div>
      </section>
    </div>
  );
}