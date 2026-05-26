import React, { useState } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Contact from "./components/Contact";
import WhatsAppChatWidget from "./components/WhatsAppChatWidget";
import Logo from "./components/Logo";
import { Sun, Phone, Mail, MapPin, ArrowUpRight, HelpCircle } from "lucide-react";

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>("home");
  const [scrollSection, setScrollSection] = useState<string | null>(null);

  const renderActivePage = () => {
    switch (currentPage) {
      case "home":
        return <Home setCurrentPage={setCurrentPage} setScrollSection={setScrollSection} />;
      case "services":
        return <Services scrollSection={scrollSection} setScrollSection={setScrollSection} />;
      case "portfolio":
        return <Portfolio />;
      case "about":
        return <About />;
      case "contact":
        return <Contact />;
      default:
        return <Home setCurrentPage={setCurrentPage} setScrollSection={setScrollSection} />;
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col text-[#062316] selection:bg-amber-150 selection:text-[#0c5132]">
      
      {/* GLOBAL BRAND HEADER */}
      <Header 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage} 
        scrollSection={scrollSection}
        setScrollSection={setScrollSection}
      />

      {/* CORE ACTIVE ROUTER OUTLET */}
      <main className="flex-grow">
        {renderActivePage()}
      </main>

      {/* GLOBAL CONVERTIBLE FOOTER */}
      <footer className="bg-slate-900 text-gray-400 py-16 px-4 border-t border-emerald-950 text-center md:text-left">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Brand Info */}
          <div className="space-y-4 flex flex-col items-center md:items-start text-center md:text-left">
            <Logo variant="light" showMeta={true} align="responsive" />
            
            <p className="text-xs text-gray-400 leading-relaxed font-semibold pt-1">
              Fast-growing renewable engineering group dedicated to delivering reliable, affordable, and certified solar energy systems for properties in Nigeria.
            </p>

            <div className="pt-2 text-[10px] font-mono tracking-wider text-emerald-400 font-bold uppercase">
              ⚡ POWERING HOMES, EMPOWERING BUSINESSES
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="space-y-4 flex flex-col items-center md:items-start">
            <h4 className="font-sans font-bold text-white text-sm uppercase tracking-wider">Quick Navigation</h4>
            <div className="flex flex-col items-center md:items-start gap-2.5 text-xs font-semibold w-full">
              <button 
                onClick={() => { setCurrentPage("home"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                className="hover:text-white transition-colors cursor-pointer text-center md:text-left"
              >
                🏠 Back to Home
              </button>
              <button 
                onClick={() => { setCurrentPage("services"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                className="hover:text-white transition-colors cursor-pointer text-center md:text-left"
              >
                ⚙️ Our Services Scope
              </button>
              <button 
                onClick={() => { 
                  setCurrentPage("services"); 
                  setScrollSection("packages-section");
                  setTimeout(() => {
                    const el = document.getElementById("packages-section");
                    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                  }, 120);
                }}
                className="hover:text-white transition-colors cursor-pointer text-center md:text-left"
              >
                💰 System Packages Prices
              </button>
              <button 
                onClick={() => { setCurrentPage("portfolio"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                className="hover:text-white transition-colors cursor-pointer text-center md:text-left"
              >
                🏆 Commissioned Projects
              </button>
              <button 
                onClick={() => { setCurrentPage("about"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                className="hover:text-white transition-colors cursor-pointer text-center md:text-left"
              >
                📃 About Teemo-Sun
              </button>
              <button 
                onClick={() => { setCurrentPage("contact"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                className="hover:text-white transition-colors cursor-pointer text-center md:text-left"
              >
                📞 Contact Technical Coordinators
              </button>
            </div>
          </div>

          {/* Service Dispatch Coverage */}
          <div className="space-y-4 flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="font-sans font-bold text-white text-sm uppercase tracking-wider">Engineering Dispatch</h4>
            <div className="space-y-3 text-xs leading-relaxed text-gray-400 font-semibold max-w-xs">
              <p>
                We operate as a premium 
                <span className="text-emerald-400 font-bold"> direct-to-site </span>
                engineering group, deploying expert teams to conduct professional diagnostic load profiling and custom solar installations at your location.
              </p>
              <div className="flex items-center gap-1.5 justify-center md:justify-start text-emerald-400 font-bold font-mono text-[10px]">
                <MapPin className="w-3.5 h-3.5" />
                <span>ACTIVE NATIONWIDE DISPATCH</span>
              </div>
            </div>
          </div>

          {/* Quick Contacts */}
          <div className="space-y-4 flex flex-col items-center md:items-start w-full">
            <h4 className="font-sans font-bold text-white text-sm uppercase tracking-wider font-semibold">Immediate Action</h4>
            <div className="space-y-3 text-xs font-semibold flex flex-col items-center md:items-start w-full">
              <a href="tel:+2347064519576" className="flex flex-col sm:flex-row items-center gap-2 hover:text-white justify-center md:justify-start">
                <Phone className="w-4 h-4 text-emerald-500" />
                <span>+234 7064519576</span>
              </a>
              <a href="tel:+2349022620416" className="flex flex-col sm:flex-row items-center gap-2 hover:text-white justify-center md:justify-start">
                <Phone className="w-4 h-4 text-emerald-500" />
                <span>09022620416</span>
              </a>
              <a href="mailto:info@teemosunsolar.com" className="flex flex-col sm:flex-row items-center gap-2 hover:text-white justify-center md:justify-start break-all">
                <Mail className="w-4 h-4 text-emerald-500" />
                <span>info@teemosunsolar.com</span>
              </a>
              
              <div className="pt-2 w-full max-w-[240px]">
                <a 
                  href="https://wa.me/2347064519576" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="w-full text-center inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded bg-emerald-700 hover:bg-emerald-600 text-white font-bold transition-all duration-200 cursor-pointer"
                >
                  Start WhatsApp Chat
                  <ArrowUpRight className="w-3.5 h-3.5 text-amber-300" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Global base credit block */}
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-slate-800 text-center flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium">
          <p>© {currentYear} Teemo-Sun Solar Nigeria Limited. All Rights Reserved.</p>
          
          {/* REQUIRED EXACT CLIENT CREDIT HIDDEN OR INSERTED ELEGANTLY */}
          <p>
            With Power & Grace —{" "}
            <span className="text-slate-500 font-semibold font-mono tracking-wider">
              website developed by{" "}
              <a 
                href="http://otilekdigitals.com.ng" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-emerald-400 font-extrabold hover:text-amber-400 hover:underline transition-colors ml-1"
              >
                Otilek Digitals
              </a>
            </span>
          </p>
        </div>
      </footer>

      {/* FLOATING WHATSAPP CHAT WIDGET */}
      <WhatsAppChatWidget />

    </div>
  );
}
