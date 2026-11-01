"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, Calendar } from "lucide-react";

export default function CinematicStatement() {
  return (
    <section className="relative w-full py-36 sm:py-48 flex items-center justify-center overflow-hidden bg-[#050505]">
      {/* Immersive Full-Screen Background Image with Parallax Vibe */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/portfolio/drone_palace.jpg"
          alt="NK Gabru Photography - Illuminated Grand Palace Venue Night"
          fill
          sizes="100vw"
          className="object-cover object-center filter brightness-[0.45] contrast-[1.15] scale-105"
        />

        {/* Deep Black Gradients Top & Bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-[#050505]" />
        <div className="absolute inset-0 bg-radial-[circle_at_center,transparent_0%,rgba(5,5,5,0.85)_100%]" />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#D4AF37]/40 bg-black/60 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-[#F5D88A]" />
            <span className="text-[11px] uppercase font-mono tracking-[0.25em] text-[#F5D88A]">
              Capture • Create • Cherish
            </span>
          </div>

          {/* Heading */}
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-light text-[#F5F2EA] tracking-wide leading-tight">
            EVERY PICTURE HAS A STORY. <br />
            <span className="text-gold-gradient font-bold italic">LET US TELL YOURS.</span>
          </h2>

          {/* Supporting Text */}
          <p className="font-sans text-sm sm:text-lg text-[#F5F2EA]/85 max-w-2xl mx-auto font-light leading-relaxed">
            From the first click to the final frame, we make every moment unforgettable.
          </p>

          {/* Animated Gold CTA Button */}
          <div className="pt-6">
            <Link
              href="#contact"
              className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-gradient-to-r from-[#FCEBA4] via-[#D4AF37] to-[#F5D88A] text-[#050505] text-xs sm:text-sm font-bold uppercase tracking-[0.22em] shadow-[0_0_30px_rgba(212,175,55,0.4)] hover:shadow-[0_0_50px_rgba(212,175,55,0.8)] hover:scale-105 active:scale-95 transition-all duration-300 group"
            >
              <Calendar className="w-4 h-4 text-[#050505]" />
              <span>LET&apos;S CREATE SOMETHING BEAUTIFUL</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
