import React from "react";
import { 
  Building2, Eye, Compass, HeartHandshake, ShieldCheck, 
  Award, Globe, Users, Verified, Sun
} from "lucide-react";

export default function About() {
  const coreValues = [
    { name: "Excellence", description: "Consistently delivering premium quality installations and robust energy services that meet and exceed expectations." },
    { name: "Integrity", description: "Providing highly transparent, certified component specifications and precise load pricing parameters with zero hidden figures." },
    { name: "Innovation", description: "Staying at the forefront of safe solid-state lithium battery and smart hybrid inverter technologies." },
    { name: "Customer Satisfaction", description: "Fostering long-term customer relationships with our active monthly post-installation technical health check protocol." },
    { name: "Professionalism", description: "Every engineer is compliance-certified, executing precise alignments under maximum safety rules." },
    { name: "Sustainability", description: "Reducing carbon footprints across Nigeria while empowering businesses and schools with uninterrupted power." }
  ];

  return (
    <div className="w-full flex flex-col bg-slate-50">
      
      {/* HEADER BANNER */}
      <section className="bg-gradient-to-r from-[#062316] via-[#0c5132] to-emerald-900 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-left">
          <span className="font-mono text-xs text-amber-300 font-bold uppercase py-1 px-3.5 rounded bg-amber-400/15 border border-amber-300/30">
            About Teemo-Sun Engineering Group
          </span>
          <h1 className="font-sans font-extrabold text-3xl sm:text-4xl md:text-5xl mt-3 tracking-tight">
            Company Profile & Core Values
          </h1>
          <p className="font-sans text-emerald-100 text-sm md:text-base mt-2 max-w-3xl leading-relaxed">
            Leading renewable energy integration in Nigeria, dedicated to helping families and enterprise organizations attain complete energy security.
          </p>
        </div>
      </section>

      {/* CORE PROFILE GRID */}
      <section className="py-20 px-4 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-left">
          
          <div className="space-y-6">
            <span className="font-mono text-xs uppercase text-[#0c5132] font-extrabold bg-emerald-100 py-1.5 px-3 rounded-full">
              RENEWABLE EXCELLENCE
            </span>
            <h2 className="font-sans font-black text-3xl text-[#0c5132] tracking-tight">
              Powering Homes, Empowering Businesses, Sustaining the Future.
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed font-semibold">
              TEEMO-SUN SOLAR NIGERIA is a fast-growing renewable energy and engineering company committed to delivering reliable, affordable, and sustainable solar energy solutions across Nigeria.
            </p>
            <p className="text-xs text-gray-500 leading-relaxed">
              We specialize in the meticulous design, supply, installation, and preventive maintenance of solar power systems for residential properties, multi-level offices, industrial grids, educational campuses, hospitals, and agricultural organizations.
            </p>
            <p className="text-xs text-gray-500 leading-relaxed">
              Our core mandate is delivering high-efficiency clean systems that eliminate dependency on unstable national power supplies, high fuel margins, and noisy local generator setups, thereby assisting communities and corporate organizations to secure absolute power autonomy.
            </p>
          </div>

          <div className="relative">
            {/* Elegant visual stack of panels */}
            <div className="rounded-2xl overflow-hidden shadow-xl border border-emerald-100 relative max-h-[400px]">
              <img 
                src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=1200&auto=format&fit=crop" 
                alt="Teemo-Sun Engineering Solar Panel Field"
                className="w-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-6 left-6 right-6 text-white text-left">
                <p className="font-mono text-xs text-amber-300 font-bold uppercase tracking-wider mb-1">TEEMO-SUN SOLAR NIGERIA</p>
                <p className="font-sans font-bold text-base">Integrated Solar Array commissioning, Nigeria.</p>
              </div>
            </div>

            {/* Float badge */}
            <div className="absolute -top-5 -right-5 bg-amber-400 text-[#062316] p-4 rounded-xl shadow-lg border-2 border-white flex flex-col items-center">
              <span className="font-sans font-black text-xl leading-none">100%</span>
              <span className="font-mono text-[9px] uppercase font-bold tracking-wider mt-1 text-center">Certified safe</span>
            </div>
          </div>

        </div>
      </section>

      {/* VISION & MISSION SECTION */}
      <section className="py-20 bg-[#0c5132] text-white px-4 relative overflow-hidden">
        <Sun className="absolute right-0 bottom-0 text-white/5 w-60 h-60 pointer-events-none translate-x-12 translate-y-12 animate-spin-slow" />
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
          
          <div className="bg-emerald-950/40 border border-emerald-800/40 rounded-2xl p-8 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-900 flex items-center justify-center text-amber-400 border border-emerald-700">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="font-sans font-black text-xl text-white tracking-tight uppercase">
              Our Vision
            </h3>
            <p className="text-gray-200 text-sm leading-relaxed">
              To become one of Nigeria's leading renewable energy companies, providing dependable and innovative solar solutions that power homes, businesses, and industries across West Africa.
            </p>
          </div>

          <div className="bg-emerald-950/40 border border-emerald-800/40 rounded-2xl p-8 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-900 flex items-center justify-center text-amber-400 border border-emerald-700">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="font-sans font-black text-xl text-white tracking-tight uppercase">
              Our Mission
            </h3>
            <ul className="space-y-3.5 text-gray-200 text-sm font-semibold">
              <li className="flex gap-2.5 items-start">
                <span className="w-2 h-2 rounded-full bg-amber-400 mt-1.5 flex-shrink-0"></span>
                <span>To deliver high-quality solar energy systems and engineering services.</span>
              </li>
              <li className="flex gap-2.5 items-start">
                <span className="w-2 h-2 rounded-full bg-amber-400 mt-1.5 flex-shrink-0"></span>
                <span>To provide affordable and efficient renewable energy solutions.</span>
              </li>
              <li className="flex gap-2.5 items-start">
                <span className="w-2 h-2 rounded-full bg-amber-400 mt-1.5 flex-shrink-0"></span>
                <span>To empower communities and businesses with uninterrupted power supply.</span>
              </li>
              <li className="flex gap-2.5 items-start">
                <span className="w-2 h-2 rounded-full bg-amber-400 mt-1.5 flex-shrink-0"></span>
                <span>To contribute to a greener and more sustainable Nigeria.</span>
              </li>
            </ul>
          </div>

        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-20 bg-white px-4">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-mono text-xs uppercase tracking-widest text-[#0c5132] font-bold bg-emerald-100 px-3 py-1.5 rounded-full">
              GUIDING PRINCIPLES
            </span>
            <h2 className="font-sans font-extrabold text-3xl text-[#0c5132] mt-4 tracking-tight">
              Our Six Core Values
            </h2>
            <p className="text-gray-500 text-sm mt-2">
              The values that guide every single employee, field engineer, and technical advisor at Teemo-Sun Solar Nigeria.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((val, idx) => (
              <div 
                key={idx} 
                className="bg-slate-50 border border-slate-100 p-6 rounded-2xl text-left hover:border-emerald-500 hover:bg-white hover:shadow-lg transition-all"
              >
                <div className="w-10 h-10 bg-emerald-50 text-[#0c5132] rounded flex items-center justify-center font-sans font-bold text-sm mb-4 border border-emerald-100/50">
                  0{idx + 1}
                </div>
                <h4 className="font-sans font-bold text-base text-[#0c5132] mb-1 tracking-tight">
                  {val.name}
                </h4>
                <p className="text-xs text-gray-500 leading-relaxed">
                  {val.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
