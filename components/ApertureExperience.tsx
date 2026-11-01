"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Camera, Sparkles, Sliders, Play, Volume2, Info } from "lucide-react";
import confetti from "canvas-confetti";

export default function ApertureExperience() {
  const [fStop, setFStop] = useState<number>(2.8);
  const [isShutterSnapping, setIsShutterSnapping] = useState<boolean>(false);
  const [shutterCount, setShutterCount] = useState<number>(24);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Mouse tilt effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  // Trigger interactive camera shutter
  const triggerShutter = () => {
    if (isShutterSnapping) return;
    setIsShutterSnapping(true);
    setShutterCount((prev) => prev + 1);

    // Audio simulation using Web Audio API synthesis
    try {
      const audioCtx = new (window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(800, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(120, audioCtx.currentTime + 0.08);
      gain.gain.setValueAtTime(0.3, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.08);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.09);
    } catch {
      // Audio not permitted or supported
    }

    // Golden sparks confetti
    if (typeof window !== "undefined") {
      confetti({
        particleCount: 30,
        spread: 60,
        origin: { y: 0.6 },
        colors: ["#D4AF37", "#F5D88A", "#AA771C", "#FFFFFF"],
        disableForReducedMotion: true,
      });
    }

    setTimeout(() => {
      setIsShutterSnapping(false);
    }, 280);
  };

  // Calculate aperture blade scale based on f-stop (f/1.2 = open, f/16 = closed)
  // Inverse scale: lower f-stop means wider opening
  const openingRatio = Math.max(0.18, Math.min(0.9, 1 - (fStop - 1.2) / (16 - 1.2)));

  return (
    <section id="experience" className="relative py-28 bg-[#070707] overflow-hidden border-y border-[#D4AF37]/15">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D4AF37]/8 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#D4AF37]/30 bg-[#121212] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#F5D88A]" />
            <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-[#F5D88A]">
              Interactive 3D Craftsmanship
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#F5F2EA] tracking-wide mb-4">
            THE ART OF THE <span className="text-gold-gradient">GOLDEN APERTURE</span>
          </h2>

          <p className="font-sans text-sm sm:text-base text-[#A5A5A5] leading-relaxed">
            Every millimeter of focal depth shapes your story. Interact with our precision optical simulation to experience how our cinema lenses carve light, depth, and gold bokeh into timeless imagery.
          </p>
        </div>

        {/* Interactive Experience Grid */}
        <div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#101010]/80 border border-[#D4AF37]/25 rounded-3xl p-6 sm:p-10 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.8)]"
        >
          {/* Left Column: Interactive 3D Aperture Visualizer */}
          <div className="lg:col-span-7 flex flex-col items-center justify-center relative min-h-[360px] sm:min-h-[440px]">
            {/* Shutter Flash Overlay */}
            {isShutterSnapping && (
              <div className="absolute inset-0 bg-[#FFF2B2]/40 rounded-2xl z-30 pointer-events-none transition-opacity duration-150 animate-pulse" />
            )}

            {/* 3D Tilting Camera Aperture Chamber */}
            <motion.div
              style={{
                rotateX: mousePos.y * -20,
                rotateY: mousePos.x * 20,
                transformPerspective: 800,
              }}
              transition={{ type: "spring", damping: 15, stiffness: 120 }}
              className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full flex items-center justify-center p-2 shadow-[0_0_60px_rgba(212,175,55,0.25)] select-none cursor-pointer"
              onClick={triggerShutter}
              title="Click to trigger shutter"
            >
              {/* Outer Metallic Gold Barrel */}
              <div className="absolute inset-0 rounded-full border-4 border-[#D4AF37] bg-gradient-to-br from-[#1b170e] via-[#080808] to-[#120f08] shadow-[inset_0_0_30px_rgba(212,175,55,0.4)]" />

              {/* Gold Lens Markings Ring */}
              <div className="absolute inset-3 rounded-full border border-dashed border-[#F5D88A]/40 flex items-center justify-center" />

              {/* Actual Aperture Texture Layer */}
              <div className="relative w-48 h-48 sm:w-60 sm:h-60 rounded-full overflow-hidden flex items-center justify-center">
                <Image
                  src="/images/camera_aperture.jpg"
                  alt="Golden Camera Aperture"
                  fill
                  className="object-contain filter contrast-[1.1] transition-transform duration-500"
                  style={{
                    transform: `scale(${1 + mousePos.x * 0.1}) rotate(${fStop * 12}deg)`,
                  }}
                />

                {/* Simulated Dynamic Blade Iris Aperture Center Hole */}
                <div
                  className="relative z-10 rounded-full bg-[#050505] shadow-[inset_0_0_20px_#000] border border-[#D4AF37]/60 transition-all duration-300 ease-out flex items-center justify-center overflow-hidden"
                  style={{
                    width: `${openingRatio * 160}px`,
                    height: `${openingRatio * 160}px`,
                  }}
                >
                  {/* Inside Iris: Optical Lens Glimmer */}
                  <div className="w-full h-full bg-gradient-to-tr from-[#050505] via-[#D4AF37]/15 to-transparent relative">
                    <div className="absolute top-2 left-2 w-3 h-3 rounded-full bg-white/25 blur-xs" />
                  </div>
                </div>
              </div>

              {/* Lens Specification Engraving */}
              <div className="absolute -bottom-3 px-3 py-1 rounded-full bg-[#0a0a0a] border border-[#D4AF37]/50 text-[10px] font-mono tracking-widest text-[#F5D88A]">
                COOKI OPTICS 50mm • T{fStop.toFixed(1)}
              </div>
            </motion.div>

            {/* Click to Snap Prompt */}
            <div className="mt-8 flex items-center gap-2 text-xs text-[#A5A5A5]">
              <Volume2 className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Tap the lens or click &quot;Trigger Shutter&quot; to test mechanical capture</span>
            </div>
          </div>

          {/* Right Column: Precision Optical Controls & Feedback */}
          <div className="lg:col-span-5 space-y-6">
            <div className="border-b border-[#D4AF37]/20 pb-4">
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#D4AF37]">
                Cinema Lens Control
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#F5F2EA] mt-1">
                Aperture &amp; Depth Simulation
              </h3>
            </div>

            {/* F-Stop Control Slider */}
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="text-[#A5A5A5] flex items-center gap-1.5">
                  <Sliders className="w-3.5 h-3.5 text-[#D4AF37]" />
                  Aperture Stop (f/number)
                </span>
                <span className="font-mono text-base font-bold text-[#F5D88A] bg-[#1a1a1a] px-2.5 py-0.5 rounded border border-[#D4AF37]/30">
                  f / {fStop.toFixed(1)}
                </span>
              </div>

              <input
                type="range"
                min="1.2"
                max="16"
                step="0.2"
                value={fStop}
                onChange={(e) => setFStop(parseFloat(e.target.value))}
                className="w-full h-2 bg-[#1a1a1a] rounded-lg appearance-none cursor-pointer accent-[#D4AF37]"
                aria-label="Aperture f-stop slider"
              />

              <div className="flex justify-between text-[10px] font-mono text-[#A5A5A5]">
                <span>f/1.2 (Ultra Bokeh)</span>
                <span>f/5.6 (Classic Portrait)</span>
                <span>f/16 (Deep Sharpness)</span>
              </div>
            </div>

            {/* Real-time Optical Description */}
            <div className="p-4 rounded-xl bg-[#0a0a0a] border border-[#D4AF37]/20 space-y-2">
              <div className="flex items-center gap-2 text-xs font-medium text-[#F5D88A]">
                <Info className="w-4 h-4 text-[#D4AF37]" />
                <span>
                  {fStop < 2.8
                    ? "Dreamlike Creamy Bokeh (Ideal for Bridal Close-ups)"
                    : fStop < 8
                    ? "Balanced Subject Isolation (Ideal for Couple Portraits)"
                    : "Crisp Architectural Sharpness (Ideal for Grand Venues)"}
                </span>
              </div>
              <p className="text-xs text-[#A5A5A5] leading-relaxed">
                {fStop < 2.8
                  ? "At wide apertures, background highlights melt into golden circular orbs, drawing absolute focus to eye tears, delicate jewellery, and raw authentic expressions."
                  : fStop < 8
                  ? "Flawlessly balances gentle skin softening with razor-sharp attire embroidery, sherwani texture, and royal palace arches in graceful harmony."
                  : "Provides expansive depth of field, keeping hundreds of wedding guests, twinkling fairy light arches, and heritage palace fountains in pristine clarity."}
              </p>
            </div>

            {/* Shutter Trigger CTA Button */}
            <div className="pt-2 flex items-center gap-4">
              <button
                onClick={triggerShutter}
                disabled={isShutterSnapping}
                className="flex-1 py-3.5 px-6 rounded-full bg-gradient-to-r from-[#FCEBA4] via-[#D4AF37] to-[#F5D88A] text-[#050505] text-xs font-bold uppercase tracking-[0.2em] shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:shadow-[0_0_35px_rgba(212,175,55,0.7)] active:scale-95 transition-all flex items-center justify-center gap-2"
              >
                <Camera className="w-4 h-4" />
                <span>Trigger Shutter</span>
              </button>

              <div className="px-4 py-2.5 rounded-full bg-[#181818] border border-white/10 text-right">
                <span className="block text-[9px] uppercase font-mono text-[#A5A5A5]">Shots Fired</span>
                <span className="font-mono text-xs font-bold text-[#F5D88A]">{shutterCount} Frames</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
