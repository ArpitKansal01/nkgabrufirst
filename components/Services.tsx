"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Camera,
  Heart,
  Video,
  Sparkles,
  Plane,
  Film,
  ArrowUpRight,
  X,
  CheckCircle2,
  Calendar,
  MessageSquare,
} from "lucide-react";

interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  icon: typeof Camera;
  deliverables: string[];
  equipment: string;
}

const SERVICES: ServiceItem[] = [
  {
    id: "wedding",
    title: "Wedding & Event Photography",
    subtitle: "Capturing your special moments with perfection.",
    description:
      "From royal entrance rituals and sacred agni pheras to emotional vidai ceremonies, we weave every cherished ritual into timeless cinematic photographs with opulent lighting and candid authenticity.",
    image: "/images/portfolio/wedding_pheras.jpg",
    icon: Heart,
    deliverables: [
      "Traditional & Candid Wedding Photography",
      "Signature High-Res Hand-Retouched Master Album",
      "Full Raw & Graded Digital Gallery Delivery",
      "Pre-Event Rituals (Haldi, Mehndi, Sangeet)",
    ],
    equipment: "Sony A1 & FX3 Cinema Rigs, GM 24-70mm f/2.8 & 85mm f/1.4 Glass",
  },
  {
    id: "modeling",
    title: "Modeling Portfolio",
    subtitle: "Professional portfolios that define your personality.",
    description:
      "Bespoke high-fashion and commercial portfolios tailored for aspiring and established models, actors, and public figures. Clean chiaroscuro lighting, editorial magazine aesthetics, and striking poses.",
    image: "/images/portfolio/modeling_gold.jpg",
    icon: Sparkles,
    deliverables: [
      "Editorial Fashion & Lookbook Concepts",
      "Beauty & High-End Skin Retouching",
      "Multiple Attire Changes & Studio Lighting Setups",
      "Agency-Ready Digital Comp-Cards & Headshots",
    ],
    equipment: "Hasselblad & High-Speed Strobe Lighting with Broncolor Modifiers",
  },
  {
    id: "prewedding",
    title: "Pre-Wedding Photography",
    subtitle: "Beautiful pre-wedding shoots to cherish your love story.",
    description:
      "Celebrate your chemistry against cinematic backdrops — royal heritage palaces in Udaipur and Jaipur, dreamy golden hour lakesides, or bespoke architecture. Thoughtfully storyboarded to mirror your journey.",
    image: "/images/portfolio/prewedding_shoot.jpg",
    icon: Camera,
    deliverables: [
      "Custom Location & Wardrobe Styling Guidance",
      "Cinematic Teaser Reel & Music Video",
      "Romantic Sunset & Twilight Drone Shots",
      "Exclusive Large-Format Wall Art Prints",
    ],
    equipment: "Anamorphic Primes, DJI Ronin Gimbal & Aerial Rigs",
  },
  {
    id: "postwedding",
    title: "Post-Wedding Shoot",
    subtitle: "Relive the magic after your big day.",
    description:
      "Once the frantic wedding schedule settles, enjoy an unhurried, intimate session in royal attire or bespoke evening couture. Pure romance, lantern-lit palace corridors, and heartfelt connection.",
    image: "/images/portfolio/postwedding_shoot.jpg",
    icon: Film,
    deliverables: [
      "Relaxed, Unhurried Intimate Portraits",
      "Heritage Architecture & Night Lantern Shoots",
      "Fine Art Coffee Table Book Inclusion",
      "Private Online Proofing Vault",
    ],
    equipment: "Ultra-Fast f/1.2 Lenses for Low-Light Golden Ambience",
  },
  {
    id: "droneography",
    title: "Video Shoot & Droneography",
    subtitle: "Cinematic video shoots with stunning aerial views.",
    description:
      "Elevate your celebrations with breathtaking 4K/60fps aerial cinematography. Capture grand palace courtyards, fireworks displays, baraat processions, and scenic destination landscapes from sweeping vantage points.",
    image: "/images/portfolio/drone_palace.jpg",
    icon: Plane,
    deliverables: [
      "4K Ultra-HD Aerial Video Coverage",
      "Dynamic Fly-Throughs of Grand Venue Decor",
      "Smooth 3-Axis Stabilized Gimbal Moves",
      "Licensed, Safety-Compliant Drone Operations",
    ],
    equipment: "DJI Inspire 3 & Mavic 3 Pro Cine with Hasselblad Optics",
  },
  {
    id: "videography",
    title: "All Types of Video Shoot & Editing",
    subtitle: "High-quality editing for every kind of video project.",
    description:
      "Full-spectrum cinematic filmmaking and post-production. Feature-length wedding films, high-energy teaser trailers, commercial promos, music videos, and multi-camera live broadcast setups with custom sound design.",
    image: "/images/portfolio/cinema_rig.jpg",
    icon: Video,
    deliverables: [
      "Cinematic Wedding Film (15-30 Mins)",
      "Dynamic Instagram Reels & Teasers (30-60 Secs)",
      "Hollywood-Standard DaVinci Color Grading",
      "Professional Sound Design & Licensed Soundtracks",
    ],
    equipment: "RED V-Raptor / Sony FX6 Cinema Line with Cooke Anamorphic",
  },
];

