import React, { useState } from "react";
import { Sun, Menu, X, Phone, ArrowUpRight } from "lucide-react";
import Logo from "./Logo";

interface HeaderProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
  scrollSection: string | null;
  setScrollSection: (section: string | null) => void;
}

export default function Header({ currentPage, setCurrentPage, setScrollSection }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", value: "home" },
    { label: "Our Services", value: "services" },
    { label: "Packages & Pricing", value: "services", targetSection: "packages-section" },
    { label: "Portfolio", value: "portfolio" },
    { label: "About Us", value: "about" },
    { label: "Contact Us", value: "contact" },
  ];

  const handleNavClick = (value: string, sectionId?: string) => {
    setCurrentPage(value);
    setMobileMenuOpen(false);
    
    if (sectionId) {
      setScrollSection(sectionId);
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    } else {
      setScrollSection(null);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-emerald-100 shadow-sm transition-all duration-300">
      {/* Top Notification Bar */}
      <div className="bg-[#0c5132] text-white text-[11px] md:text-xs py-1.5 px-4 font-mono">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-1">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
            <span>Powering Nigeria with Reliable, Sustainable Solar Energy Solutions</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              +234 7064519576
            </span>
            <span className="hidden md:inline">📍 Abeokuta | Lagos | Abuja | Kano</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center min-h-[5.5rem] py-3 gap-4">
          {/* Logo Section */}
          <div 
            onClick={() => handleNavClick("home")}
            className="flex items-center cursor-pointer group hover:opacity-95 transition-opacity max-w-[65%] sm:max-w-[50%] md:max-w-[40%]"
          >
            <Logo showMeta={true} variant="dark" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center lg:gap-8 gap-5">
            {navItems.map((item, idx) => {
              const isActive = currentPage === item.value && (!item.targetSection);
              return (
                <button
                  key={idx}
                  onClick={() => handleNavClick(item.value, item.targetSection)}
                  className={`relative font-sans text-sm font-semibold py-2 transition-colors duration-200 ${
                    isActive 
                      ? "text-[#0c5132]" 
                      : "text-gray-600 hover:text-[#0c5132]"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0c5132] rounded-full"></span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Action CTA & Mobile Trigger */}
          <div className="flex items-center gap-4">
            <a
              href="https://wa.me/2347064519576?text=Hello%20Teemo-Sun%20Solar%2C%20I'm%20visiting%20your%20website%20and%20want%20to%20request%20a%20solar%20consultation%20for%20my%20property."
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 px-4.5 py-2.5 rounded-full bg-[#0c5132] text-white text-xs font-bold hover:bg-[#0a4027] shadow-sm hover:shadow transition-all duration-200"
            >
              Get Free Quote
              <ArrowUpRight className="w-3.5 h-3.5 text-amber-300" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-emerald-800 hover:bg-emerald-50 focus:outline-none md:hidden transition-colors"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-emerald-50 py-4 px-4 shadow-inner">
          <div className="flex flex-col gap-2">
            {navItems.map((item, idx) => {
              const isActive = currentPage === item.value;
              return (
                <button
                  key={idx}
                  onClick={() => handleNavClick(item.value, item.targetSection)}
                  className={`flex items-center justify-between px-4 py-3 rounded-lg text-sm font-semibold transition-all ${
                    isActive 
                      ? "bg-emerald-50 text-[#0c5132]" 
                      : "text-gray-600 hover:bg-slate-50 hover:text-[#0c5132]"
                  }`}
                >
                  <span>{item.label}</span>
                  {item.targetSection && (
                    <span className="text-[10px] bg-amber-150 text-amber-800 font-mono py-0.5 px-1.5 rounded-full">
                      Priced
                    </span>
                  )}
                </button>
              );
            })}
            <a
              href="https://wa.me/2347064519576?text=Hello%20Teemo-Sun%20Solar%2C%20I'm%20visiting%20your%20website%20and%20want%20to%20request%20a%20solar%20consultation%20for%20my%20property."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full mt-3 flex items-center justify-center gap-2 py-3 rounded-lg bg-[#0c5132] text-white font-bold text-sm shadow-sm hover:bg-[#0a4027]"
            >
              Consult via WhatsApp Chat
              <ArrowUpRight className="w-4 h-4 text-amber-300" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
