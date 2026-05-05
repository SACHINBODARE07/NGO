import { BookOpen, HeartPulse, Hammer, Scale, GraduationCap, Wheat } from "lucide-react";

export default function Programs() {
  const programs = [
    {
      title: "Rural Education",
      icon: GraduationCap,
      description: "Setting up learning centers in remote villages of Pune to provide basic literacy and computer education to children and adults.",
      color: "text-rose-600",
      bg: "bg-rose-50",
    },
    {
      title: "Health & Hygiene",
      icon: HeartPulse,
      description: "Organizing regular medical camps and distributing hygiene kits to women and families in underserved rural areas.",
      color: "text-teal-700",
      bg: "bg-teal-50",
    },
    {
      title: "Skill Development",
      icon: Hammer,
      description: "Providing vocational training in tailoring, handicrafts, and sustainable farming to help rural women become financially independent.",
      color: "text-rose-600",
      bg: "bg-rose-50",
    },
    {
      title: "Legal Awareness",
      icon: Scale,
      description: "Educating rural communities about their constitutional rights, land laws, and women's protection acts through workshops.",
      color: "text-teal-700",
      bg: "bg-teal-50",
    },
    {
      title: "Sustainable Farming",
      icon: Wheat,
      description: "Teaching organic farming techniques and water conservation methods to small-scale farmers in rural Maharashtra.",
      color: "text-rose-600",
      bg: "bg-rose-50",
    },
    {
      title: "Child Welfare",
      icon: BookOpen,
      description: "Supporting local schools with infrastructure development and providing nutritious meals to students from poor families.",
      color: "text-teal-700",
      bg: "bg-teal-50",
    },
  ];

  return (
    <div className="flex flex-col gap-24 pb-24">
      {/* Header */}
      <section className="bg-teal-700 py-24 text-white text-center">
        <div className="container mx-auto px-4 max-w-7xl space-y-6">
          <h1 className="text-4xl md:text-6xl font-black">Our Programs</h1>
          <p className="text-xl text-teal-100 max-w-3xl mx-auto leading-relaxed">
            Direct action for direct impact. We design our initiatives to solve real-world problems faced by people in rural Maharashtra.
          </p>
        </div>
      </section>

      {/* Program Grid */}
      <section className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, i) => (
            <div key={i} className={`${program.bg} p-10 rounded-[2.5rem] border border-zinc-100 flex flex-col gap-6 hover:shadow-2xl hover:shadow-zinc-200 transition-all group`}>
              <div className="bg-white p-4 rounded-2xl w-fit shadow-sm group-hover:scale-110 transition-transform">
                <program.icon className={`h-8 w-8 ${program.color}`} />
              </div>
              <h3 className="text-2xl font-bold text-teal-800">{program.title}</h3>
              <p className="text-zinc-600 leading-relaxed text-lg">
                {program.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Success Story / Quote */}
      <section className="container mx-auto px-4 max-w-5xl">
        <div className="bg-rose-600 p-12 md:p-20 rounded-[3rem] text-white text-center space-y-8 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full -ml-16 -mt-16" />
          <h2 className="text-3xl md:text-4xl font-bold italic leading-tight">
            "The change we see in the villages today is the result of years of consistent effort and the unwavering support of our donors."
          </h2>
          <div className="space-y-2">
            <p className="font-bold text-xl">— Founder, Pukar Mahila Mandal</p>
            <p className="text-rose-100">Pune, Maharashtra</p>
          </div>
        </div>
      </section>
    </div>
  );
}
