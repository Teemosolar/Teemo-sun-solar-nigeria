import React, { useState } from "react";
import { PORTFOLIO } from "../data";
import { ArrowUpRight, MapPin, Calendar, Zap, ClipboardList, Info } from "lucide-react";

export default function Portfolio() {
  const [selectedProj, setSelectedProj] = useState<string | null>(null);

  const handleWhatsAppQuote = (projectTitle: string) => {
    const formattedMsg = `Hello Teemo-Sun Solar Nigeria, I saw your awesome landmark project: "${projectTitle}". I would like to schedule a site engineering inspection to evaluate implementing a similar system on my property.`;
    const encoded = encodeURIComponent(formattedMsg);
    window.open(`https://wa.me/2347064519576?text=${encoded}`, "_blank", "noreferrer");
  };

  return (
    <div className="w-full flex flex-col bg-slate-50">
      
      {/* HEADER BANNER */}
      <section className="bg-gradient-to-r from-[#062316] via-[#0c5132] to-emerald-900 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-left">
          <span className="font-mono text-xs text-amber-300 font-bold uppercase py-1 px-3.5 rounded bg-amber-400/15 border border-amber-300/30">
            Certified Landmark Projects
          </span>
          <h1 className="font-sans font-extrabold text-3xl sm:text-4xl md:text-5xl mt-3 tracking-tight">
            Our Installation Portfolio
          </h1>
          <p className="font-sans text-emerald-100 text-sm md:text-base mt-2 max-w-3xl leading-relaxed">
            Witness our engineering versatility. Explore real-world Teemo-Sun deployments across Abuja, Lagos, Ogun, and other regions in Nigeria.
          </p>
        </div>
      </section>

      {/* PORTFOLIO LIST SECTION */}
      <section className="py-20 px-4 max-w-7xl mx-auto w-full">
        <div className="text-left mb-12">
          <span className="font-mono text-xs text-[#0c5132] font-semibold tracking-widest uppercase">
            COMPLETED OPERATIONS
          </span>
          <h2 className="font-sans font-extrabold text-3xl text-[#0c5132] mt-2 tracking-tight">
            Proof in Execution
          </h2>
          <p className="text-gray-500 text-xs md:text-sm">
            Strict professional alignment with environmental standard safety rules on every project site.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {PORTFOLIO.map((proj) => {
            const isExpanded = selectedProj === proj.id;
            return (
              <div 
                key={proj.id}
                className="bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Project Graphic Backdrop */}
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={proj.imageUrl} 
                      alt={proj.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                    
                    <div className="absolute top-4 left-4 bg-[#0c5132] text-amber-300 font-mono text-[9px] font-bold uppercase py-1 px-3.5 rounded-full border border-amber-400/40 shadow-sm">
                      {proj.capacity || "Training Project"}
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 text-white text-left">
                      <div className="flex items-center gap-1.5 text-xs text-amber-400 font-mono font-bold justify-start">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{proj.location}</span>
                      </div>
                      <h3 className="font-sans font-extrabold text-lg mt-1 tracking-tight leading-tight">{proj.title}</h3>
                    </div>
                  </div>

                  {/* Descriptions block */}
                  <div className="p-6 text-left space-y-4">
                    <div className="grid grid-cols-2 gap-4 border-b border-gray-100 pb-3">
                      <div>
                        <p className="text-[10px] text-gray-400 uppercase font-mono font-bold">Infrastructures Type</p>
                        <p className="text-xs font-semibold text-emerald-950 mt-0.5">{proj.systemType}</p>
                      </div>
                      <div>
                        <p className="text-[10px] text-gray-400 uppercase font-mono font-bold">Commissioned Year</p>
                        <div className="flex items-center gap-1 text-xs font-semibold text-emerald-950 mt-0.5">
                          <Calendar className="w-3.5 h-3.5 text-gray-400" />
                          <span>{proj.completionDate}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-xs text-gray-500 leading-relaxed font-semibold">
                      {proj.description}
                    </p>

                    <div>
                      <p className="font-mono text-[9px] uppercase font-bold text-[#0c5132] tracking-wider mb-2 flex items-center gap-1.5">
                        <ClipboardList className="w-3.5 h-3.5" />
                        Selected Project Highlights:
                      </p>
                      <ul className="space-y-1.5">
                        {proj.highlights.map((h, i) => (
                          <li key={i} className="flex gap-2 items-start text-xs text-gray-600 font-medium">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 flex-shrink-0"></span>
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Foot CTA */}
                <div className="p-6 border-t border-slate-100 flex items-center justify-between gap-4">
                  <span className="text-[10px] text-[#0c5132] bg-emerald-50 px-2.5 py-1 rounded inline-block font-mono font-bold">
                    🛡️ ACTIVE & PRODUCING POWER
                  </span>
                  
                  <button
                    onClick={() => handleWhatsAppQuote(proj.title)}
                    className="inline-flex items-center gap-1.5 p-2 px-4 rounded-xl bg-[#0c5132] text-white hover:bg-emerald-800 text-xs font-bold transition-all shadow-sm"
                  >
                    Request Similar Setup
                    <ArrowUpRight className="w-3.5 h-3.5 text-amber-300" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
}
