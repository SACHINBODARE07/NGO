import Link from "next/link";
import Image from "next/image";
import {
  Mail,
  Phone,
  MapPin,
  Globe,
  Share2,
  MessageCircle,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const whatsappNumber = "919876543210"; 
  const message = "Hello, I want to know more about Pukar Mahila Mandal.";

  return (
    <footer className="bg-zinc-950 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* About Section with Logo only */}
          <div className="space-y-4">
            <div className="relative h-30 w-30 overflow-hidden rounded-lg">
              <Image
                src="/mahila.png"
                alt="Pukar Mahila Mandal Logo"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-zinc-400 leading-relaxed">
              Empowering communities in rural Maharashtra through education,
              health, and sustainable livelihood programs. Based in Pune,
              serving the underserved.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-zinc-400 hover:text-rose-500 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-zinc-400 hover:text-rose-500 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-zinc-400 hover:text-rose-500 transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/programs"
                  className="text-zinc-400 hover:text-rose-500 transition-colors"
                >
                  Our Programs
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-zinc-400 hover:text-rose-500 transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-rose-500 shrink-0" />
                <span className="text-zinc-400">
                  Tekari Road Budhe Balaji, Guna, Madhya Pradesh, India, 473001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-rose-500 shrink-0" />
                <span className="text-zinc-400">+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-rose-500 shrink-0" />
                <span className="text-zinc-400">contact@pukarmandal.org</span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="bg-zinc-800 p-2.5 rounded-full hover:bg-rose-600 transition-all"
              >
                <Globe className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-zinc-800 p-2.5 rounded-full hover:bg-rose-600 transition-all"
              >
                <Share2 className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-zinc-800 p-2.5 rounded-full hover:bg-rose-600 transition-all"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom section with copyright and powered by */}
        <div className="border-t border-zinc-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-zinc-500 text-sm">
            © {new Date().getFullYear()} Pukar Mahila Mandal. All rights reserved.
          </p>
          <p className="uppercase tracking-wide text-[10px] text-zinc-500">
            Powered by{" "}
            <a
              href="https://pigo-pi.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-extrabold text-violet-400 hover:text-violet-300 transition-colors normal-case"
            >
              PigoPi
            </a>
          </p>
        </div>
      </div>

      {/* --- Floating WhatsApp Button --- */}
      <a
        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 group"
        aria-label="Chat on WhatsApp"
      >
        <div className="bg-green-500 p-3 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 hover:scale-110 group-hover:shadow-xl">
          <FaWhatsapp size={28} className="text-white" />
        </div>
        {/* Optional small tooltip on hover */}
        <span className="absolute bottom-full right-0 mb-2 px-2 py-1 text-xs font-bold text-white bg-zinc-800 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Need help? Chat with us
        </span>
      </a>
    </footer>
  );
};

export default Footer;