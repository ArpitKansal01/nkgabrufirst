"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote, Sparkles, AlertCircle } from "lucide-react";

interface Testimonial {
  id: string;
  quote: string;
  name: string;
  event: string;
  location: string;
  rating: number;
}

// Sample review templates clearly labeled as placeholders ready for genuine client quotes
const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    quote:
      "NK Gabru Photography captured our 3-day royal wedding in Rajasthan with sheer brilliance. Every single frame feels like a still from a high-budget movie. Their team was discreet yet captured every tear, laugh, and petal shower flawlessly.",
    name: "Aman & Ritu Sharma",
    event: "Royal Destination Wedding",
    location: "Udaipur, Rajasthan",
    rating: 5,
  },
  {
    id: "t2",
    quote:
      "Our pre-wedding shoot with the NK Gabru team was pure magic. They guided our poses naturally and made us feel so comfortable. The resulting color grading and drone cinematography blew our entire family away!",
    name: "Karan & Simran Verma",
    event: "Pre-Wedding & Teaser Reel",
    location: "Jaipur Heritage",
    rating: 5,
  },
  {
    id: "t3",
    quote:
      "As a professional fashion model, having a clean, high-impact portfolio is everything. NK Gabru's studio lighting, chiaroscuro contrast, and fast turnaround gave me the best agency book I have ever had.",
    name: "Pooja Malhotra",
    event: "Fashion & Modeling Portfolio",
    location: "Faridabad Studio",
    rating: 5,
  },
  {
    id: "t4",
    quote:
      "From the grand sangeet pyrotechnics to our sacred pheras, the video film they edited is emotional and energetic. Their dedication, punctuality, and post-production quality are unmatched in Faridabad and Delhi NCR.",
    name: "Vikram & Neha Bansal",
    event: "Sangeet & Wedding Reception",
    location: "Faridabad, Haryana",
    rating: 5,
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  // Auto advance every 7 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const current = TESTIMONIALS[currentIndex];

  return (
    <section id="reviews" className="relative py-28 sm:py-36 bg-[#0a0a0a] overflow-hidden border-t border-[#D4AF37]/15">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D4AF37]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#D4AF37]/30 bg-[#121212] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#F5D88A]" />
            <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-[#F5D88A]">
              Client Words
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#F5F2EA] tracking-wide mb-3">
            WORDS FROM OUR <span className="text-gold-gradient font-bold italic">COUPLES</span>
          </h2>

          <p className="font-sans text-xs sm:text-sm text-[#A5A5A5]">
            Stories of timeless celebrations captured through our lens.
          </p>
        </div>

        {/* Carousel Card */}
        <div className="relative bg-[#101010]/90 border border-[#D4AF37]/30 rounded-3xl p-8 sm:p-14 backdrop-blur-xl shadow-[0_25px_60px_rgba(0,0,0,0.85)]">
          {/* Large Gold Quote Mark */}
          <div className="absolute top-6 left-6 text-[#D4AF37]/15 pointer-events-none">
            <Quote className="w-16 h-16 sm:w-20 sm:h-20" />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="relative z-10 text-center space-y-6"
            >
              {/* Star Rating */}
              <div className="flex items-center justify-center gap-1">
                {Array.from({ length: current.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 sm:w-5 sm:h-5 fill-[#D4AF37] text-[#D4AF37] filter drop-shadow-[0_0_6px_rgba(212,175,55,0.6)]"
                  />
                ))}
              </div>

              {/* Quote Body */}
              <p className="font-serif text-lg sm:text-2xl md:text-3xl text-[#F5F2EA] font-normal leading-relaxed italic max-w-3xl mx-auto">
                &ldquo;{current.quote}&rdquo;
              </p>

              {/* Client Info */}
              <div className="pt-4 border-t border-white/10 max-w-sm mx-auto">
                <h4 className="font-serif text-lg font-bold text-[#F5D88A] tracking-wide">
                  {current.name}
                </h4>
                <p className="text-xs text-[#D4AF37] font-medium tracking-wider uppercase font-mono mt-0.5">
                  {current.event}
                </p>
                <p className="text-[11px] text-[#A5A5A5] mt-0.5">{current.location}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-8 pt-4 border-t border-white/5">
            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    currentIndex === i ? "w-8 bg-[#D4AF37]" : "w-2 bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={prevTestimonial}
                className="p-2.5 rounded-full border border-white/10 text-white hover:text-[#D4AF37] hover:border-[#D4AF37] hover:bg-black/50 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextTestimonial}
                className="p-2.5 rounded-full border border-white/10 text-white hover:text-[#D4AF37] hover:border-[#D4AF37] hover:bg-black/50 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Clear Notice for Replacement */}
        <div className="mt-6 flex items-center justify-center gap-2 text-[11px] text-[#A5A5A5]/60 font-mono text-center">
          <AlertCircle className="w-3.5 h-3.5" />
          <span>
            Placeholder testimonial templates ready for genuine studio reviews from clients.
          </span>
        </div>
      </div>
    </section>
  );
}
