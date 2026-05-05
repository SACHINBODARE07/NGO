import Link from "next/link";

import Image from "next/image";
import { ArrowRight, Users, Heart, Sprout, ShieldCheck } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col gap-20 pb-20">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center overflow-hidden bg-rose-50 justify-between">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-rose-100/80 to-teal-100/80" />
        </div>
        <div className="container mx-auto px-4 relative z-10 max-w-7xl">
          <div className="max-w-2xl space-y-8 animate-in fade-in slide-in-from-left-8 duration-700">
            <span className="inline-block px-4 py-1.5 rounded-full bg-rose-200 text-rose-700 font-bold text-sm uppercase tracking-wider">
              Based in Pune, Maharashtra
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-teal-800 leading-tight">
              Empowering <span className="text-rose-600">Rural</span>{" "}
              Communities.
            </h1>
            <p className="text-xl text-zinc-600 leading-relaxed">
              Pukar Mahila Mandal is dedicated to transforming lives in rural
              Maharashtra through sustainable development, health initiatives,
              and education.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="/programs"
                className="bg-teal-700 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-teal-800 transition-all shadow-xl hover:shadow-teal-200 flex items-center justify-center gap-2 group"
              >
                Our Programs
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/about"
                className="bg-white text-zinc-800 px-8 py-4 rounded-xl font-bold text-lg hover:bg-zinc-50 border border-zinc-200 transition-all flex items-center justify-center"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
        <div className="relative h-300 w-300 overflow-hidden rounded-lg transition-transform group-hover:scale-110">
          <Image
            src="/first.png"
            alt="Pukar Mahila Mandal Logo"
            fill
            className="object-contain"
          />
        </div>
      </section>

      {/* Impact Stats */}
      <section className="container mx-auto px-4 max-w-7xl -mt-32 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Users,
              label: "Lives Impacted",
              value: "10,000+",
              color: "bg-rose-500",
            },
            {
              icon: Sprout,
              label: "Villages Served",
              value: "50+",
              color: "bg-teal-600",
            },
            {
              icon: Heart,
              label: "Volunteers",
              value: "200+",
              color: "bg-rose-600",
            },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-3xl shadow-xl shadow-zinc-200/50 flex flex-col items-center text-center gap-4 hover:-translate-y-2 transition-transform"
            >
              <div className={`${stat.color} p-4 rounded-2xl text-white`}>
                <stat.icon className="h-8 w-8" />
              </div>
              <div>
                <h3 className="text-4xl font-black text-zinc-900">
                  {stat.value}
                </h3>
                <p className="text-zinc-500 font-medium uppercase tracking-wide">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Mission Section */}
      <section className="container mx-auto px-4 max-w-5xl text-center space-y-12">
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-teal-800">
            Our Core Mission
          </h2>
          <div className="h-1.5 w-24 bg-rose-600 mx-auto rounded-full" />
          <p className="text-zinc-600 text-lg max-w-2xl mx-auto italic">
            "To bridge the gap between urban opportunities and rural needs by
            providing essential resources and support to the underserved people
            of Maharashtra."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          <div className="bg-rose-50 p-8 rounded-3xl space-y-4 border border-rose-100">
            <div className="bg-rose-600 w-12 h-12 rounded-xl flex items-center justify-center text-white">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <h3 className="text-2xl font-bold text-teal-800">
              Women's Safety & Rights
            </h3>
            <p className="text-zinc-600">
              Conducting awareness programs in villages to educate women about
              their legal rights and ensuring their safety within communities.
            </p>
          </div>
          <div className="bg-teal-50 p-8 rounded-3xl space-y-4 border border-teal-100">
            <div className="bg-teal-700 w-12 h-12 rounded-xl flex items-center justify-center text-white">
              <Users className="h-6 w-6" />
            </div>
            <h3 className="text-2xl font-bold text-teal-800">
              Community Support
            </h3>
            <p className="text-zinc-600">
              Providing direct support to families in rural Pune through food
              distribution, healthcare camps, and emergency assistance.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="container mx-auto px-4 max-w-7xl">
        <div className="bg-zinc-900 rounded-[3rem] p-8 md:p-16 text-center space-y-8 overflow-hidden relative">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-rose-600/20 blur-[100px] rounded-full" />
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-teal-600/20 blur-[100px] rounded-full" />

          <h2 className="text-3xl md:text-5xl font-bold text-white relative z-10">
            Join Us in Making a{" "}
            <span className="text-rose-500">Difference</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-xl mx-auto relative z-10">
            Every small contribution helps us reach one more family in the
            remote areas of Pune and Maharashtra.
          </p>
          <div className="flex justify-center gap-6 relative z-10">
            <Link
              href="/contact"
              className="bg-rose-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-rose-700 transition-all shadow-lg hover:shadow-rose-500/30"
            >
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