export default function Services() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  return (
    <section id="services" className="relative py-28 sm:py-36 bg-[#050505] overflow-hidden">
      {/* Background Subtle Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#D4AF37]/30 bg-[#101010] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#F5D88A]" />
            <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-[#F5D88A]">
              Crafted To Perfection
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-[#F5F2EA] tracking-wide mb-4">
            OUR BESPOKE <span className="text-gold-gradient font-bold">SERVICES</span>
          </h2>

          <p className="font-sans text-sm sm:text-base text-[#A5A5A5] leading-relaxed">
            From royal traditional weddings to avant-garde modeling portfolios and cinema-grade droneography, explore our tailored visual storytelling experiences.
          </p>
        </div>

        {/* 6 Interactive Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => setSelectedService(service)}
                className="group relative h-[440px] sm:h-[480px] rounded-3xl overflow-hidden border border-[#D4AF37]/25 hover:border-[#D4AF37]/70 bg-[#0d0d0d] cursor-pointer transition-all duration-500 shadow-[0_10px_30px_rgba(0,0,0,0.8)] hover:shadow-[0_15px_45px_rgba(212,175,55,0.2)]"
              >
                {/* Background Image with Zoom */}
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-center filter brightness-[0.75] group-hover:brightness-[0.88] group-hover:scale-110 transition-all duration-700 ease-out"
                />

                {/* Dark & Gold Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/65 to-transparent transition-opacity duration-300" />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Top Badge Icon */}
                <div className="absolute top-5 left-5 z-10 w-12 h-12 rounded-2xl bg-[#0a0a0a]/80 backdrop-blur-md border border-[#D4AF37]/40 flex items-center justify-center text-[#F5D88A] group-hover:bg-[#D4AF37] group-hover:text-[#050505] transition-colors duration-300 shadow-lg">
                  <Icon className="w-5 h-5" />
                </div>

                {/* Service Number Watermark */}
                <div className="absolute top-4 right-6 font-mono text-4xl font-bold text-white/10 group-hover:text-[#D4AF37]/20 transition-colors pointer-events-none select-none">
                  0{index + 1}
                </div>

                {/* Bottom Content Container */}
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-7 z-10 flex flex-col justify-end space-y-3">
                  <h3 className="font-serif text-2xl font-bold text-[#F5F2EA] group-hover:text-[#F5D88A] transition-colors leading-snug">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#A5A5A5] line-clamp-2 leading-relaxed">
                    {service.subtitle}
                  </p>

                  {/* Explore Service Interaction Link */}
                  <div className="pt-2 flex items-center justify-between border-t border-white/10 group-hover:border-[#D4AF37]/40 transition-colors">
                    <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#D4AF37] group-hover:text-[#FFF2B2] flex items-center gap-1.5 transition-colors">
                      <span>Explore Service</span>
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </span>

                    <span className="text-[10px] font-mono text-[#A5A5A5]/70">Faridabad &amp; Beyond</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-2xl bg-[#0f0f0f] border border-[#D4AF37]/50 rounded-3xl overflow-hidden shadow-[0_25px_70px_rgba(0,0,0,0.95)] max-h-[90vh] flex flex-col"
            >
              {/* Header Image Header */}
              <div className="relative h-56 sm:h-64 w-full flex-shrink-0">
                <Image
                  src={selectedService.image}
                  alt={selectedService.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-[#0f0f0f]/40 to-black/60" />

                {/* Close Button */}
                <button
                  onClick={() => setSelectedService(null)}
                  className="absolute top-4 right-4 p-2.5 rounded-full bg-black/70 border border-white/20 text-white hover:text-[#D4AF37] hover:border-[#D4AF37] transition-colors focus:outline-none"
                  aria-label="Close dialog"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="absolute bottom-4 left-6 right-6">
                  <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#D4AF37] block mb-1">
                    Signature Experience
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#F5F2EA]">
                    {selectedService.title}
                  </h3>
                </div>
              </div>

              {/* Scrollable Modal Body */}
              <div className="p-6 sm:p-8 space-y-6 overflow-y-auto">
                <p className="text-sm text-[#F5F2EA]/85 leading-relaxed">
                  {selectedService.description}
                </p>

                {/* Deliverables List */}
                <div className="space-y-3">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[#D4AF37]">
                    Key Deliverables &amp; Inclusions:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {selectedService.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-[#A5A5A5]">
                        <CheckCircle2 className="w-4 h-4 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Equipment Benchmark */}
                <div className="p-4 rounded-xl bg-[#070707] border border-[#D4AF37]/20 flex items-start gap-3">
                  <Camera className="w-4 h-4 text-[#F5D88A] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[11px] font-mono uppercase text-[#F5D88A] block">
                      Production Hardware:
                    </span>
                    <span className="text-xs text-[#A5A5A5]">{selectedService.equipment}</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <a
                    href={`https://wa.me/917053700761?text=${encodeURIComponent(
                      `Hello NK Gabru Photography, I would like to inquire about the ${selectedService.title} package.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:flex-1 py-3.5 px-6 rounded-full bg-gradient-to-r from-[#FCEBA4] via-[#D4AF37] to-[#F5D88A] text-[#050505] text-xs font-bold uppercase tracking-[0.18em] shadow-[0_0_20px_rgba(212,175,55,0.4)] flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Inquire via WhatsApp</span>
                  </a>

                  <button
                    onClick={() => {
                      setSelectedService(null);
                      const el = document.getElementById("contact");
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="w-full sm:w-auto py-3.5 px-6 rounded-full border border-[#D4AF37]/40 text-xs font-semibold uppercase tracking-[0.18em] text-[#F5F2EA] hover:bg-[#D4AF37]/10 transition-colors flex items-center justify-center gap-2"
                  >
                    <Calendar className="w-4 h-4 text-[#D4AF37]" />
                    <span>Book In Studio</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
