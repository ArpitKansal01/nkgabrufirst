"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, SlidersHorizontal, Eye } from "lucide-react";

export default function FilmBeforeAfter() {
  const [sliderPos, setSliderPos] = useState(50);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const percent = (x / rect.width) * 100;
    setSliderPos(percent);
  };

  return (
    <section className="relative py-24 sm:py-32 bg-[#080808] border-b border-[#D4AF37]/15 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#D4AF37]/30 bg-[#121212] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#F5D88A]" />
            <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-[#F5D88A]">
              The Cinematic Grade
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#F5F2EA] tracking-wide mb-3">
            EVERY FRAME, A <span className="text-gold-gradient font-bold italic">REDISCOVERY.</span>
          </h2>

          <p className="font-sans text-xs sm:text-sm text-[#A5A5A5] leading-relaxed max-w-xl mx-auto">
            Drag or hover across the frame to watch flat camera LOG profiles bloom into our signature warm champagne &amp; rich obsidian color grade.
          </p>
        </div>

        {/* Interactive Comparison Canvas */}
        <div className="max-w-5xl mx-auto">
          <div
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="relative h-[380px] sm:h-[520px] md:h-[600px] rounded-3xl overflow-hidden border border-[#D4AF37]/40 shadow-[0_25px_70px_rgba(0,0,0,0.9)] cursor-ew-resize select-none group"
          >
            {/* Layer 1: Final Graded Master (Right / Full background) */}
            <div className="absolute inset-0">
              <Image
                src="/images/portfolio/prewedding_shoot.jpg"
                alt="Graded Master Cinema Frame - NK Gabru"
                fill
                priority
                sizes="(max-width: 1200px) 100vw, 1200px"
                className="object-cover object-center filter saturate-[1.15] contrast-[1.08] brightness-[0.95]"
              />
              <div className="absolute top-6 right-6 px-4 py-1.5 rounded-full bg-black/75 backdrop-blur-md border border-[#D4AF37]/50 text-xs font-mono tracking-widest text-[#F5D88A] flex items-center gap-2 shadow-lg">
                <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>MASTER GRADE (12-BIT GOLDEN LUT)</span>
              </div>
            </div>

            {/* Layer 2: Raw Flat LOG Scan (Left clip) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
            >
              <Image
                src="/images/portfolio/prewedding_shoot.jpg"
                alt="Raw Camera Sensor LOG - NK Gabru"
                fill
                priority
                sizes="(max-width: 1200px) 100vw, 1200px"
                className="object-cover object-center filter saturate-[0.35] brightness-[1.12] contrast-[0.82] grayscale-[30%]"
              />
              <div className="absolute top-6 left-6 px-4 py-1.5 rounded-full bg-black/75 backdrop-blur-md border border-white/20 text-xs font-mono tracking-widest text-[#A5A5A5] flex items-center gap-2 shadow-lg">
                <Eye className="w-3.5 h-3.5 text-[#A5A5A5]" />
                <span>RAW CAMERA LOG (UNPROCESSED)</span>
              </div>
            </div>

            {/* Interactive Divider Line with Golden Handle */}
            <div
              className="absolute top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#FFF2B2] via-[#D4AF37] to-[#AA771C] shadow-[0_0_15px_#D4AF37]"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#101010] border-2 border-[#D4AF37] shadow-[0_0_20px_rgba(212,175,55,0.7)] flex items-center justify-center text-[#F5D88A]">
                <SlidersHorizontal className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
            </div>

            {/* Bottom Caption Pill */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-5 py-2 rounded-full bg-black/85 backdrop-blur-md border border-[#D4AF37]/30 text-xs text-[#F5F2EA] flex items-center gap-2 shadow-2xl">
              <span className="text-[#D4AF37] font-semibold">PRE-WEDDING DESTINATION SHOOT</span>
              <span className="text-white/30">•</span>
              <span className="text-[#A5A5A5]">Udaipur Palace Sunset</span>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between text-xs text-[#A5A5A5] px-2 font-mono">
            <span>← Slide left for Flat Camera Sensor</span>
            <span>Slide right for Film Emulation →</span>
          </div>
        </div>
      </div>
    </section>
  );
}
