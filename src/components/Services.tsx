import React, { useState, useEffect } from "react";
import { 
  Wrench, Sun, ShoppingCart, Users, Bike, Zap, 
  ArrowRight, ShieldCheck, HelpCircle, CheckCircle2, GraduationCap, Compass
} from "lucide-react";
import { SERVICES, LITHIUM_PACKAGES, HEAVY_DUTY_PACKAGES, HOUSING_BUDGET_PACKAGES } from "../data";

interface ServicesProps {
  scrollSection: string | null;
  setScrollSection: (section: string | null) => void;
}

export default function Services({ scrollSection, setScrollSection }: ServicesProps) {
  const [activeTab, setActiveTab] = useState<"lithium" | "heavy" | "tubular">("lithium");

  useEffect(() => {
    if (scrollSection) {
      const element = document.getElementById(scrollSection);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
        setScrollSection(null);
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [scrollSection]);

  const handleWhatsAppContact = (packageName: string, price: string) => {
    const formattedMsg = `Hello Teemo-Sun Solar Nigeria, I would like to inquire about your special system setup package: "${packageName}" priced at ${price}. Please let me know how to proceed with site inspection and engineering evaluation.`;
    const encoded = encodeURIComponent(formattedMsg);
    window.open(`https://wa.me/2347064519576?text=${encoded}`, "_blank", "noreferrer");
  };

  const handleServiceWhatsAppContact = (serviceTitle: string) => {
    const formattedMsg = `Hello Teemo-Sun Solar Nigeria, I would like to inquire about your engineering service: "${serviceTitle}". I need a custom quote for my property/projects.`;
    const encoded = encodeURIComponent(formattedMsg);
    window.open(`https://wa.me/2347064519576?text=${encoded}`, "_blank", "noreferrer");
  };

  return (
    <div className="w-full flex flex-col bg-slate-50">
      
      {/* HEADER BANNER */}
      <section className="bg-gradient-to-r from-[#062316] via-[#0c5132] to-emerald-900 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-left">
          <span className="font-mono text-xs text-amber-300 font-bold uppercase py-1 px-3.5 rounded bg-amber-400/15 border border-amber-300/30">
            Professional Engineering Services
          </span>
          <h1 className="font-sans font-extrabold text-3xl sm:text-4xl md:text-5xl mt-3 tracking-tight">
            Our Services & Custom Packages
          </h1>
          <p className="font-sans text-emerald-100 text-sm md:text-base mt-2 max-w-3xl leading-relaxed">
            Teemo-Sun Solar is fully equipped to deploy robust components for residential, industrial, and public locations. Find our specific pricing models and specialized engineering divisions below.
          </p>
        </div>
      </section>

      {/* 1. SEPARATE SERVICES DIVISIONS */}
      <section className="py-20 px-4 max-w-7xl mx-auto w-full">
        <div className="text-left mb-12">
          <span className="font-mono text-xs text-[#0c5132] font-semibold tracking-widest uppercase">
            OPERATIONAL DEPARTMENTS
          </span>
          <h2 className="font-sans font-extrabold text-3xl text-[#0c5132] mt-2 tracking-tight">
            Specialized Energy Engineering
          </h2>
          <p className="text-gray-500 text-xs md:text-sm">
            Constant 24/7 technical monitoring of high-voltage and low-voltage electrical systems.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Service items detail */}
          <div className="lg:col-span-8 space-y-8">
            {SERVICES.map((serv, idx) => {
              // icon rendering based on service map
              const getIcon = (name: string) => {
                switch(name) {
                  case "Sun": return <Sun className="w-6 h-6 text-amber-500" />;
                  case "Wrench": return <Wrench className="w-6 h-6 text-blue-500" />;
                  case "ShoppingCart": return <ShoppingCart className="w-6 h-6 text-emerald-600" />;
                  case "Users": return <Users className="w-6 h-6 text-orange-500" />;
                  case "Bike": return <Bike className="w-6 h-6 text-[#0c5132]" />;
                  default: return <Sun className="w-6 h-6 text-amber-500" />;
                }
              };

              return (
                <div 
                  key={serv.id} 
                  id={serv.id}
                  className="bg-white rounded-2xl p-6.5 border border-slate-100 shadow-sm hover:shadow-md transition-all text-left flex flex-col md:flex-row gap-6 relative overflow-hidden group"
                >
                  <div className="w-14 h-14 rounded-xl bg-[#f4f7f5] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                    {getIcon(serv.iconName)}
                  </div>

                  <div className="space-y-4 flex-grow">
                    <div>
                      <h3 className="font-sans font-extrabold text-lg text-[#062316]">
                        {serv.title}
                      </h3>
                      <p className="text-xs text-gray-500 leading-relaxed max-w-2xl mt-1">
                        {serv.description}
                      </p>
                    </div>

                    <div className="pt-2">
                      <p className="font-mono text-[10px] uppercase font-bold text-[#0c5132] tracking-wider mb-2">Scope of Operations Implemented:</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                        {serv.features.map((feat, i) => (
                          <div key={i} className="flex gap-2 items-start text-gray-600 font-medium">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 flex-shrink-0"></span>
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-3 border-t border-slate-50 flex items-center justify-between flex-wrap gap-2">
                      <span className="text-[10px] font-mono text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded inline-block font-semibold">
                        📍 Expert Crew Ready (Abun, Lagos, Kano)
                      </span>
                      <button
                        onClick={() => handleServiceWhatsAppContact(serv.title)}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0c5132] hover:text-[#0a4027] group"
                      >
                        Inquire Direct Quote
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Core Values side panel */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-[#0c5132] text-white rounded-2xl p-6.5 text-left relative overflow-hidden shadow-md">
              <Sun className="absolute right-0 bottom-0 text-white/5 w-44 h-44 pointer-events-none translate-x-10 translate-y-10" />
              <h3 className="font-sans font-extrabold text-xl tracking-tight text-white mb-2">
                Why Choose Teemo-Sun?
              </h3>
              <p className="text-xs text-emerald-100/90 leading-relaxed mb-6 font-medium">
                Our operations guarantee continuous energy safety with pristine materials.
              </p>

              <div className="space-y-4.5 text-xs">
                <div className="flex gap-3">
                  <CheckCircle2 className="w-4.5 h-4.5 text-amber-300 flex-shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-bold text-white leading-none">24/7 Power Security</h5>
                    <p className="text-[11px] text-emerald-200 mt-0.5">Continuous operations with zero sound footprint.</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <CheckCircle2 className="w-4.5 h-4.5 text-amber-300 flex-shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-bold text-white leading-none">Original LiFePO4 Chemistry</h5>
                    <p className="text-[11px] text-emerald-200 mt-0.5">Deploying grade-A lithium-ion structures rated 10+ years life.</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <CheckCircle2 className="w-4.5 h-4.5 text-amber-300 flex-shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-bold text-white leading-none">Skilled Installation Planners</h5>
                    <p className="text-[11px] text-emerald-200 mt-0.5">Professional structured cable routing to match state codes.</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <CheckCircle2 className="w-4.5 h-4.5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-bold text-white leading-none">Flexible Financial Milestones</h5>
                    <p className="text-[11px] text-emerald-200 mt-0.5">Customized billing options for qualifying corporate players.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Inverter Load recommendation guide */}
            <div className="bg-white border border-slate-100 p-6 rounded-2xl text-left">
              <h4 className="font-sans font-bold text-sm text-[#062316] mb-2 flex items-center gap-2">
                <Compass className="w-4 h-4 text-emerald-600" />
                How to select a fitting system?
              </h4>
              <p className="text-xs text-gray-500 leading-relaxed mb-4">
                Calculate your load index by listing all devices that run concurrently. Ensure you specify heavy elements like Water Pumps, ACs, or Freezers separately.
              </p>
              <a 
                href="https://wa.me/2347064519576?text=Hello%20Teemo-Sun%20Solar!%20I'm%20visiting%20your%20website%20and%20need%20assistance%20calculating%20the%20best%20solar%20system%20capacity%20to%20power%20my%20house/office."
                target="_blank"
                rel="noreferrer"
                className="w-full text-center block py-2 px-4 rounded bg-emerald-100 hover:bg-emerald-200 text-[#0c5132] font-semibold text-xs"
              >
                Let's Calculate on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE CHOSEN SOLAR PACKAGES & PRICES CATALOG SECTION */}
      <section 
        id="packages-section" 
        className="py-20 bg-white border-t border-b border-emerald-100 px-4 scroll-mt-20"
      >
        <div className="max-w-7xl mx-auto text-center">
          <span className="font-mono text-xs text-emerald-700 uppercase bg-emerald-100 py-1.5 px-3.5 rounded-full font-bold">
            PRICING SCHEME CATALOG
          </span>
          <h2 className="font-sans font-extrabold text-3xl md:text-4xl text-[#0c5132] mt-4 tracking-tight">
            Our Certified Solar Packages
          </h2>
          <p className="text-gray-500 text-sm max-w-2xl mx-auto mt-2">
            No hidden costs. Every plan is packaged with premium monocrystalline panels, smart controllers, cables, structure mounts, and comprehensive engineering setup.
          </p>

          {/* Pricing Tabs Option */}
          <div className="flex justify-center gap-2.5 mt-10 mb-12">
            <button
              onClick={() => setActiveTab("lithium")}
              className={`px-5 py-3 rounded-xl font-bold text-xs font-sans transition-all cursor-pointer ${
                activeTab === "lithium"
                  ? "bg-[#0c5132] text-white shadow-md"
                  : "bg-slate-100 text-gray-600 hover:bg-slate-200"
              }`}
            >
              Premium Lithium Systems (Standard)
            </button>
            <button
              onClick={() => setActiveTab("heavy")}
              className={`px-5 py-3 rounded-xl font-bold text-xs font-sans transition-all cursor-pointer ${
                activeTab === "heavy"
                  ? "bg-[#0c5132] text-white shadow-md"
                  : "bg-slate-100 text-gray-600 hover:bg-slate-200"
              }`}
            >
              Heavy-Duty & Industrial Units
            </button>
            <button
              onClick={() => setActiveTab("tubular")}
              className={`px-5 py-3 rounded-xl font-bold text-xs font-sans transition-all cursor-pointer ${
                activeTab === "tubular"
                  ? "bg-[#0c5132] text-white shadow-md"
                  : "bg-slate-100 text-gray-600 hover:bg-slate-200"
              }`}
            >
              Budget Home Systems (Tubular Battery)
            </button>
          </div>

          {/* TAB 1: PREMIUM LITHIUM BATTERY PACKS */}
          {activeTab === "lithium" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {LITHIUM_PACKAGES.map((pack) => (
                <div 
                  key={pack.id}
                  className={`border rounded-2xl p-6 text-left flex flex-col justify-between transition-all duration-300 relative ${
                    pack.isPopular 
                      ? "border-emerald-600 shadow-xl scale-[1.01] bg-gradient-to-b from-white to-emerald-50/20" 
                      : "border-slate-200 bg-white hover:border-emerald-500 hover:shadow-lg"
                  }`}
                >
                  {pack.isPopular && (
                    <div className="absolute top-0 right-10 -translate-y-1/2 bg-[#0c5132] text-amber-300 text-[10px] font-mono font-bold uppercase py-1 px-3.5 rounded-full shadow border border-amber-400">
                      Popular Selection
                    </div>
                  )}

                  <div>
                    <div className="flex justify-between items-start gap-3">
                      <h3 className="font-sans font-black text-[#0c5132] text-xl tracking-tight leading-tight">
                        {pack.name}
                      </h3>
                      <span className="bg-emerald-50 text-emerald-800 text-[9px] font-mono font-bold px-2 py-0.5 rounded tracking-widest uppercase">
                        LITHIUM
                      </span>
                    </div>
                    
                    <p className="text-xs text-gray-500 font-mono mt-1 font-semibold">{pack.capacity} Capacity</p>
                    <p className="text-xs text-gray-400 italic mt-0.5">Includes: {pack.batteries}</p>

                    <div className="my-5 border-t border-b border-gray-100 py-3 flex items-baseline gap-1 bg-slate-50/50 px-3 rounded-xl">
                      <span className="text-2xl sm:text-3xl font-extrabold text-[#0c5132] leading-none">{pack.price}</span>
                      <span className="text-[10px] text-gray-400 uppercase font-mono tracking-wider ml-1">Setup fee</span>
                    </div>

                    {/* Loads index */}
                    <div className="mb-5 space-y-1.5">
                      <p className="font-mono text-[9px] font-extrabold uppercase text-[#0c5132] tracking-wider mb-2">RUNS ALL CONCURRENT APPLIANCES:</p>
                      <div className="flex flex-wrap gap-1">
                        {pack.loads.map((ld, index) => (
                          <span key={index} className="bg-slate-100 border border-slate-200 text-gray-700 px-2 py-0.5 rounded text-[10px] font-semibold dark:border-emerald-50/10 dark:bg-emerald-50/40">
                            {ld}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Features list */}
                    <div className="space-y-2 text-xs mb-6">
                      <p className="font-bold text-gray-700">INCLUDED IN STANDARD DEPLOYMENT:</p>
                      <ul className="space-y-1.5">
                        {pack.features.map((feat, index) => (
                          <li key={index} className="flex gap-2 items-start text-gray-600 font-medium">
                            <Zap className="w-3.5 h-3.5 text-amber-500 mt-0.5 flex-shrink-0" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Warranty indicator */}
                    <div className="bg-emerald-50/70 border border-emerald-100 rounded-xl p-3 mb-4.5 text-xs text-emerald-950 font-bold flex gap-3 divide-x divide-emerald-250 items-center">
                      <span className="font-sans flex items-center gap-1">
                        🔋 Battery Warranty: {pack.warranty.battery}
                      </span>
                      <span className="font-sans pl-3 flex items-center gap-1">
                        🔌 Inverter: {pack.warranty.inverter}
                      </span>
                    </div>
                    
                    <p className="text-[11px] text-gray-500 bg-slate-100 p-2.5 rounded-lg mb-6 leading-relaxed font-semibold italic">
                      <span className="font-bold text-gray-700">Best for: </span>
                      {pack.recommendedFor}
                    </p>
                  </div>

                  <div>
                    <button
                      onClick={() => handleWhatsAppContact(pack.name, pack.price)}
                      className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#0c5132] text-white hover:bg-[#0a4027] text-xs font-bold shadow-md hover:shadow-lg transition-all"
                    >
                      Book Installation on WhatsApp
                      <ArrowRight className="w-4 h-4 text-amber-300" />
                    </button>
                    <p className="text-[10px] text-gray-400 font-mono text-center mt-2.5">
                      🔒 No upfront payment required prior to engineering appraisal.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 2: HEAVY-DUTY INDUSTRIAL MODELS */}
          {activeTab === "heavy" && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {HEAVY_DUTY_PACKAGES.map((pack) => (
                <div 
                  key={pack.id}
                  className="border border-emerald-100 bg-slate-50/30 rounded-2xl p-6.5 text-left flex flex-col justify-between hover:border-emerald-500 transition-all hover:bg-white hover:shadow-xl"
                >
                  <div>
                    <div className="flex justify-between items-start gap-3">
                      <h3 className="font-sans font-black text-[#0c5132] text-lg tracking-tight leading-tight uppercase">
                        {pack.name}
                      </h3>
                      <span className="bg-amber-100 text-amber-800 text-[9px] font-mono font-bold px-2 py-0.5 rounded uppercase tracking-wider">
                        INDUSTRIAL
                      </span>
                    </div>
                    
                    <p className="text-xs text-gray-500 font-mono mt-1 font-semibold">{pack.capacity} Powerhouse Grid</p>
                    <p className="text-xs text-gray-400 italic">Includes: {pack.batteries}</p>

                    <div className="my-5 border-t border-b border-emerald-100 py-3.5 flex items-baseline gap-1">
                      <span className="text-2xl sm:text-3xl font-extrabold text-[#0c5132] leading-none">{pack.price}</span>
                      <span className="text-[10px] text-gray-400 uppercase font-mono tracking-wider ml-1">Setup fee</span>
                    </div>

                    {/* Loads index */}
                    <div className="mb-5 space-y-1.5">
                      <p className="font-mono text-[9px] font-extrabold uppercase text-amber-900 tracking-wider mb-2">RUNS COMPREHENSIVE INDUSTRIAL LOADS:</p>
                      <div className="flex flex-wrap gap-1">
                        {pack.loads.map((ld, index) => (
                          <span key={index} className="bg-amber-50 border border-amber-200 text-amber-900 px-2 py-0.5 rounded text-[10px] font-semibold">
                            {ld}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Features list */}
                    <div className="space-y-2 text-xs mb-6">
                      <p className="font-bold text-gray-700">INCLUDED IN HEAVY SERVICE COMMISSIONS:</p>
                      <ul className="space-y-2">
                        {pack.features.map((feat, index) => (
                          <li key={index} className="flex gap-2 items-start text-gray-600 font-medium">
                            <Zap className="w-3.5 h-3.5 text-amber-500 mt-0.5 flex-shrink-0" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Warranty indicator */}
                    <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 mb-4 text-xs text-amber-950 font-bold flex gap-3 divide-x divide-amber-300 items-center">
                      <span className="font-sans">
                        🔋 Battery Warranty: {pack.warranty.battery}
                      </span>
                      <span className="font-sans pl-3">
                        🔌 Inverter: {pack.warranty.inverter}
                      </span>
                    </div>
                    
                    <p className="text-[11px] text-gray-500 bg-slate-100 p-2.5 rounded-lg mb-6 leading-relaxed font-semibold italic">
                      <span className="font-bold text-gray-700">Best for: </span>
                      {pack.recommendedFor}
                    </p>
                  </div>

                  <div>
                    <button
                      onClick={() => handleWhatsAppContact(pack.name, pack.price)}
                      className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-orange-600 hover:bg-orange-700 text-white text-xs font-bold shadow-md hover:shadow-lg transition-all"
                    >
                      Book Industrial Setup
                      <ArrowRight className="w-4 h-4 text-amber-300" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 3: BUDGET SYSTEM TUBULAR DESIGNS */}
          {activeTab === "tubular" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {HOUSING_BUDGET_PACKAGES.map((pack) => (
                <div 
                  key={pack.id}
                  className="border border-slate-200 bg-white rounded-2xl p-6.5 text-left flex flex-col justify-between hover:border-emerald-500 hover:shadow-xl transition-all"
                >
                  <div>
                    <div className="flex justify-between items-start gap-3">
                      <h3 className="font-sans font-extrabold text-[#062316] text-lg tracking-tight leading-tight uppercase">
                        {pack.name}
                      </h3>
                      <span className="bg-slate-100 text-gray-800 text-[9px] font-mono font-bold px-2 py-0.5 rounded uppercase">
                        TUBULAR
                      </span>
                    </div>
                    
                    <p className="text-xs text-gray-400 mt-1 font-semibold">{pack.specs}</p>

                    <div className="my-5 border-t border-b border-gray-100 py-3.5 flex items-baseline gap-1 bg-slate-50 px-3 rounded-xl">
                      <span className="text-2xl sm:text-3xl font-extrabold text-emerald-800 leading-none">{pack.range}</span>
                      <span className="text-[10px] text-gray-400 uppercase font-mono tracking-wider ml-1">Range</span>
                    </div>

                    {/* Loads index */}
                    <div className="mb-5 space-y-1.5">
                      <p className="font-mono text-[9px] font-bold uppercase text-gray-500 tracking-wider">RECOMMENDED LOADS SELECTION:</p>
                      <div className="flex flex-wrap gap-1">
                        {pack.loads.map((ld, index) => (
                          <span key={index} className="bg-emerald-50 text-emerald-900 border border-emerald-100 px-2 py-0.5 rounded text-[10px] font-semibold font-medium">
                            {ld}
                          </span>
                        ))}
                      </div>
                    </div>

                    <p className="text-[11px] text-gray-500 bg-slate-150 p-2.5 rounded-lg mb-6 leading-relaxed font-semibold italic">
                      <span className="font-bold text-gray-700">Special Recommendation: </span>
                      {pack.idealFor}
                    </p>
                  </div>

                  <div>
                    <button
                      onClick={() => handleWhatsAppContact(pack.name, pack.range)}
                      className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#0c5132] text-white hover:bg-[#0a4027] text-xs font-bold shadow-md hover:shadow-lg transition-all"
                    >
                      Inquire Budget Setup
                      <ArrowRight className="w-4 h-4 text-amber-300" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      </section>

      {/* 3. TEEMO-SUN SOLAR INSTITUTE TRAINING SECTION */}
      <section 
        id="training-section" 
        className="py-20 bg-[#f4f7f5] px-4 scroll-mt-20"
      >
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-3xl border border-emerald-100 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0">
            
            {/* Left side info */}
            <div className="lg:col-span-7 p-8 sm:p-12 text-left space-y-6">
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-amber-100 border border-amber-300 rounded-full font-mono text-[10px] font-extrabold text-amber-800 uppercase tracking-widest">
                <GraduationCap className="w-4 h-4" />
                Teemo-Sun Solar Institute Program
              </span>

              <h2 className="font-sans font-black text-3xl sm:text-4xl text-[#0c5132] tracking-tight leading-tight">
                Learn. Practice. Master. <br />
                <span className="text-amber-500">Power Your Future.</span>
              </h2>

              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                Want to build a profitable and sustainable career in renewable energy? Our hands-on training program is designed specifically for engineers, students, electricians, entrepreneurs, or general energy seekers.
              </p>

              <div className="pt-2">
                <h4 className="font-bold text-xs uppercase font-mono tracking-widest text-emerald-800 mb-3.5">What is covered in our workshop courses:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs leading-relaxed font-semibold text-gray-700">
                  <div className="flex gap-2.5 items-start">
                    <CheckCircle2 className="w-4.5 h-4.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>Solar Panels installation mechanics</span>
                  </div>
                  <div className="flex gap-2.5 items-start">
                    <CheckCircle2 className="w-4.5 h-4.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>Inverter programming & smart charger setups</span>
                  </div>
                  <div className="flex gap-2.5 items-start">
                    <CheckCircle2 className="w-4.5 h-4.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>Battery pack alignment (Lithium, Tubular & AGM)</span>
                  </div>
                  <div className="flex gap-2.5 items-start">
                    <CheckCircle2 className="w-4.5 h-4.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>Home & corporate technical load scoping calculations</span>
                  </div>
                  <div className="flex gap-2.5 items-start">
                    <CheckCircle2 className="w-4.5 h-4.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>In-the-field electrical problem diagnostics</span>
                  </div>
                  <div className="flex gap-2.5 items-start">
                    <CheckCircle2 className="w-4.5 h-4.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>Safe compliance and high-grade materials auditing</span>
                  </div>
                </div>
              </div>

              {/* Class parameters */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-slate-100">
                <div>
                  <p className="font-sans font-bold text-[#0c5132] text-sm leading-none">PRACTICAL</p>
                  <p className="text-[10px] text-gray-400 font-mono mt-1">100% Labs focus</p>
                </div>
                <div>
                  <p className="font-sans font-bold text-[#0c5132] text-sm leading-none">CERTIFICATE</p>
                  <p className="text-[10px] text-gray-400 font-mono mt-1">On program finish</p>
                </div>
                <div>
                  <p className="font-sans font-bold text-[#0c5132] text-sm leading-none">FLEXIBLE</p>
                  <p className="text-[10px] text-gray-400 font-mono mt-1">Weekend groups</p>
                </div>
                <div>
                  <p className="font-sans font-bold text-[#0c5132] text-sm leading-none">ABEOKUTA</p>
                  <p className="text-[10px] text-gray-400 font-mono mt-1">Class location</p>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
                <a
                  href="https://wa.me/2347064519576?text=Hello%20Teemo-Sun%20Solar!%20I'm%20very%20interested%20in%20enrolling%20in%20your%20Solar%20Energy%20Training%20Session.%20Please%20provide%20academic%20fees%2C%20calendar%2C%20and%20location%20details."
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-extrabold text-sm text-center flex items-center justify-center gap-2 shadow"
                >
                  Register for Next Training Session
                  <ArrowRight className="w-4 h-4 text-amber-300 animate-pulse" />
                </a>
              </div>
            </div>

            {/* Right side styling with image and banner details */}
            <div 
              className="lg:col-span-5 bg-cover bg-center min-h-[350px] relative p-8 flex flex-col justify-between text-white text-left"
              style={{ 
                backgroundImage: `linear-gradient(rgba(12, 81, 50, 0.85), rgba(4, 25, 15, 0.9)), url('https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1200&auto=format&fit=crop')` 
              }}
            >
              <div className="bg-black/30 backdrop-blur-sm p-4 rounded-xl border border-white/10 uppercase font-mono text-center mb-6">
                <p className="text-xs text-amber-400 font-bold tracking-widest leading-none">LIMITED SLOTS IN SESSION</p>
                <p className="text-[10px] text-emerald-200 mt-1">Abeokuta, Ogun State, Nigeria</p>
              </div>

              <div className="space-y-4">
                <h4 className="font-sans font-bold text-lg text-amber-300 uppercase shrink">Who Can Enroll?</h4>
                <ul className="space-y-2 text-xs text-emerald-100 font-semibold leading-relaxed">
                  <li className="flex gap-2 items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                    <span>Electricians & Repair Technicians</span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                    <span>Physics / Engineering grad students</span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                    <span>Green Energy Investors / Entrepreneurs</span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                    <span>Anyone passionate about energy independence</span>
                  </li>
                </ul>

                <div className="text-center bg-emerald-900/60 p-4 border border-emerald-600/30 rounded-lg">
                  <p className="text-xs text-emerald-300 font-mono">CALL / ENROLL VIA TELEPHONE:</p>
                  <p className="font-sans font-bold text-white text-base mt-1 tracking-wider">+2347064519576 | 09022620416</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
