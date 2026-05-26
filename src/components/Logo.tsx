import React from "react";

interface LogoProps {
  className?: string;
  showMeta?: boolean;
  variant?: "light" | "dark";
  align?: "left" | "center" | "responsive";
}

export default function Logo({ className = "", showMeta = true, variant = "dark", align = "left" }: LogoProps) {
  const isDark = variant === "dark";

  // Responsive alignment styling
  const containerAlign = align === "responsive" 
    ? "items-center md:items-start text-center md:text-left" 
    : align === "center" 
      ? "items-center text-center" 
      : "items-start text-left";

  const rowAlign = align === "responsive"
    ? "justify-center md:justify-start"
    : align === "center"
      ? "justify-center"
      : "justify-start";

  const textAlign = align === "responsive"
    ? "text-center md:text-left items-center md:items-start"
    : align === "center"
      ? "text-center items-center"
      : "text-left items-start";

  return (
    <div className={`flex flex-col select-none max-w-full ${containerAlign} ${className}`}>
      {/* Main Row: Logo Icon & Text Info */}
      <div className={`flex items-center gap-2 sm:gap-3.5 pb-2 w-full ${rowAlign}`}>
        {/* EXACT ACCURATE VECTOR ICON FROM REAL LOGO */}
        <svg
          viewBox="0 0 100 70"
          className="w-10 h-7 sm:w-13 sm:h-10 md:w-16 md:h-12 flex-shrink-0"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Rising Yellow Sun Rays */}
          <g fill="#F5A623">
            <polygon points="50,4 47,15 53,15" />
            <polygon points="38,8 39,18 44,14" />
            <polygon points="28,15 32,23 35,18" />
            <polygon points="21,26 27,31 29,25" />
            <polygon points="18,39 26,40 26,34" />
            
            <polygon points="62,8 61,18 56,14" />
            <polygon points="72,15 68,23 65,18" />
            <polygon points="79,26 73,31 71,25" />
            <polygon points="82,39 74,40 74,34" />
          </g>
          
          {/* Sun Central Semi-Circle */}
          <path
            d="M24 40 C 24 23, 76 23, 76 40 Z"
            fill="#F5A623"
          />

          {/* Green Ground Splines */}
          <path
            d="M10 56 Q 30 46 80 50 L 76 58 Q 30 52 12 60 Z"
            fill="#22c55e"
          />
          <path
            d="M10 54 Q 30 44 80 48 L 78 52 Q 30 48 10 56 Z"
            fill="#15803d"
          />

          {/* Blue Solar PV Cells Grid with 3D slope perspective */}
          <path
            d="M14 53 L 86 39 L 81 55 L 18 61 Z"
            fill="#0B4B7B"
            stroke="#FFFFFF"
            strokeWidth="0.8"
          />
          {/* Panels grid wire lines */}
          <line x1="26" y1="51.5" x2="31" y2="57.5" stroke="#FFFFFF" strokeWidth="0.6" />
          <line x1="38.5" y1="49.5" x2="44" y2="55.5" stroke="#FFFFFF" strokeWidth="0.6" />
          <line x1="51.5" y1="47.5" x2="57" y2="53" stroke="#FFFFFF" strokeWidth="0.6" />
          <line x1="64.5" y1="45" x2="70" y2="50.5" stroke="#FFFFFF" strokeWidth="0.6" />
          <line x1="77.5" y1="42.5" x2="78.5" y2="47" stroke="#FFFFFF" strokeWidth="0.6" />
          
          <path d="M15.5 56.5 L 83.5 44" stroke="#FFFFFF" strokeWidth="0.6" fill="none" />
          <path d="M17 59 L 82 48" stroke="#FFFFFF" strokeWidth="0.6" fill="none" />
        </svg>

        {/* Brand Text & Metadata columns */}
        <div className={`flex flex-col justify-center ${textAlign}`}>
          <h1 className={`font-sans font-black text-[11px] sm:text-[13px] md:text-base lg:text-lg leading-none tracking-tight whitespace-nowrap ${
            isDark ? "text-[#156e39]" : "text-white"
          }`}>
            TEEMO-SUN SOLAR NIGERIA
          </h1>
          {showMeta && (
            <div className="flex flex-col mt-0.5 sm:mt-1 font-mono text-[7px] sm:text-[8px] md:text-[9px] lg:text-[10px] uppercase leading-tight font-bold tracking-widest">
              <p className={isDark ? "text-emerald-700/80" : "text-[#fbbf24] animate-pulse"}>
                Powering a Brighter Tomorrow
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Solid green underline from image banner, spanning the component width */}
      <div className={`h-[1.5px] sm:h-[2px] w-full ${isDark ? "bg-[#156e39]" : "bg-[#22c55e]"}`} />
    </div>
  );
}
