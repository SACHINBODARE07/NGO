"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Programs", href: "/programs" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-rose-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative h-30 w-30 overflow-hidden rounded-lg transition-transform group-hover:scale-110">
                <Image
                  src="/mahila.png"
                  alt="Pukar Mahila Mandal Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-2xl font-bold tracking-tight text-teal-700">
                Pukar <span className="text-rose-600">Mahila Mandal</span>
              </span>
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative font-medium transition-colors hover:text-rose-600 ${
                    isActive ? "text-rose-600" : "text-gray-600"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-rose-600 rounded-full" />
                  )}
                </Link>
              );
            })}
            <Link
              href="/contact"
              className="bg-teal-700 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-teal-800 transition-all shadow-md hover:shadow-lg"
            >
              Support Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-rose-600 focus:outline-none transition-colors"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-rose-100 py-4 px-4 space-y-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md font-medium transition-colors ${
                  isActive
                    ? "text-rose-600 bg-rose-50"
                    : "text-gray-600 hover:text-rose-600 hover:bg-rose-50"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="block w-full text-center bg-teal-700 text-white px-6 py-3 rounded-xl font-semibold hover:bg-teal-800 mt-4"
          >
            Support Us
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
