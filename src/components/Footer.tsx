import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Globe,
  Share2,
  MessageCircle,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-zinc-950 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-rose-500">
              Pukar Mahila Mandal
            </h3>
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

        <div className="border-t border-zinc-800 pt-8 text-center text-zinc-500 text-sm">
          <p>
            © {new Date().getFullYear()} Pukar Mahila Mandal. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
