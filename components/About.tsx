"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Camera, Film, Sparkles, MapPin, CheckCircle2 } from "lucide-react";

const STATS = [
  { value: "12+", label: "Years of Craft", sub: "Since 2014" },
  { value: "850+", label: "Weddings & Shoots", sub: "Cherished Memories" },
  { value: "50k+", label: "Master Frames", sub: "Delivered in High-Res" },
  { value: "100%", label: "Client Delight", sub: "5-Star Reputation" },
];

const HIGHLIGHTS = [
  "Mastery over candid intimacy & grand royal scale",
  "Hollywood-standard cinematic color grading & 4K delivery",
  "High-end cinema rigs (RED / ARRI / Sony FX) with anamorphic lenses",
  "Licensed drone pilots capturing majestic aerial views",
];

export default function About() {
  return (
    <section id="about" className="relative py-28 sm:py-36 bg-[#0a0a0a] overflow-hidden">
      {/* Background Subtle Gradient & Light */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#D4AF37]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[400px] h-[400px] bg-[#D4AF37]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Eyebrow Label */}
        <div className="flex items-center gap-3 mb-4">
          <span className="w-10 h-[1px] bg-[#D4AF37]" />
          <span className="text-xs uppercase tracking-[0.3em] text-[#D4AF37] font-medium">
            Brand Story & Philosophy
          </span>
        </div>

        {/* Section Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 sm:mb-20"
        >
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-[#F5F2EA] tracking-wide leading-tight max-w-4xl">
            YOUR MOMENTS. OUR LENS.{" "}
            <span className="text-gold-gradient font-bold italic">FOREVER.</span>
          </h2>
        </motion.div>

        {/* Split Screen Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Brand Story Narrative */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 space-y-6"
          >
            <p className="font-serif text-xl sm:text-2xl text-[#F5D88A] font-normal leading-relaxed italic">
              &ldquo;At NK Gabru Photography, we believe every moment deserves to be remembered beautifully. From weddings and celebrations to professional portfolios, we transform real emotions into timeless visual stories.&rdquo;
            </p>

            <p className="font-sans text-sm sm:text-base text-[#A5A5A5] leading-relaxed">
              Based at <strong className="text-[#F5F2EA] font-medium">Varun Tower, Sector 20B, Ajronda Chowk, Faridabad</strong>, our studio blends cinematic grandeur with delicate candid sensibility. We don&apos;t just ask you to pose; we craft an atmosphere where authenticity unfolds naturally, capturing tears of joy, whispered promises, and royal splendor with pristine artistry.
            </p>

            {/* Feature Bullet Points */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {HIGHLIGHTS.map((item, index) => (
                <div key={index} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-[#F5F2EA]/90">{item}</span>
                </div>
              ))}
            </div>

            {/* Studio Location Badge & CTA */}
            <div className="pt-6 flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#161616] border border-[#D4AF37]/25 text-xs text-[#F5F2EA]">
                <MapPin className="w-4 h-4 text-[#D4AF37]" />
                <span>Office No. FF 16, Varun Tower, Faridabad</span>
              </div>

              <Link
                href="#services"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#D4AF37] hover:text-[#FFF2B2] transition-colors group"
              >
                <span>Discover Services</span>
                <span className="group-hover:translate-x-1.5 transition-transform duration-300">
                  →
                </span>
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Dynamic Photography Collage */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative"
          >
            {/* Ambient Gold Halo */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#D4AF37]/20 via-transparent to-[#F5D88A]/10 rounded-3xl blur-2xl -z-10" />

            <div className="grid grid-cols-12 gap-4 items-center">
              {/* Primary Large Image: Royal Bride */}
              <div className="col-span-7 relative h-[360px] sm:h-[420px] rounded-2xl overflow-hidden border border-[#D4AF37]/40 shadow-[0_20px_50px_rgba(0,0,0,0.9)] group">
                <Image
                  src="/images/portfolio/royal_bride.jpg"
                  alt="Fine Art Royal Bride Portrait by NK Gabru"
                  fill
                  sizes="(max-width: 768px) 60vw, 30vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-[#D4AF37] block">
                    Candid Bridal Emotion
                  </span>
                  <span className="text-xs font-serif text-[#F5F2EA]">Royal Pheras Collection</span>
                </div>
              </div>

              {/* Stacked Secondary Images */}
              <div className="col-span-5 space-y-4">
                {/* Secondary Image 1: Groom */}
                <div className="relative h-[190px] sm:h-[220px] rounded-2xl overflow-hidden border border-[#D4AF37]/30 shadow-xl group">
                  <Image
                    src="/images/portfolio/groom_portrait.jpg"
                    alt="Royal Groom Portrait by NK Gabru"
                    fill
                    sizes="(max-width: 768px) 40vw, 20vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <span className="text-[9px] uppercase font-mono tracking-wider text-[#F5D88A]">
                      Editorial Groom
                    </span>
                  </div>
                </div>

                {/* Secondary Image 2: Actual Studio Bride from Catalogue */}
                <div className="relative h-[155px] sm:h-[185px] rounded-2xl overflow-hidden border border-[#D4AF37]/30 shadow-xl group">
                  <Image
                    src="/images/portfolio/real_studio_bride.jpg"
                    alt="Authentic Studio Bridal Makeover Shot by NK Gabru"
                    fill
                    sizes="(max-width: 768px) 40vw, 20vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <span className="text-[9px] uppercase font-mono tracking-wider text-[#D4AF37]">
                      Studio Catalogue
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Luxury Stamp */}
            <div className="absolute -bottom-6 -left-4 sm:left-4 bg-[#101010]/95 backdrop-blur-xl border border-[#D4AF37]/50 rounded-2xl p-4 shadow-[0_10px_30px_rgba(0,0,0,0.8)] flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FCEBA4] to-[#AA771C] flex items-center justify-center text-[#050505]">
                <Camera className="w-5 h-5" />
              </div>
              <div>
                <span className="block font-serif text-sm font-bold text-[#F5F2EA]">
                  NK Gabru Signature
                </span>
                <span className="block text-[10px] text-[#D4AF37] tracking-wider uppercase">
                  Faridabad • Sector 20B
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="mt-24 sm:mt-28 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6"
        >
          {STATS.map((stat, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-[#101010]/60 border border-[#D4AF37]/15 hover:border-[#D4AF37]/40 transition-all duration-300 text-center group"
            >
              <div className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-gold-gradient mb-1 group-hover:scale-105 transition-transform">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-medium text-[#F5F2EA] tracking-wide mb-0.5">
                {stat.label}
              </div>
              <div className="text-[11px] text-[#A5A5A5]">{stat.sub}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
