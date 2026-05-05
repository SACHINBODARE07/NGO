import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <div className="flex flex-col gap-24 pb-24">
      {/* Header */}
      <section className="bg-rose-50 py-24 border-b border-rose-100">
        <div className="container mx-auto px-4 max-w-7xl text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-black text-teal-800">Get in Touch</h1>
          <p className="text-xl text-zinc-600 max-w-2xl mx-auto leading-relaxed">
            Have questions about our work or want to volunteer? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="container mx-auto px-4 max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Contact Info Cards */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-teal-800">Contact Information</h2>
          <p className="text-zinc-600 text-lg leading-relaxed">
            Visit our office in Pune or reach out to us via phone or email. Our team is always ready to assist.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white p-8 rounded-3xl shadow-lg shadow-zinc-100 border border-zinc-50 space-y-4">
              <div className="bg-rose-100 p-3 rounded-xl w-fit">
                <Phone className="h-6 w-6 text-rose-600" />
              </div>
              <h4 className="font-bold text-lg text-zinc-900">Phone</h4>
              <p className="text-zinc-500">+91 98765 43210</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-lg shadow-zinc-100 border border-zinc-50 space-y-4">
              <div className="bg-teal-100 p-3 rounded-xl w-fit">
                <Mail className="h-6 w-6 text-teal-700" />
              </div>
              <h4 className="font-bold text-lg text-zinc-900">Email</h4>
              <p className="text-zinc-500">contact@pukarmandal.org</p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-lg shadow-zinc-100 border border-zinc-50 flex items-start gap-6">
            <div className="bg-rose-100 p-3 rounded-xl shrink-0">
              <MapPin className="h-6 w-6 text-rose-600" />
            </div>
            <div>
              <h4 className="font-bold text-lg text-zinc-900 mb-2">Office Address</h4>
              <p className="text-zinc-500 leading-relaxed text-lg">
                123 Rural Support Lane, Off Karve Road,<br />
                Pune, Maharashtra 411001, India
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-zinc-900 p-8 md:p-12 rounded-[3rem] text-white shadow-2xl">
          <form className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold uppercase tracking-wider text-zinc-400">Full Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full bg-zinc-800 border-none rounded-xl px-6 py-4 text-white focus:ring-2 focus:ring-rose-500 outline-none transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold uppercase tracking-wider text-zinc-400">Email Address</label>
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full bg-zinc-800 border-none rounded-xl px-6 py-4 text-white focus:ring-2 focus:ring-rose-500 outline-none transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold uppercase tracking-wider text-zinc-400">Message</label>
              <textarea
                rows={4}
                placeholder="How can we help?"
                className="w-full bg-zinc-800 border-none rounded-xl px-6 py-4 text-white focus:ring-2 focus:ring-rose-500 outline-none transition-all resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-rose-600 hover:bg-rose-700 text-white font-bold py-5 rounded-xl transition-all shadow-lg hover:shadow-rose-500/20 flex items-center justify-center gap-3 text-lg"
            >
              Send Message
              <Send className="h-5 w-5" />
            </button>
          </form>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="container mx-auto px-4 max-w-7xl">
        <div className="bg-zinc-100 rounded-[3rem] h-96 flex items-center justify-center text-zinc-400 border-4 border-white shadow-inner overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-br from-teal-50/50 to-rose-50/50" />
          <div className="relative text-center space-y-4">
            <MapPin className="h-12 w-12 text-zinc-300 mx-auto" />
            <p className="text-xl font-medium">Interactive Map Placeholder</p>
            <p className="text-sm">Locating our Pune HQ...</p>
          </div>
        </div>
      </section>
    </div>
  );
}
