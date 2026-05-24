import React, { useState } from "react";
import { MessageCircle, X, Send, Sun, Check } from "lucide-react";

export default function WhatsAppChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [activePresetText, setActivePresetText] = useState("");

  const presetQueries = [
    { label: "🔋 Lithium Packages Price", text: "Hello Teemo-Sun Solar! I am interested in your Lithium Battery package options. Please send me pricing details and available capacities." },
    { label: "📋 Book Free Property Audit", text: "Hello Teemo-Sun Solar! I would like to book a free technical site inspection and energy audit for my home/office." },
    { label: "🎓 Solar Training Academy", text: "Hello Teemo-Sun Solar! I want to enroll in the next hands-on training workshop at Teemo-Sun Solar Institute Abeokuta." },
    { label: "⚡ Request System Upgrade", text: "Hello Teemo-Sun Solar! I want to upgrade my existing inverter system to include long-life Lithium-Iron batteries." }
  ];

  const handleLaunchWhatsApp = (textOption?: string) => {
    const textToSend = textOption || activePresetText || "Hello Teemo-Sun Solar Nigeria! I want to inquire about your renewable energy systems and installation services.";
    const encoded = encodeURIComponent(textToSend);
    window.open(`https://wa.me/2347064519576?text=${encoded}`, "_blank", "noreferrer");
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      
      {/* 1. FLOATING CHAT PANEL */}
      {isOpen && (
        <div className="bg-white rounded-2xl shadow-2xl border border-emerald-100 max-w-sm w-[340px] overflow-hidden mb-4 transition-all duration-300 transform scale-100 translate-y-0 text-left">
          
          {/* Header */}
          <div className="bg-[#0c5132] text-white p-4.5 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
                <Sun className="w-6 h-6 text-amber-300 animate-spin-slow" />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-400 rounded-full border-2 border-[#0c5132]"></span>
              </div>
              <div>
                <h4 className="font-sans font-extrabold text-sm tracking-tight leading-none">Teemo-Sun Engineering</h4>
                <p className="text-[10px] text-emerald-200 mt-1 font-semibold">Online & ready to assist</p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-full hover:bg-white/10 text-white/80 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Interactive Chat Board */}
          <div className="p-4 bg-slate-50 space-y-3.5 max-h-[310px] overflow-y-auto">
            
            {/* Operator greeting card */}
            <div className="bg-white p-3 rounded-xl border border-slate-100 max-w-[85%] text-xs shadow-sm shadow-slate-100/50">
              <p className="font-medium text-gray-700 leading-relaxed">
                Hello there! Welcome to <span className="font-bold text-[#0c5132]">Teemo-Sun Solar Nigeria</span>. ☀️
              </p>
              <p className="text-gray-500 mt-1.5 leading-relaxed font-semibold">
                How can we secure constant, reliable power for your home or business today? Please choose a customized inquiry below:
              </p>
            </div>

            {/* Subtitle Preset queries listing */}
            <div className="space-y-1.5 pt-1.5">
              <p className="font-mono text-[9px] uppercase tracking-wider font-extrabold text-[#0c5132]">Select Quick Message Template:</p>
              <div className="flex flex-col gap-1.5">
                {presetQueries.map((q, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setActivePresetText(q.text);
                      handleLaunchWhatsApp(q.text);
                    }}
                    className="w-full text-left p-2 rounded-lg border border-emerald-100 bg-white hover:bg-emerald-50 text-[11px] font-bold text-gray-700 hover:border-emerald-500 transition-all shadow-sm"
                  >
                    {q.label}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Custom user message input footer */}
          <div className="p-3 border-t border-slate-100 flex gap-2 bg-white">
            <input 
              type="text" 
              placeholder="Type your own custom message here..." 
              value={activePresetText}
              onChange={(e) => setActivePresetText(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleLaunchWhatsApp();
              }}
              className="flex-grow px-3 py-2 rounded-lg border border-gray-200 text-xs focus:outline-none focus:ring-2 focus:ring-[#0c5132] focus:border-transparent font-medium"
            />
            <button
              onClick={() => handleLaunchWhatsApp()}
              className="p-2.5 rounded-lg bg-[#0c5132] hover:bg-emerald-800 text-white transition-colors"
              title="Launch WhatsApp Draft"
            >
              <Send className="w-4 h-4 text-amber-300" />
            </button>
          </div>

        </div>
      )}

      {/* 2. PERSISTENT FLOATING BUTTON TRIGGER */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-[#0c5132] text-white hover:bg-[#0a4027] shadow-2xl hover:shadow-emerald-500/20 flex items-center justify-center transition-all duration-300 transform hover:scale-105 relative group border-2 border-white/20"
        title="Chat on WhatsApp"
      >
        <span className="absolute inset-0 rounded-full bg-emerald-500/10 animate-ping -z-10"></span>
        <MessageCircle className="w-7 h-7 text-amber-300 group-hover:rotate-6 transition-transform fill-[#0c5132]" />
        
        {/* Active badge */}
        <span className="absolute top-0.5 right-0.5 w-3 h-3 bg-red-500 rounded-full border border-white animate-pulse"></span>
      </button>

    </div>
  );
}
