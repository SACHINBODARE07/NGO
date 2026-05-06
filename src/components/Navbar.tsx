"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, Phone, Mail, Heart, Search, ChevronRight } from "lucide-react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchActive, setSearchActive] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Our Work", href: "/our-work" },
    { name: "Donors", href: "/donors" },
    { name: "About Us", href: "/about" },
  ];

  return (
    <header className={`fixed top-0 w-full z-[100] transition-all duration-300`}>
      {/* --- TOP BAR  */}
      <div className={`bg-teal-950 text-zinc-300 py-1.5 hidden md:block border-b border-white/5 transition-all duration-500 ${isScrolled ? "h-0 opacity-0 overflow-hidden" : "h-auto opacity-100"}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-[10px] font-bold uppercase tracking-wider">
          <div className="flex gap-6">
            <a href="tel:+910000000000" className="flex items-center gap-1.5 hover:text-rose-400 transition-colors"><Phone size={10} /> +91 000 000 0000</a>
            <a href="mailto:info@pukarmandal.org" className="flex items-center gap-1.5 hover:text-rose-400 transition-colors"><Mail size={10} /> info@pukarmandal.org</a>
          </div>
          <div className="flex items-center gap-5">
            <div className="flex gap-3.5 border-r border-white/10 pr-5">
              <Link href="#" className="hover:text-rose-400 transition-all"><FaFacebook size={12} /></Link>
              <Link href="#" className="hover:text-rose-400 transition-all"><FaInstagram size={12} /></Link>
              <Link href="#" className="hover:text-rose-400 transition-all"><FaTwitter size={12} /></Link>
            </div>
            <Link href="/donate" className="text-rose-400 hover:text-rose-300 flex items-center gap-1 group">
              <Heart size={10} fill="currentColor" className="group-hover:scale-110 transition-transform" /> 80G Benefits
            </Link>
          </div>
        </div>
      </div>

      {/* --- MAIN NAV  --- */}
      <nav className={`transition-all duration-300 ${isScrolled ? "bg-white/95 backdrop-blur-md shadow-md py-1.5" : "bg-white py-2.5"} border-b border-zinc-100`}>
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
          
          {/* Logo  */}
          <Link href="/" className="relative h-18 w-18 md:h-18 md:w-18 hover:scale-105 transition-transform">
            <Image src="/mahila.png" alt="Pukar Logo" fill className="object-contain" priority />
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`px-3 py-1.5 rounded-full text-[11px] font-extrabold uppercase tracking-wider transition-all ${
                  pathname === link.href ? "text-rose-600 bg-rose-50" : "text-zinc-500 hover:text-teal-950 hover:bg-zinc-50"
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            <div className="flex items-center gap-2 ml-2 pl-4 border-l border-zinc-100">
              <button 
                onClick={() => setSearchActive(!searchActive)}
                className="p-1.5 text-zinc-400 hover:text-teal-900 transition-colors"
              >
                <Search size={16} />
              </button>
              <Link
                href="/donate"
                className="bg-rose-600 text-white px-4 py-1.5 rounded-full font-extrabold text-[10px] hover:bg-teal-950 shadow-md shadow-rose-100 hover:shadow-teal-100 transition-all flex items-center gap-1.5"
              >
                <Heart size={12} /> DONATE
              </Link>
            </div>
          </div>

          {/* Mobile Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button 
               onClick={() => setSearchActive(!searchActive)}
               className="p-1.5 text-zinc-500"
            >
              <Search size={20} />
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="p-1.5 text-zinc-900 transition-colors">
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Search Overlay */}
        {searchActive && (
          <div className="absolute top-full left-0 w-full bg-white border-b border-zinc-100 p-3 animate-in slide-in-from-top duration-300 shadow-xl">
            <div className="max-w-3xl mx-auto relative">
              <input 
                type="text" 
                autoFocus
                placeholder="Search programs or impact..." 
                className="w-full bg-zinc-50 border-none rounded-lg py-2 px-4 outline-none focus:ring-2 ring-rose-500/10 font-medium text-sm" 
              />
              <button onClick={() => setSearchActive(false)} className="absolute right-3 top-2 text-zinc-400 hover:text-rose-500">
                <X size={18} />
              </button>
            </div>
          </div>
        )}

        {/* Mobile Menu  */}
        {isOpen && (
          <div className="lg:hidden fixed inset-0 top-[60px] bg-white z-[90] p-4 flex flex-col gap-2 animate-in slide-in-from-right duration-300">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`flex justify-between items-center p-3 rounded-lg border border-transparent transition-all ${
                  pathname === link.href ? "bg-rose-50 text-rose-600 border-rose-100" : "bg-zinc-50 text-teal-950"
                } text-sm font-extrabold`}
              >
                {link.name} <ChevronRight size={16} className="text-rose-500" />
              </Link>
            ))}
            <Link 
              href="/donate" 
              onClick={() => setIsOpen(false)}
              className="mt-3 w-full bg-rose-600 text-white p-3 rounded-xl text-center font-extrabold text-base shadow-lg active:scale-95 transition-transform"
            >
              DONATE NOW
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;