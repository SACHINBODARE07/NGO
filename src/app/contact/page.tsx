import { Mail, Phone, MapPin, Send, MessageSquare, Clock } from "lucide-react";

export default function Contact() {
  return (
    <div className="flex flex-col gap-12 md:gap-32 pb-32 bg-white">
      {/* --- MINIMALIST HEADER --- */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl text-center relative z-10 space-y-6">
          <h1 className="text-5xl md:text-8xl font-black text-zinc-900 tracking-tighter leading-[0.9]">
            Let's <span className="text-rose-600">Connect.</span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-500 max-w-2xl mx-auto leading-relaxed font-medium">
            Whether you want to volunteer, partner, or learn about our soap-making units in Guna, we're here to talk.
          </p>
        </div>
      </section>

      {/* --- CONTACT GRID --- */}
      <section className="container mx-auto px-4 max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* LEFT COLUMN: INFO CARDS */}
        <div className="lg:col-span-5 space-y-10">
          <div className="space-y-4">
            <h2 className="text-4xl font-black text-teal-900 tracking-tight">Visit Our Center</h2>
            <p className="text-zinc-500 text-lg leading-relaxed">
              Our headquarters serves as the administrative hub for our 50+ completed projects across rural MP.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {/* Address Card */}
            <div className="group bg-zinc-50 p-8 rounded-[2.5rem] border border-zinc-100 transition-all hover:bg-white hover:shadow-2xl">
              <div className="flex items-start gap-6">
                <div className="bg-rose-100 p-4 rounded-2xl text-rose-600 group-hover:scale-110 transition-transform">
                  <MapPin className="h-6 w-6" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-black text-xl text-zinc-900 uppercase tracking-tighter">Main Office</h4>
                  <p className="text-zinc-500 leading-relaxed text-lg">
                    Pukar Mahila Mandal HQ,<br />
                    Guna, Madhya Pradesh 473001, India
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Contact Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-teal-50/50 p-8 rounded-[2.5rem] border border-teal-100/50 space-y-4">
                <Mail className="h-8 w-8 text-teal-700" />
                <div>
                  <h4 className="font-black text-zinc-900 uppercase text-xs tracking-widest">Email Us</h4>
                  <p className="text-teal-900 font-bold break-words">pukarmandal.ngo@gmail.com</p>
                </div>
              </div>
              
              <div className="bg-rose-50/50 p-8 rounded-[2.5rem] border border-rose-100/50 space-y-4">
                <Phone className="h-8 w-8 text-rose-600" />
                <div>
                  <h4 className="font-black text-zinc-900 uppercase text-xs tracking-widest">Call Us</h4>
                  <p className="text-rose-900 font-bold">+91 00000 00000</p>
                </div>
              </div>
            </div>
            
            {/* Hours Card */}
            <div className="flex items-center gap-4 px-8 py-6 bg-zinc-900 rounded-full text-white">
               <Clock className="h-5 w-5 text-rose-400" />
               <span className="text-sm font-bold uppercase tracking-widest">Mon — Sat: 10:00 AM - 6:00 PM</span>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: BENTO FORM */}
        <div className="lg:col-span-7 bg-zinc-900 p-8 md:p-16 rounded-[4rem] text-white shadow-[0_50px_100px_-20px_rgba(0,0,0,0.4)] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-rose-600 rounded-full blur-[120px] opacity-20" />
          
          <form className="relative z-10 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-xs font-black uppercase tracking-[0.2em] text-zinc-500">Your Full Name</label>
                <input
                  type="text"
                  placeholder="Jane Doe"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white focus:ring-2 focus:ring-rose-500 focus:bg-white/10 outline-none transition-all placeholder:text-zinc-700"
                />
              </div>
              <div className="space-y-3">
                <label className="text-xs font-black uppercase tracking-[0.2em] text-zinc-500">Email Address</label>
                <input
                  type="email"
                  placeholder="jane@example.com"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white focus:ring-2 focus:ring-rose-500 focus:bg-white/10 outline-none transition-all placeholder:text-zinc-700"
                />
              </div>
            </div>
            
            <div className="space-y-3">
              <label className="text-xs font-black uppercase tracking-[0.2em] text-zinc-500">Inquiry Type</label>
              <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-zinc-400 focus:ring-2 focus:ring-rose-500 outline-none transition-all appearance-none">
                <option className="bg-zinc-900">General Inquiry</option>
                <option className="bg-zinc-900">Volunteer Opportunities</option>
                <option className="bg-zinc-900">CSR Partnerships</option>
                <option className="bg-zinc-900">Donation Questions</option>
              </select>
            </div>

            <div className="space-y-3">
              <label className="text-xs font-black uppercase tracking-[0.2em] text-zinc-500">How can we help?</label>
              <textarea
                rows={4}
                placeholder="Tell us about your interest..."
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white focus:ring-2 focus:ring-rose-500 focus:bg-white/10 outline-none transition-all resize-none placeholder:text-zinc-700"
              ></textarea>
            </div>

            <button
              type="submit"
              className="group w-full bg-rose-600 hover:bg-rose-700 text-white font-black py-6 rounded-2xl transition-all shadow-2xl shadow-rose-900/40 flex items-center justify-center gap-4 text-xl overflow-hidden relative"
            >
              <span className="relative z-10 flex items-center gap-3">
                Send Message <Send className="h-6 w-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-rose-500 to-rose-700 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          </form>
        </div>
      </section>

      {/* --- INTERACTIVE MAP PLACEHOLDER --- */}
      <section className="container mx-auto px-4 max-w-7xl">
        <div className="relative h-[500px] rounded-[4rem] overflow-hidden group shadow-inner bg-zinc-100 border-8 border-white">
          <div className="absolute inset-0 bg-gradient-to-br from-zinc-200/50 to-zinc-300/50 group-hover:scale-105 transition-transform duration-[2s]" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white/80 backdrop-blur-xl p-10 rounded-[3rem] shadow-2xl text-center space-y-6 max-w-md border border-white">
              <div className="h-20 w-20 bg-teal-800 rounded-3xl flex items-center justify-center mx-auto shadow-xl rotate-3 group-hover:rotate-0 transition-transform">
                <MapPin className="h-10 w-10 text-white" />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-black text-zinc-900 tracking-tight">Our Guna Center</h3>
                <p className="text-zinc-500 font-medium">Located in the heart of Guna, MP, managing operations across the district.</p>
              </div>
              <button className="bg-zinc-900 text-white px-8 py-3 rounded-full font-bold hover:bg-black transition-colors flex items-center gap-2 mx-auto">
                Open in Google Maps <MessageSquare className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}