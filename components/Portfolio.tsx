"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Maximize2,
  ChevronLeft,
  ChevronRight,
  X,
  Camera,
  MapPin,
  Calendar,
} from "lucide-react";

interface PortfolioItem {
  id: string;
  title: string;
  category: "Weddings" | "Pre-Weddings" | "Events" | "Modeling" | "Cinematography" | "Celebrations";
  image: string;
  location: string;
  aspect: "portrait" | "landscape" | "tall";
  caption: string;
}

const CATEGORIES = [
  "All",
  "Weddings",
  "Pre-Weddings",
  "Events",
  "Modeling",
  "Cinematography",
  "Celebrations",
] as const;

const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: "p1",
    title: "Sacred Pheras & The Holy Fire",
    category: "Weddings",
    image: "/images/portfolio/wedding_pheras.jpg",
    location: "Royal Heritage Palace, Jaipur",
    aspect: "landscape",
    caption:
      "A shower of scented rose petals catches the golden glow of the agni fire as vows are spoken.",
  },
  {
    id: "p2",
    title: "Vogue Royal Bride",
    category: "Weddings",
    image: "/images/portfolio/royal_bride.jpg",
    location: "Studio Portfolio, Faridabad",
    aspect: "tall",
    caption:
      "Intricate zardozi embroidery and antique kundan nath framed through a translucent golden veil.",
  },
  {
    id: "p3",
    title: "Lake Pichola Sunset Romance",
    category: "Pre-Weddings",
    image: "/images/portfolio/prewedding_shoot.jpg",
    location: "Udaipur, Rajasthan",
    aspect: "tall",
    caption:
      "Golden hour breeze catching champagne organza fabric as laughter reflects over shimmering waters.",
  },
  {
    id: "p4",
    title: "High-Fashion Obsidian & Gold",
    category: "Modeling",
    image: "/images/portfolio/modeling_gold.jpg",
    location: "Editorial Studio Set",
    aspect: "portrait",
    caption:
      "Chiaroscuro studio strobe lighting highlighting sculptural metallic couture and striking poise.",
  },
  {
    id: "p5",
    title: "Midnight Blue Velvet Sherwani",
    category: "Weddings",
    image: "/images/portfolio/groom_portrait.jpg",
    location: "Haveli Courtyard, NCR",
    aspect: "tall",
    caption:
      "Regal groom portrait featuring handcrafted zardozi motifs and lustrous pearl strings.",
  },
  {
    id: "p6",
    title: "Sangeet Pyrotechnic Euphoria",
    category: "Celebrations",
    image: "/images/portfolio/celebration_sangeet.jpg",
    location: "Grand Ballroom, Delhi NCR",
    aspect: "landscape",
    caption:
      "Cold pyro sparks erupt into golden confetti as the couple takes the dance stage by storm.",
  },
  {
    id: "p7",
    title: "Grand Palace Twilight Aerial",
    category: "Cinematography",
    image: "/images/portfolio/drone_palace.jpg",
    location: "Destination Resort, Rajasthan",
    aspect: "landscape",
    caption:
      "4K aerial drone shot capturing thousands of twinkling fairy lights and fireworks over heritage pools.",
  },
  {
    id: "p8",
    title: "Cooke Anamorphic Cinema Rig",
    category: "Cinematography",
    image: "/images/portfolio/cinema_rig.jpg",
    location: "Production Studio, Faridabad",
    aspect: "landscape",
    caption:
      "Professional RED & ARRI cinema package delivering authentic Hollywood anamorphic flares.",
  },
  {
    id: "p9",
    title: "Lantern Corridor Post-Wedding",
    category: "Pre-Weddings",
    image: "/images/portfolio/postwedding_shoot.jpg",
    location: "Fort Palace, Neemrana",
    aspect: "tall",
    caption:
      "Relaxed twilight stroll through antique sandstone arches lit by flickering amber lanterns.",
  },
  {
    id: "p10",
    title: "Authentic Bridal Glow & Kohl",
    category: "Weddings",
    image: "/images/portfolio/real_studio_bride.jpg",
    location: "Studio Makeover, Faridabad",
    aspect: "tall",
    caption:
      "Real catalogue bridal portrait highlighting flawless makeup artistry and traditional jewelry.",
  },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  const filteredItems =
    activeCategory === "All"
      ? PORTFOLIO_ITEMS
      : PORTFOLIO_ITEMS.filter((item) => item.category === activeCategory);

  const handleNext = useCallback(() => {
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex((prev) =>
      prev !== null && prev < filteredItems.length - 1 ? prev + 1 : 0
    );
  }, [filteredItems.length, selectedPhotoIndex]);

  const handlePrev = useCallback(() => {
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex((prev) =>
      prev !== null && prev > 0 ? prev - 1 : filteredItems.length - 1
    );
  }, [filteredItems.length, selectedPhotoIndex]);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedPhotoIndex === null) return;
      if (e.key === "Escape") setSelectedPhotoIndex(null);
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleNext, handlePrev, selectedPhotoIndex]);

  return (
    <section id="portfolio" className="relative py-28 sm:py-36 bg-[#050505] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#D4AF37]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#D4AF37]/30 bg-[#101010] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#F5D88A]" />
            <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-[#F5D88A]">
              Selected Works
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-[#F5F2EA] tracking-wide mb-4">
            FEATURED <span className="text-gold-gradient font-bold">PORTFOLIO</span>
          </h2>

          <p className="font-sans text-sm sm:text-base text-[#A5A5A5] leading-relaxed">
            A curated anthology of royal matrimonial sagas, intimate pre-weddings, high-fashion editorials, and cinema productions.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12 sm:mb-16">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-medium tracking-[0.15em] uppercase transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-[#FCEBA4] via-[#D4AF37] to-[#F5D88A] text-[#050505] font-semibold shadow-[0_0_20px_rgba(212,175,55,0.4)] scale-105"
                  : "bg-[#101010] border border-white/10 text-[#A5A5A5] hover:text-[#F5F2EA] hover:border-[#D4AF37]/40"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry / Grid Gallery */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence>
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                onClick={() => setSelectedPhotoIndex(index)}
                className={`group relative rounded-3xl overflow-hidden border border-[#D4AF37]/20 hover:border-[#D4AF37]/60 bg-[#0d0d0d] cursor-pointer shadow-[0_15px_35px_rgba(0,0,0,0.8)] hover:shadow-[0_20px_50px_rgba(212,175,55,0.2)] transition-all duration-500 ${
                  item.aspect === "tall"
                    ? "h-[500px] sm:h-[540px]"
                    : item.aspect === "landscape"
                    ? "h-[340px] sm:h-[380px] md:col-span-2 lg:col-span-2"
                    : "h-[420px] sm:h-[460px]"
                }`}
              >
                {/* Photo Asset */}
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-center filter brightness-[0.82] group-hover:brightness-[0.98] group-hover:scale-105 transition-all duration-700 ease-out"
                />

                {/* Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent transition-opacity duration-300" />
                <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/15 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Top Corner Category Pill */}
                <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-[#D4AF37]/40 text-[10px] font-mono tracking-widest text-[#F5D88A] uppercase">
                  {item.category}
                </div>

                {/* Hover Expand Icon */}
                <div className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/70 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:text-[#D4AF37] group-hover:border-[#D4AF37] group-hover:scale-110 transition-all">
                  <Maximize2 className="w-4 h-4" />
                </div>

                {/* Bottom Card Meta Details */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-10 space-y-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex items-center gap-2 text-[11px] text-[#D4AF37] font-medium">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{item.location}</span>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#F5F2EA] group-hover:text-[#F5D88A] transition-colors leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs text-[#A5A5A5] line-clamp-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {item.caption}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Full-Screen Lightbox Modal */}
      <AnimatePresence>
        {selectedPhotoIndex !== null && filteredItems[selectedPhotoIndex] && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/95 backdrop-blur-2xl">
            {/* Close Button */}
            <button
              onClick={() => setSelectedPhotoIndex(null)}
              className="absolute top-5 right-5 z-50 p-3 rounded-full bg-black/80 border border-white/20 text-white hover:text-[#D4AF37] hover:border-[#D4AF37] transition-all focus:outline-none"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation Arrows */}
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-black/80 border border-white/20 text-white hover:text-[#D4AF37] hover:border-[#D4AF37] transition-all focus:outline-none hidden sm:flex items-center justify-center"
              aria-label="Previous Photo"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-black/80 border border-white/20 text-white hover:text-[#D4AF37] hover:border-[#D4AF37] transition-all focus:outline-none hidden sm:flex items-center justify-center"
              aria-label="Next Photo"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Center Content */}
            <motion.div
              key={selectedPhotoIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              className="relative max-w-5xl w-full h-[82vh] flex flex-col items-center justify-center"
            >
              <div className="relative w-full flex-1 rounded-2xl overflow-hidden border border-[#D4AF37]/35 shadow-[0_0_60px_rgba(0,0,0,0.9)]">
                <Image
                  src={filteredItems[selectedPhotoIndex].image}
                  alt={filteredItems[selectedPhotoIndex].title}
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              {/* Caption Bottom Bar */}
              <div className="w-full mt-4 flex flex-col sm:flex-row items-center justify-between gap-2 px-4 text-center sm:text-left">
                <div>
                  <h4 className="font-serif text-lg sm:text-xl font-bold text-[#F5F2EA]">
                    {filteredItems[selectedPhotoIndex].title}
                  </h4>
                  <p className="text-xs text-[#A5A5A5]">
                    {filteredItems[selectedPhotoIndex].caption} •{" "}
                    <span className="text-[#D4AF37]">
                      {filteredItems[selectedPhotoIndex].location}
                    </span>
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-[#D4AF37] bg-black/60 px-3 py-1 rounded-full border border-[#D4AF37]/30">
                    {selectedPhotoIndex + 1} of {filteredItems.length}
                  </span>
                  <a
                    href="https://wa.me/917053700761?text=Hello%20NK%20Gabru%20Photography,%20I%20saw%20this%20photo%20in%20your%20portfolio%20and%20would%20like%20to%20inquire."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-1.5 rounded-full bg-gradient-to-r from-[#FCEBA4] to-[#D4AF37] text-[#050505] text-xs font-bold uppercase tracking-wider hover:scale-105 transition-transform"
                  >
                    Inquire Style
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
