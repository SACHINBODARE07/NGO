"use client";

import { Shield, Eye, Target } from "lucide-react";

export default function About() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start mb-32">
          <div className="space-y-8">
            <h2 className="text-rose-600 font-bold text-xs uppercase tracking-[0.4em]">Our Story</h2>
            <h1 className="text-5xl md:text-7xl font-black text-teal-950 tracking-tighter leading-none">A Voice for the <br /><span className="text-rose-600 italic">Unheard.</span></h1>
            <p className="text-xl text-zinc-600 leading-relaxed font-medium">
              Founded in 2017 in Guna, Madhya Pradesh, Pukar Mahila Mandal started as a small gathering of 10 women discussing local issues. Today, we represent a federation of over 2,500 women across the district.
            </p>
          </div>
          <div className="bg-zinc-50 p-10 rounded-[3rem] border border-zinc-100 space-y-10">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <Target className="text-rose-600" size={32} />
                <h3 className="text-2xl font-black text-teal-950 uppercase text-sm tracking-widest">Our Mission</h3>
              </div>
              <p className="text-zinc-500 font-medium">To create self-reliant rural communities where women lead the social and economic narrative through skills and education.</p>
            </div>
            <div className="h-px bg-zinc-200" />
            <div>
              <div className="flex items-center gap-4 mb-4">
                <Eye className="text-teal-600" size={32} />
                <h3 className="text-2xl font-black text-teal-950 uppercase text-sm tracking-widest">Our Vision</h3>
              </div>
              <p className="text-zinc-500 font-medium">A society free of gender-based poverty where every rural household is an entrepreneur hub.</p>
            </div>
          </div>
        </section>

        {/* --- LEGAL BOX --- */}
        <div className="bg-teal-950 rounded-[3.5rem] p-12 md:p-20 text-white relative overflow-hidden">
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h4 className="text-3xl font-black tracking-tight">Radical Transparency</h4>
              <p className="text-teal-100/60 font-medium leading-relaxed text-lg">
                We are a fully compliant NGO registered under the Madhya Pradesh Societies Registration Act, 1973.
              </p>
              <div className="grid grid-cols-1 gap-4">
                {[
                  "Reg No: 02/40/01/21798/17",
                  "80G & 12A Certified",
                  "NITI Aayog Registered (NGO Darpan)",
                  "CSR-01 Compliant"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 font-bold text-sm bg-white/5 p-4 rounded-xl border border-white/10">
                    <Shield className="text-rose-500" size={18} /> {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="aspect-square bg-white/5 rounded-full flex items-center justify-center border border-white/5 relative">
               <div className="text-center">
                  <span className="text-7xl font-black text-rose-500 block mb-2">100%</span>
                  <span className="text-xs font-bold uppercase tracking-widest text-teal-100">Donation Efficiency</span>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}