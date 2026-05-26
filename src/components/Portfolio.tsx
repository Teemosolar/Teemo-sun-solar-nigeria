import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ChevronLeft, ChevronRight, MessageSquare, ArrowRight, Sun, Layers } from "lucide-react";

export default function Portfolio() {
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  // Premium, high-resolution action photos from Teemo-Sun at energy summits
  const images = [
    { url: "/portfolio_team.png", aspect: "aspect-[4/3]", label: "Exhibition Stand Coverage" },
    { url: "/portfolio_interview.png", aspect: "aspect-[4/3]", label: "National Media Interview Broadcast" },
    { url: "/portfolio_exhibit.png", aspect: "aspect-[4/3]", label: "Renewable Energy Exhibition Floor" },
    { url: "/portfolio_counter.png", aspect: "aspect-[4/3]", label: "Customer Service Consultation Desk" },
    { url: "/portfolio_businessday_real.png", aspect: "aspect-[4/3]", label: "BusinessDay Energy Conference Board" }
  ];

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeImageIndex !== null) {
      setActiveImageIndex((activeImageIndex + 1) % images.length);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeImageIndex !== null) {
      setActiveImageIndex((activeImageIndex - 1 + images.length) % images.length);
    }
  };

  const handleWhatsAppQuote = (label: string) => {
    const formattedMsg = `Hello Teemo-Sun Solar Nigeria, I am looking at your premium portfolio image showcasing: "${label}". I would like to consult with an engineer regarding a custom hybrid solar system configuration for my property.`;
    const encoded = encodeURIComponent(formattedMsg);
    window.open(`https://wa.me/2347064519576?text=${encoded}`, "_blank", "noreferrer");
  };

  // Stagger wrapper settings for container
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12
      }
    }
  };

  // Card slide-up settings
  const itemVariants = {
    hidden: { y: 24, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 80, damping: 15 } }
  };

  return (
    <div className="w-full flex flex-col bg-slate-950 text-white min-h-screen">
      
      {/* 1. SEAMLESS GLASSMOPRHIC BANNER */}
      <section className="relative py-20 px-4 overflow-hidden border-b border-white/5 bg-gradient-to-b from-[#062316] to-[#010a06]">
        {/* Ambient radial blur glowing orb */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto text-center relative z-10 space-y-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-400/20 text-emerald-300 backdrop-blur-md text-xs font-mono font-bold tracking-widest uppercase"
          >
            <Layers className="w-3.5 h-3.5 text-emerald-400" />
            <span>Interactive Media Showcase</span>
          </motion.div>
          
          <motion.h1 
            initial={{ y: 15, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="font-sans font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight text-white leading-none"
          >
            Proof in Action
          </motion.h1>
          
          <motion.p 
            initial={{ y: 15, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="font-sans text-gray-400 text-xs sm:text-sm md:text-base max-w-2xl mx-auto leading-relaxed"
          >
            Tap on any photo below to inspect our premium high-fidelity expo layouts, elite national energy roundtables, live TV interviews, and live diagnostic simulators.
          </motion.p>
        </div>
      </section>

      {/* 2. PURE IMAGE GRID - NO CAPTIONS, NO TEXT */}
      <section className="py-20 px-4 max-w-7xl mx-auto w-full relative z-10 flex-grow">
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 items-stretch justify-center"
        >
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.025, 
                boxShadow: "0 0 40px -5px rgba(16, 185, 129, 0.25)" 
              }}
              whileTap={{ scale: 0.985 }}
              onClick={() => setActiveImageIndex(idx)}
              className="group cursor-pointer overflow-hidden rounded-2xl md:rounded-3xl border border-white/10 bg-black relative flex flex-col justify-center items-center overflow-hidden aspect-[4/3] shadow-lg transition-all duration-300 select-none"
            >
              {/* Premium overlay lines decoration inside cards */}
              <div className="absolute inset-0 bg-transparent group-hover:bg-emerald-950/20 z-10 transition-colors duration-300" />
              
              <img 
                src={img.url} 
                alt={img.label} 
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                referrerPolicy="no-referrer"
              />

              {/* Seamless glass corner detail */}
              <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-md border border-white/10 text-emerald-300 p-2.5 rounded-xl z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <ArrowRight className="w-4 h-4" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* 3. POST-GRID DIRECT WHATSAPP CONVERSION BLOCK */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 p-8 sm:p-12 rounded-3xl border border-emerald-500/20 bg-gradient-to-b from-[#041d11] to-[#010905] text-center space-y-6 relative overflow-hidden shadow-xl"
        >
          <div className="absolute top-0 right-0 w-44 h-44 bg-emerald-500/5 rounded-full blur-[80px]" />
          <div className="relative z-10 space-y-3">
            <h3 className="font-sans font-extrabold text-2xl tracking-tight text-white sm:text-3xl">
              Ready to Secure Your Clean Power?
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
              We compile your energy parameters digitally. Chat directly with lead solar engineers to schedule your bespoke, on-site load evaluation diagnostic.
            </p>
            <div className="pt-4 flex justify-center">
              <a 
                href="https://wa.me/2347064519576?text=Hello%20Teemo-Sun%20Solar%2C%20I%20have%20viewed%20your%20premium%20expo%20and%20public%20action%20images%2C%20and%20I%20would%20like%20to%20request%20a%20site%20load%20profiling%20quote%20for%20my%20building."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm sm:text-base tracking-wide shadow-lg hover:shadow-emerald-500/10 cursor-pointer transition-all hover:-translate-y-0.5"
              >
                Inquire With Engineering Desk
                <MessageSquare className="w-4.5 h-4.5 text-amber-300" />
              </a>
            </div>
          </div>
        </motion.div>

      </section>

      {/* 4. PREMIUM FULLSCREEN LIGHTBOX DIALOG */}
      <AnimatePresence>
        {activeImageIndex !== null && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveImageIndex(null)}
            className="fixed inset-0 bg-black/95 z-[9999] flex flex-col justify-center items-center p-4 backdrop-blur-md select-none"
          >
            {/* Top Bar inside modal */}
            <div className="absolute top-0 left-0 right-0 p-5 flex justify-between items-center z-20">
              <span className="font-mono text-xs text-gray-400">
                {activeImageIndex + 1} / {images.length}
              </span>
              <button 
                onClick={() => setActiveImageIndex(null)}
                className="p-2 sm:p-2.5 bg-white/10 hover:bg-white/20 text-white rounded-full border border-white/20 transition-all cursor-pointer"
                aria-label="Close Lightbox"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>

            {/* Core Sliding Window Area */}
            <div className="relative max-w-5xl w-full flex justify-center items-center my-10 max-h-[80vh]">
              
              {/* Left Arrow Button */}
              <button 
                onClick={handlePrev}
                className="absolute left-2 sm:left-4 p-2 sm:p-3 bg-white/10 hover:bg-white/20 text-white rounded-full border border-white/20 transition-all z-20 cursor-pointer active:scale-95"
                aria-label="Previous Image"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              {/* Main Expanded Image Frame */}
              <motion.div 
                key={activeImageIndex}
                initial={{ opacity: 0, scale: 0.93 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.93 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="w-full max-h-[75vh] flex justify-center items-center overflow-hidden px-14"
                onClick={(e) => e.stopPropagation()}
              >
                <img 
                  src={images[activeImageIndex].url} 
                  alt={images[activeImageIndex].label} 
                  className="max-h-[70vh] w-auto max-w-full rounded-2xl object-contain shadow-2xl border border-white/10"
                  referrerPolicy="no-referrer"
                />
              </motion.div>

              {/* Right Arrow Button */}
              <button 
                onClick={handleNext}
                className="absolute right-2 sm:right-4 p-2 sm:p-3 bg-white/10 hover:bg-white/20 text-white rounded-full border border-white/20 transition-all z-20 cursor-pointer active:scale-95"
                aria-label="Next Image"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>

            {/* Bottom Floating Caption/CTA Bar of Lightbox */}
            <div 
              onClick={(e) => e.stopPropagation()}
              className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/80 to-transparent flex flex-col items-center gap-3 z-20 text-center"
            >
              <button
                onClick={() => handleWhatsAppQuote(images[activeImageIndex].label)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm tracking-wide transition-all shadow cursor-pointer"
              >
                Inquire Regarding This Custom Setup
                <ArrowRight className="w-4 h-4 text-amber-300" />
              </button>
            </div>

          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
