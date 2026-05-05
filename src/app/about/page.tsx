import { Target, Eye, Landmark, Award } from "lucide-react";

export default function About() {
  return (
    <div className="flex flex-col gap-24 pb-24">
      {/* Header */}
      <section className="bg-rose-50 py-20 border-b border-rose-100">
        <div className="container mx-auto px-4 max-w-7xl text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-black text-teal-800">Our Story</h1>
          <p className="text-xl text-zinc-600 max-w-3xl mx-auto leading-relaxed">
            Founded in Pune, Pukar Mahila Mandal began with a simple vision: to ensure that no one in rural Maharashtra is left behind.
          </p>
        </div>
      </section>

      {/* History Section */}
      <section className="container mx-auto px-4 max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-teal-800">A Legacy of Care</h2>
          <div className="h-1 w-20 bg-rose-600 rounded-full" />
          <p className="text-zinc-600 text-lg leading-relaxed">
            Over a decade ago, a group of dedicated women in Pune came together to address the pressing issues faced by rural communities. What started as a small support group has grown into a structured NGO that serves thousands across Maharashtra.
          </p>
          <p className="text-zinc-600 text-lg leading-relaxed">
            We believe in grassroots empowerment. By working directly with village heads and local families, we ensure our programs are culturally relevant and truly impactful.
          </p>
          <div className="grid grid-cols-2 gap-6 pt-4">
            <div className="bg-white p-6 rounded-2xl shadow-md border border-zinc-100">
              <Landmark className="h-8 w-8 text-rose-600 mb-3" />
              <h4 className="font-bold text-zinc-900">Pune Based</h4>
              <p className="text-sm text-zinc-500 text-balance">Headquartered in Pune for efficient regional outreach.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md border border-zinc-100">
              <Award className="h-8 w-8 text-teal-700 mb-3" />
              <h4 className="font-bold text-zinc-900">10+ Years</h4>
              <p className="text-sm text-zinc-500 text-balance">Over a decade of consistent service in rural areas.</p>
            </div>
          </div>
        </div>
        <div className="relative aspect-square md:aspect-auto md:h-full bg-zinc-100 rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-rose-200/50 to-teal-200/50" />
          <div className="absolute inset-0 flex items-center justify-center p-12">
            <p className="text-teal-800 font-serif text-3xl italic text-center leading-relaxed">
              "Empowering a woman empowers a family, and empowering a family transforms a village."
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission Cards */}
      <section className="container mx-auto px-4 max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-teal-700 p-12 rounded-[2.5rem] text-white space-y-6">
          <Target className="h-12 w-12 text-rose-400" />
          <h2 className="text-3xl font-bold">Our Vision</h2>
          <p className="text-teal-100 text-lg leading-relaxed">
            To create a self-reliant rural Maharashtra where every individual has access to quality healthcare, education, and the opportunity to live a life of dignity and purpose.
          </p>
        </div>
        <div className="bg-rose-600 p-12 rounded-[2.5rem] text-white space-y-6">
          <Eye className="h-12 w-12 text-teal-200" />
          <h2 className="text-3xl font-bold">Our Mission</h2>
          <p className="text-rose-100 text-lg leading-relaxed">
            To implement sustainable development programs that address the root causes of poverty and inequality in rural areas through direct intervention and community participation.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="container mx-auto px-4 max-w-7xl text-center space-y-12">
        <h2 className="text-3xl font-bold text-teal-800">Our Values</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
          {[
            { title: "Transparency", desc: "We maintain complete honesty in our operations and fund usage." },
            { title: "Compassion", desc: "Every person we help is treated with the utmost respect and empathy." },
            { title: "Resilience", desc: "We stay committed to our cause despite the challenges of rural outreach." },
          ].map((value, i) => (
            <div key={i} className="space-y-4">
              <div className="h-12 w-12 bg-rose-100 text-rose-600 rounded-full flex items-center justify-center mx-auto text-xl font-bold">
                {i + 1}
              </div>
              <h4 className="text-xl font-bold text-zinc-900">{value.title}</h4>
              <p className="text-zinc-500 leading-relaxed">{value.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
