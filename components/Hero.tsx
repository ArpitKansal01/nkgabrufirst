"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, Phone, MessageSquare, ChevronDown, Award } from "lucide-react";
import InstagramIcon from "@/components/InstagramIcon";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Subtle floating gold particles canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    const particleCount = 45;
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 2 + 0.6,
      color: Math.random() > 0.4 ? "#D4AF37" : "#F5D88A",
      alpha: Math.random() * 0.6 + 0.2,
      speedX: (Math.random() - 0.5) * 0.35,
      speedY: -Math.random() * 0.45 - 0.1,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.y < 0) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.shadowBlur = 8;
        ctx.shadowColor = "#D4AF37";
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative w-full h-screen min-h-[680px] flex items-center justify-center overflow-hidden bg-[#050505]"
    >
      {/* Background Image with Slow Cinematic Ken Burns Effect */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/hero_bg.jpg"
          alt="NK Gabru Photography - Royal Indian Wedding Heritage Shoot"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center filter brightness-[0.72] contrast-[1.08] scale-105 animate-[pulse_14s_ease-in-out_infinite]"
        />

        {/* Cinematic Vignette & Deep Black Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-black/75" />
        <div className="absolute inset-0 bg-radial-[circle_at_center,transparent_0%,rgba(5,5,5,0.85)_100%]" />
        
        {/* Subtle Warm Golden Ambient Light */}
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-b from-[#D4AF37]/15 to-transparent rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Floating Gold Particles Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-10 pointer-events-none"
        aria-hidden="true"
      />

      {/* Main Content Container */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center justify-center pt-16 sm:pt-20">
        {/* Studio Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#D4AF37]/35 bg-[#101010]/70 backdrop-blur-md mb-6 shadow-[0_0_15px_rgba(212,175,55,0.15)]"
        >
          <Award className="w-3.5 h-3.5 text-[#F5D88A]" />
          <span className="text-[11px] sm:text-xs uppercase font-sans tracking-[0.25em] text-[#F5D88A] font-medium">
            Faridabad&apos;s Premier Wedding & Cinematography Studio
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-ping" />
        </motion.div>

        {/* Brand Logo in Hero */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative w-64 sm:w-80 h-16 sm:h-20 mb-4"
        >
          <Image
            src="/images/logo/logo.svg"
            alt="NK Gabru Photography"
            fill
            className="object-contain filter drop-shadow-[0_4px_25px_rgba(212,175,55,0.35)]"
            priority
          />
        </motion.div>

        {/* Main Cinematic Heading with Stagger and Gold Shimmer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="space-y-1 sm:space-y-2 mb-6"
        >
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-[0.06em] text-[#F5F2EA] leading-tight">
            WE DON&apos;T JUST CAPTURE MOMENTS.
          </h1>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-[0.08em] leading-tight">
            <span className="text-gold-gradient relative inline-block">
              WE CREATE MEMORIES.
              <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#F5D88A] to-transparent opacity-80" />
            </span>
          </h2>
        </motion.div>

        {/* Supporting Subtext */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="font-sans text-sm sm:text-lg md:text-xl text-[#F5F2EA]/85 max-w-2xl font-light tracking-wide mb-8 sm:mb-10"
        >
          Every frame tells a story. Every moment becomes timeless.
        </motion.p>

        {/* Two Primary CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-10"
        >
          <Link
            href="#portfolio"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-[#FCEBA4] via-[#D4AF37] to-[#F5D88A] text-[#050505] text-xs sm:text-sm font-semibold uppercase tracking-[0.18em] shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:shadow-[0_0_35px_rgba(212,175,55,0.8)] hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-[#050505]" />
            <span>Explore Our Work</span>
          </Link>

          <Link
            href="#contact"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full border border-[#D4AF37]/50 bg-[#101010]/80 backdrop-blur-md text-[#F5F2EA] hover:text-[#F5D88A] hover:border-[#D4AF37] hover:bg-[#D4AF37]/10 text-xs sm:text-sm font-medium uppercase tracking-[0.18em] transition-all duration-300 flex items-center justify-center gap-2"
          >
            <span>Book Your Shoot</span>
          </Link>
        </motion.div>

        {/* Quick Contact Micro-Bar (Call / WhatsApp / Instagram) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs text-[#A5A5A5]"
        >
          <a
            href="tel:7053700761"
            className="flex items-center gap-1.5 hover:text-[#D4AF37] transition-colors py-1 px-3 rounded-full bg-black/40 border border-white/5 hover:border-[#D4AF37]/30"
          >
            <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>+91 70537 00761</span>
          </a>

          <a
            href="https://wa.me/917053700761?text=Hello%20NK%20Gabru%20Photography,%20I%20would%20like%20to%20inquire%20about%20booking%20a%20shoot."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-[#25D366] transition-colors py-1 px-3 rounded-full bg-black/40 border border-white/5 hover:border-[#25D366]/30"
          >
            <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
            <span>WhatsApp Inquiry</span>
          </a>

          <a
            href="https://www.instagram.com/nkgabruphotography?vrfl=MXUyeHlqdGdqcmRjeQ%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-[#E1306C] transition-colors py-1 px-3 rounded-full bg-black/40 border border-white/5 hover:border-[#E1306C]/30"
          >
            <InstagramIcon className="w-3.5 h-3.5 text-[#E1306C]" />
            <span>@nkgabruphotography</span>
          </a>
        </motion.div>
      </div>

      {/* Animated Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 pointer-events-none"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase text-[#D4AF37]/80 font-mono">
          SCROLL
        </span>
        <div className="w-[1.5px] h-10 bg-gradient-to-b from-[#D4AF37] via-[#D4AF37]/60 to-transparent relative overflow-hidden">
          <motion.div
            animate={{ y: [0, 40, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-full h-3 bg-[#FFF2B2] shadow-[0_0_8px_#FFF2B2]"
          />
        </div>
      </motion.div>
    </section>
  );
}
