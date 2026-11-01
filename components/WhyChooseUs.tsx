"use client";

import { motion } from "framer-motion";
import { Users, Camera, Film, HeartHandshake, Sparkles, ShieldCheck } from "lucide-react";

const FEATURES = [
  {
    icon: Users,
    number: "01",
    title: "Professional Master Team",
    subtitle: "Artisans of Emotion & Scale",
    description:
      "Led by visionary cinematographers and seasoned wedding photojournalists with over a decade of NCR and destination wedding experience. We anticipate unscripted moments with discreet elegance.",
    badge: "10+ Years Expertise",
  },
  {
    icon: Camera,
    number: "02",
    title: "Premium Cinema Equipment",
    subtitle: "Hollywood-Grade Optics & 4K Aerial Rigs",
    description:
      "Equipped with top-tier Sony FX Cinema & RED camera bodies, high-speed Cooke and G-Master prime glass, studio broncolor lighting, and dual-operator DJI 4K drone setups.",
    badge: "State-of-the-Art Gear",
  },
  {
    icon: Film,
    number: "03",
    title: "Cinematic Grade & Color Science",
    subtitle: "Signature Warm Gold & Rich Obsidian LUTs",
    description:
      "Every frame is hand-corrected in DaVinci Resolve. We sculpt deep blacks, radiant skin tones, and lustrous jewelry highlights for a truly timeless, Vogue-editorial aesthetic.",
    badge: "Handcrafted Color Science",
  },
  {
    icon: HeartHandshake,
    number: "04",
    title: "100% Client Satisfaction",
    subtitle: "Cherished Deliveries & Lifetime Support",
    description:
      "From your first storyboard meeting in our Varun Tower studio to prompt album delivery, we offer transparent timelines, personal care, and unconditional dedication to your joy.",
    badge: "Unrivaled 5-Star Reviews",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="relative py-28 sm:py-36 bg-[#080808] overflow-hidden border-t border-[#D4AF37]/15">
      {/* Background Subtle Accent */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#D4AF37]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-[#D4AF37]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#D4AF37]/30 bg-[#121212] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#F5D88A]" />
            <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-[#F5D88A]">
              The NK Gabru Advantage
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-[#F5F2EA] tracking-wide mb-4">
            WHY CHOOSE <span className="text-gold-gradient font-bold">OUR STUDIO?</span>
          </h2>

          <p className="font-sans text-sm sm:text-base text-[#A5A5A5] leading-relaxed">
            When you entrust your once-in-a-lifetime celebration to us, you receive unmatched technical precision, emotional sensitivity, and cinematic prestige.
          </p>
        </div>

        {/* 4 Feature Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {FEATURES.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group p-8 rounded-3xl bg-[#0f0f0f] border border-[#D4AF37]/20 hover:border-[#D4AF37]/60 hover:bg-[#141414] transition-all duration-500 flex flex-col justify-between shadow-[0_10px_30px_rgba(0,0,0,0.8)] hover:shadow-[0_15px_45px_rgba(212,175,55,0.15)] relative overflow-hidden"
              >
                {/* Subtle Card Background Glow */}
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#D4AF37]/10 rounded-full blur-2xl group-hover:bg-[#D4AF37]/20 transition-all" />

                <div>
                  {/* Top Bar: Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-[#080808] border border-[#D4AF37]/35 flex items-center justify-center text-[#F5D88A] group-hover:scale-110 group-hover:bg-[#D4AF37] group-hover:text-[#050505] transition-all duration-300 shadow-md">
                      <Icon className="w-6 h-6" />
                    </div>

                    <span className="font-mono text-2xl font-bold text-white/10 group-hover:text-[#D4AF37]/40 transition-colors">
                      {feature.number}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#F5F2EA] group-hover:text-[#F5D88A] transition-colors mb-1.5">
                    {feature.title}
                  </h3>

                  <div className="text-xs font-mono text-[#D4AF37] tracking-wider mb-4">
                    {feature.subtitle}
                  </div>

                  <p className="text-xs sm:text-sm text-[#A5A5A5] leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Bottom Badge */}
                <div className="mt-8 pt-4 border-t border-white/5 flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span className="text-[11px] font-medium text-[#F5F2EA]/80 font-sans">
                    {feature.badge}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
