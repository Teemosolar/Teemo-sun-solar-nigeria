import React, { useState, useEffect } from "react";
import { 
  Sun, ArrowRight, Zap, ShieldCheck, Award, HeartHandshake,
  Wrench, Users, ShoppingCart, Bike, BookOpen, Clock
} from "lucide-react";
import { SERVICES, LITHIUM_PACKAGES, INDUSTRIES } from "../data";

interface HomeProps {
  setCurrentPage: (page: string) => void;
  setScrollSection: (section: string | null) => void;
}

export default function Home({ setCurrentPage, setScrollSection }: HomeProps) {
  const handleRouteToPackages = () => {
    setCurrentPage("services");
    setScrollSection("packages-section");
    setTimeout(() => {
      const element = document.getElementById("packages-section");
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 120);
  };

  const handleRouteToSection = (page: string, sectionId?: string) => {
    setCurrentPage(page);
    if (sectionId) {
      setScrollSection(sectionId);
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 120);
    } else {
      setScrollSection(null);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div id="home-view" className="w-full flex flex-col">
      {/* 1. HERO SECTION WITH IMAGE BACKGROUND */}
      <section 
        className="relative min-h-[90vh] flex items-center bg-cover bg-center bg-no-repeat overflow-hidden py-20 px-4"
        style={{ 
          backgroundImage: `linear-gradient(rgba(4, 25, 15, 0.72), rgba(12, 81, 50, 0.78)), url('https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2000&auto=format&fit=crop')` 
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/40 to-amber-950/20 pointer-events-none"></div>

        {/* Dynamic Sun Ray Light Accent */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl pointer-events-none animate-pulse"></div>

        <div className="relative max-w-7xl mx-auto w-full z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 text-left space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/25 text-amber-300 backdrop-blur-sm text-xs md:text-sm font-semibold tracking-wider uppercase font-mono">
              <Sun className="w-4.5 h-4.5 text-amber-400 animate-spin-slow" />
              <span>Renewable Energy Mastery in Nigeria</span>
            </div>

            <h1 className="font-sans font-extrabold text-white text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-tight">
              Powering Homes, <br />
              <span className="text-amber-400">Empowering Businesses,</span> <br />
              Sustaining the Future.
            </h1>

            <p className="font-sans text-gray-200 text-base md:text-lg max-w-2xl font-medium leading-relaxed">
              Ditch unstable electricity grids and expensive generator fuel rates. Teemo-Sun Solar Nigeria delivers bespoke, long-life lithium battery systems engineered with premium components.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <button
                onClick={handleRouteToPackages}
                className="px-8 py-4 rounded-full bg-[#fbbf24] text-[#062316] hover:bg-[#f59e0b] font-bold text-sm md:text-base flex items-center justify-center gap-2 shadow-lg transition-transform hover:-translate-y-0.5 cursor-pointer"
              >
                View Premium Solar Packages
                <ArrowRight className="w-5 h-5 text-[#062316]" />
              </button>
              
              <button
                onClick={() => handleRouteToSection("services")}
                className="px-8 py-4 rounded-full bg-white/10 text-white hover:bg-white/15 font-semibold text-sm md:text-base border border-white/20 hover:border-white/40 flex items-center justify-center gap-2 transition-all"
              >
                Inquire Services
              </button>
            </div>

            {/* Micro Highlights Badges */}
            <div className="grid grid-cols-3 gap-4 pt-6 max-w-lg border-t border-white/10">
              <div className="text-left">
                <p className="font-sans font-bold text-amber-400 text-xl md:text-2xl">24/7</p>
                <p className="font-mono text-[10px] md:text-xs text-gray-300">Continuous Power</p>
              </div>
              <div className="text-left">
                <p className="font-sans font-bold text-amber-400 text-xl md:text-2xl">LiFePO4</p>
                <p className="font-mono text-[10px] md:text-xs text-gray-300">Grade-A Batteries</p>
              </div>
              <div className="text-left">
                <p className="font-sans font-bold text-amber-400 text-xl md:text-2xl">5 Years</p>
                <p className="font-mono text-[10px] md:text-xs text-gray-300">Active Warranty</p>
              </div>
            </div>
          </div>

          {/* Quick Package Card Carousel preview on Hero */}
          <div className="lg:col-span-5 w-full flex justify-center">
            <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6.5 text-[#062316] w-full max-w-md shadow-2xl border border-emerald-50 relative overflow-hidden transition-all duration-300 hover:scale-[1.01]">
              <div className="absolute top-0 right-0 w-28 h-28 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none"></div>
              
              <span className="font-mono text-[10px] uppercase font-bold text-[#0c5132] bg-emerald-55 bg-emerald-50 px-2.5 py-1 rounded-full inline-block mb-3 border border-emerald-100/50">
                ⭐ Most Requested Plan
              </span>

              <h3 className="font-sans font-extrabold text-2xl tracking-tight text-[#0c5132]">
                5KW - 5KWH Solar System
              </h3>
              <p className="text-xs text-gray-500 font-medium">Complete Lithium-Ion Power Setup</p>

              <div className="my-5 flex items-baseline gap-1.5 border-t border-b border-gray-100 py-3">
                <span className="text-3xl font-extrabold text-[#0c5132]">₦3,200,000</span>
                <span className="text-[10px] text-gray-400 font-mono uppercase">Full Logistics & Install Included</span>
              </div>

              <div className="space-y-2.5 text-xs text-left mb-6">
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span className="font-medium text-gray-700">1pcs 5KW Heavy-Duty Pure Sine Inverter</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span className="font-medium text-gray-700">1pcs 5KWH High-Efficiency Lithium Battery</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span className="font-medium text-gray-700">8pcs 600W Mono-crystalline Solar Panels</span>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <span className="font-bold text-[#0c5132] uppercase text-[9px] tracking-wider px-1.5 py-0.5 bg-amber-100 text-amber-800 rounded">Runs:</span>
                  <span className="text-gray-600 italic">Fridge/Freezer, Water Pump, TV, Lights & Fans</span>
                </div>
              </div>

              <a
                href="https://wa.me/2347064519576?text=Hello%20Teemo-Sun%20Solar%20Nigeria%2C%20I'm%20interested%20in%20your%205KW%20-%205KWH%20Lithium%20System%20priced%20at%20%E2%82%A63%2C200%2C000.%20Please%20provide%20more%20details%20concerning%20installation%20timelines."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#0c5132] text-white hover:bg-[#0a4027] text-sm font-bold shadow-md hover:shadow-lg transition-all text-center"
              >
                Inquire Package on WhatsApp
                <ArrowRight className="w-4 h-4 text-amber-300" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE CHOSEN HOMEPAGE VIDEO PLAYER (YOUTUBE SHORTS - NO AUTOPLAY / PERFECTLY SIZED) */}
      <section className="py-16 bg-white px-4 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="font-sans font-extrabold text-3xl md:text-4xl text-[#0c5132] tracking-tight">
              Watch Teemo-Sun in Action
            </h2>
            <p className="font-sans text-gray-500 mt-2 text-sm md:text-base">
              Explore why hundreds of homes and properties rely on Teemo-Sun Solar Nigeria. Take an inside look at our premium solar panel installation process.
            </p>
          </div>

          <div className="max-w-md mx-auto">
            {/* Perfectly compact vertical video frame (9:16 aspect ratio to keep vertical Shorts ultra sharp and non-blurry) */}
            <div className="bg-[#041a10] rounded-3xl overflow-hidden shadow-2xl relative border-8 border-[#0c5132] aspect-[9/16] max-w-[340px] mx-auto">
              
              {/* Native YouTube Embed without autoplay */}
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/ypmv2KNkO5Q?rel=0"
                title="Teemo-Sun Solar Nigeria Video Showcase"
                frameBorder="0"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>

              {/* Minimal brand label overlay */}
              <div className="absolute top-4 left-4 pointer-events-none bg-black/70 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1.5 border border-white/10 text-[10px] text-white font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>TEEMO-SUN SHOWCASE</span>
              </div>
            </div>

            {/* Premium, Corporate Solar CTA Button Panel */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 p-5 rounded-2xl bg-emerald-50 border border-emerald-100 shadow-sm text-left">
              <div className="flex-1">
                <h4 className="font-sans font-extrabold text-[#0c5132] text-xs flex items-center gap-1.5">
                  <HeartHandshake className="w-4 h-4 text-emerald-600" />
                  Ready to Switch to Uninterrupted Solar Power?
                </h4>
                <p className="text-[11px] text-gray-500 mt-0.5">
                  Contact us on WhatsApp with details to get a customized, clean energy quote for your property today.
                </p>
              </div>
              <a 
                href="https://wa.me/2347064519576?text=Hello%20Teemo-Sun%20Solar!%20I%20saw%20your%20campaign%20reel%20video%20online%20and%20want%2520to%2520get%2520started%2520switching%2520my%2520property%2520to%2520uninterrupted%2520solar%2520power."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#0c5132] hover:bg-emerald-800 text-white font-bold text-xs shadow-md transition-all active:scale-[0.98] cursor-pointer whitespace-nowrap"
              >
                Inquire on WhatsApp Now
                <ArrowRight className="w-3.5 h-3.5 text-amber-300" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE 6 IMPORTANT SECTIONS GATEWAY GRID */}
      <section className="py-20 bg-[#f4f7f5] px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="font-mono text-xs text-[#0c5132] font-semibold tracking-widest uppercase bg-emerald-100 py-1.5 px-3 rounded-full">
              CORE DIRECTIVES
            </span>
            <h2 className="font-sans font-extrabold text-3xl md:text-4xl text-[#062316] mt-4 tracking-tight">
              Gateway to Power Security
            </h2>
            <p className="font-sans text-gray-500 mt-2 text-sm md:text-base">
              Six critical segments of Teemo-Sun designed to safely guide residential, commercial, and engineering projects in Nigeria.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Gateway 1: Services */}
            <div 
              onClick={() => handleRouteToSection("services")}
              className="bg-white rounded-2xl p-6.5 border border-emerald-100/50 hover:border-[#0c5132] shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer text-left"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#0c5132] flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-[#0c5132] group-hover:text-white transition-all">
                <Wrench className="w-6 h-6" />
              </div>
              <h3 className="font-sans font-bold text-lg text-[#0c5132] mb-2 group-hover:text-[#0c5132] tracking-tight">
                Our Services Catalog
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-4 font-medium">
                Complete design, supply, installation, energy auditing, custom wiring and expert troubleshooting across Nigeria.
              </p>
              <div className="inline-flex items-center gap-1.5 text-[#0c5132] font-bold text-xs">
                <span>Check our Services</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </div>
            </div>

            {/* Gateway 2: Packages */}
            <div 
              onClick={handleRouteToPackages}
              className="bg-white rounded-2xl p-6.5 border border-emerald-100/50 hover:border-[#0c5132] shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer text-left"
            >
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-[#062316] transition-all">
                <Sun className="w-6 h-6" />
              </div>
              <h3 className="font-sans font-bold text-lg text-[#0c5132] mb-2 group-hover:text-[#0c5132] tracking-tight">
                Standard Solar Packages
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-4 font-medium">
                Detailed lithium prices ranging from 2.5KW standard loadups up to heavy duty corporate microgrids of 50KW.
              </p>
              <div className="inline-flex items-center gap-1.5 text-[#0c5132] font-bold text-xs">
                <span>Check Prices List</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </div>
            </div>

            {/* Gateway 3: Portfolio */}
            <div 
              onClick={() => handleRouteToSection("portfolio")}
              className="bg-white rounded-2xl p-6.5 border border-emerald-100/50 hover:border-[#0c5132] shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer text-left"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-[#0c5132] group-hover:text-white transition-all">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-sans font-bold text-lg text-[#0c5132] mb-2 group-hover:text-[#0c5132] tracking-tight">
                Our Projects Portfolio
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-4 font-medium">
                View real landmark installations, like the 5MWp grid array in Abuja, corporate setups in Lagos, and villas in Abeokuta.
              </p>
              <div className="inline-flex items-center gap-1.5 text-[#0c5132] font-bold text-xs">
                <span>View Real Portfolio</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </div>
            </div>

            {/* Gateway 4: Training Institute */}
            <div 
              onClick={() => handleRouteToSection("services", "training-section")}
              className="bg-white rounded-2xl p-6.5 border border-emerald-100/50 hover:border-[#0c5132] shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer text-left"
            >
              <div className="w-12 h-12 rounded-xl bg-orange-50 text-orange-700 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-orange-600 group-hover:text-white transition-all">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="font-sans font-bold text-lg text-[#0c5132] mb-2 group-hover:text-[#0c5132] tracking-tight">
                Solar Training Institute
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-4 font-medium">
                Become a skilled solar professional. Join practical, hands-on renewable engineering workshops in Abeokuta.
              </p>
              <div className="inline-flex items-center gap-1.5 text-[#0c5132] font-bold text-xs">
                <span>Check Ongoing Classes</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </div>
            </div>

            {/* Gateway 5: About Us */}
            <div 
              onClick={() => handleRouteToSection("about")}
              className="bg-white rounded-2xl p-6.5 border border-emerald-100/50 hover:border-[#0c5132] shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer text-left"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-blue-700 group-hover:text-white transition-all">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-sans font-bold text-lg text-[#0c5132] mb-2 group-hover:text-[#0c5132] tracking-tight">
                About Teemo-Sun Group
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-4 font-medium">
                Learn about our fast-growing vision, core values, HSE safety controls, and dedication to eco-friendly systems.
              </p>
              <div className="inline-flex items-center gap-1.5 text-[#0c5132] font-bold text-xs">
                <span>Explore Company Profile</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </div>
            </div>

            {/* Gateway 6: Contact */}
            <div 
              onClick={() => handleRouteToSection("contact")}
              className="bg-white rounded-2xl p-6.5 border border-emerald-100/50 hover:border-[#0c5132] shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer text-left"
            >
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-[#0c5132] flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-[#0c5132] group-hover:text-white transition-all">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="font-sans font-bold text-lg text-[#0c5132] mb-2 group-hover:text-[#0c5132] tracking-tight">
                Get Quote & Consultation
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-4 font-medium">
                Get direct touch with engineering units in Abeokuta & Lagos. Quick callback, on-site energy assessment.
              </p>
              <div className="inline-flex items-center gap-1.5 text-[#0c5132] font-bold text-xs">
                <span>Request Assessment</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. HOMEPAGE PACKAGES SECTION (LINKS TO SERVICE PAGE & SCROLLS TO PACKAGES SECTION) */}
      <section className="py-20 bg-white px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div className="text-left">
              <span className="font-mono text-xs text-[#0c5132] uppercase tracking-wider font-bold">RELIABLE SOLUTIONS</span>
              <h2 className="font-sans font-extrabold text-3xl md:text-4xl text-[#0c5132] mt-2 tracking-tight">
                Premium Solar Energy Packages
              </h2>
              <p className="text-gray-500 text-sm md:text-base mt-2">
                Engineered with Grade-A Lithium-Ion deep cycle cells and high-grade intelligent pure sine inverters.
              </p>
            </div>
            <button
              onClick={handleRouteToPackages}
              className="mt-4 md:mt-0 font-sans font-bold text-sm text-[#0c5132] hover:text-[#0a4027] flex items-center gap-1.5 group cursor-pointer border-b-2 border-amber-400 pb-1"
            >
              See All Available Packages
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {LITHIUM_PACKAGES.slice(0, 3).map((pack) => (
              <div 
                key={pack.id} 
                className={`bg-[#f4f7f5]/70 rounded-2xl p-6.5 border transition-all duration-300 text-left flex flex-col justify-between ${
                  pack.isPopular 
                    ? "border-emerald-500 relative/90 bg-white shadow-xl scale-[1.02]" 
                    : "border-emerald-100 hover:shadow-lg hover:border-emerald-300"
                }`}
              >
                {pack.isPopular && (
                  <div className="absolute top-0 right-10 -translate-y-1/2 bg-[#0c5132] text-amber-300 text-[10px] font-mono font-bold uppercase py-1 px-3.5 rounded-full shadow border border-amber-400">
                    Highest Demand
                  </div>
                )}
                
                <div>
                  <h3 className="font-sans font-extrabold text-[#0c5132] text-xl tracking-tight">
                    {pack.name}
                  </h3>
                  <p className="text-[11px] font-mono text-gray-400 uppercase tracking-widest mt-0.5">
                    {pack.capacity} System Specification
                  </p>

                  <div className="my-5 border-t border-b border-emerald-100/60 py-3 flex items-baseline gap-1">
                    <span className="text-2xl sm:text-3xl font-extrabold text-[#0c5132]">{pack.price}</span>
                    <span className="text-[10px] text-gray-400 uppercase font-mono tracking-wider ml-1">Setup fee</span>
                  </div>

                  <div className="mb-6 space-y-2 text-xs">
                    <p className="font-bold text-[#0c5132] text-[10px] font-mono tracking-widest uppercase">LOAD CAPACITY DIAGNOSTIC:</p>
                    <div className="flex flex-wrap gap-1.5">
                      {pack.loads.map((l, i) => (
                        <span key={i} className="bg-emerald-50/70 border border-emerald-100 text-emerald-900 px-2 py-0.5 rounded text-[10px] font-semibold">
                          {l}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2 mb-6 text-xs text-gray-600">
                    <p className="font-bold text-gray-700">INCLUDED HARDWARE COMPONENTS:</p>
                    <ul className="space-y-1.5">
                      {pack.features.slice(0, 4).map((feat, i) => (
                        <li key={i} className="flex gap-2 items-start">
                          <Zap className="w-3.5 h-3.5 text-amber-500 mt-0.5 flex-shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-emerald-50">
                  <a
                    href={`https://wa.me/2347064519576?text=Hello%20Teemo-Sun%20Solar%20Nigeria!%20I'm%20very%20interested%20in%20ordering%20your%20${encodeURIComponent(pack.name)}%20package%20priced%20at%20${encodeURIComponent(pack.price)}.%20Please%20verify%20delivery%20times%20for%20my%20location.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#0c5132] text-white hover:bg-[#0a4027] text-xs font-extrabold shadow-md transition-all text-center"
                  >
                    Order on WhatsApp Now
                    <ArrowRight className="w-3.5 h-3.5 text-amber-300" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. INDUSTRIES WE SERVE GRID */}
      <section className="py-20 bg-[#062316] text-white px-4 relative overflow-hidden">
        {/* Ambient solar tile visual decoration in background */}
        <div className="absolute inset-0 opacity-5 pointer-events-none mix-blend-overlay bg-[radial-gradient(#fbbf24_1px,transparent_1px)] [background-size:16px_16px]"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-mono text-xs text-amber-400 font-bold tracking-widest uppercase bg-amber-400/10 py-1.5 px-3 rounded-full border border-amber-400/25">
              NIGERIAN LANDSCAPE COVERS
            </span>
            <h2 className="font-sans font-extrabold text-3xl md:text-4xl mt-4 tracking-tight">
              Solar Infrastructures We Power
            </h2>
            <p className="font-sans text-emerald-200 mt-2 text-sm md:text-base font-medium">
              Formulated energy systems constructed perfectly to fit unique operations in any climate condition.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {INDUSTRIES.map((ind, idx) => (
              <div 
                key={idx}
                className="bg-emerald-950/40 border border-emerald-800/40 rounded-xl p-5 hover:border-amber-400/40 transition-all duration-300 text-left flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-emerald-900/40 border border-emerald-700/30 flex items-center justify-center mb-4 text-amber-400 font-bold">
                    <Sun className="w-5 h-5" />
                  </div>
                  <h4 className="font-sans font-bold text-base text-white mb-2 tracking-tight">
                    {ind.name}
                  </h4>
                  <p className="text-xs text-emerald-200/80 leading-relaxed font-semibold">
                    {ind.description}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-emerald-900/30 flex justify-between items-center text-[10px] text-emerald-400 font-mono font-bold">
                  <span>ACTIVE GRID</span>
                  <span className="text-amber-400">● 100% RELIABLE</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. HEALTH, SAFETY & SPECIAL COMMITMENTS */}
      <section className="py-20 bg-emerald-50/50 px-4">
        <div className="max-w-7xl mx-auto text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="font-mono text-xs text-[#0c5132] uppercase tracking-wider font-bold bg-white border border-emerald-100 px-3 py-1 bg-emerald-100 rounded-full">
                HSE REGULATORY COMPLIANCE
              </span>
              
              <h2 className="font-sans font-extrabold text-3xl md:text-4xl text-[#0c5132] tracking-tight">
                Health, Safety & Environment (HSE) Priority
              </h2>
              
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                At TEEMO-SUN SOLAR NIGERIA, safety and environmental responsibility are our utmost operational priorities. We enforce strict compliance with engineering guidelines and global solar best practices:
              </p>

              <div className="space-y-4">
                <div className="flex gap-3 items-start">
                  <div className="p-1 px-2.5 rounded bg-emerald-100 text-[#0c5132] text-xs font-mono font-bold">01</div>
                  <div>
                    <h4 className="font-sans font-bold text-sm text-[#0c5132]">Certified Technical Experts</h4>
                    <p className="text-xs text-gray-500 mt-0.5">Every technician is standard-trained with rigorous mechanical and roofing safety protocols.</p>
                  </div>
                </div>
                
                <div className="flex gap-3 items-start">
                  <div className="p-1 px-2.5 rounded bg-emerald-100 text-[#0c5132] text-xs font-mono font-bold">02</div>
                  <div>
                    <h4 className="font-sans font-bold text-sm text-[#0c5132]">Certified High-Grade components</h4>
                    <p className="text-xs text-gray-500 mt-0.5">We strictly deploy non-volatile premium Lithium-Iron-Phosphate (LiFePO4) hardware modules.</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <div className="p-1 px-2.5 rounded bg-emerald-100 text-[#0c5132] text-xs font-mono font-bold">03</div>
                  <div>
                    <h4 className="font-sans font-bold text-sm text-[#0c5132]">Eco-Friendly Disposal Schemes</h4>
                    <p className="text-xs text-gray-500 mt-0.5">We assist with battery cell reclamation and environmentally compliant safe decomissioning processes.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 relative bg-white border border-emerald-100 rounded-2xl p-6.5 shadow-md space-y-5 text-left">
              <span className="font-mono text-[9px] uppercase tracking-widest font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded">
                Why Choose Us?
              </span>

              <h3 className="font-sans font-extrabold text-[#0c5132] text-xl">
                Guaranteed Solar Independence
              </h3>

              <div className="divide-y divide-emerald-50">
                <div className="py-3.5 flex gap-3">
                  <ShieldCheck className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-bold text-xs text-[#0c5132]">Experienced Technical Crew</h5>
                    <p className="text-xs text-gray-500">Over a decade of solar engineering and installation experience in Lagos, Abuja and Ogun states.</p>
                  </div>
                </div>

                <div className="py-3.5 flex gap-3">
                  <ShieldCheck className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-bold text-xs text-[#0c5132]">Durable Hardware & Inverters</h5>
                    <p className="text-xs text-gray-500">Only deploying authenticated manufacturers with solid warranties.</p>
                  </div>
                </div>

                <div className="py-3.5 flex gap-3">
                  <ShieldCheck className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-bold text-xs text-[#0c5132]">Flexible Payment Milestones</h5>
                    <p className="text-xs text-gray-500">Tailored financial packages designed to make sustainable solar transition comfortable.</p>
                  </div>
                </div>

                <div className="py-3.5 flex gap-3">
                  <ShieldCheck className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-bold text-xs text-[#0c5132]">Monthly After-sales Followup Check</h5>
                    <p className="text-xs text-gray-500">Active performance scanning of lithium capacities after backup starts operating.</p>
                  </div>
                </div>
              </div>

              <a 
                href="https://wa.me/2347064519576?text=Hello%20Teemo-Sun%20Solar!%20I'm%20ready%20to%20discuss%20switching%20my%20property%20to%20high-efficiency%20sustainable%20solar%20power." 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full inline-flex items-center justify-center gap-2 py-3 bg-[#0c5132] text-white font-bold text-xs rounded-lg hover:bg-emerald-800 transition-colors shadow-sm"
              >
                WhatsApp Direct Inquiries
                <ArrowRight className="w-4 h-4 text-amber-300" />
              </a>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
