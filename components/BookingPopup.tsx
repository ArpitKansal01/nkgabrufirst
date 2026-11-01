"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, Calendar, ArrowRight } from "lucide-react";

export default function BookingPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if dismissed in this session
    const hasDismissed = sessionStorage.getItem("nk_welcome_popup_dismissed");
    if (hasDismissed) return;

    // Show after 3.8 seconds
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 3800);

    return () => clearTimeout(timer);
  }, []);

  const handleDismiss = () => {
    setIsOpen(false);
    sessionStorage.setItem("nk_welcome_popup_dismissed", "true");
  };

  const handleAction = () => {
    handleDismiss();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.4 }}
            className="relative w-full max-w-lg rounded-3xl overflow-hidden bg-[#0d0d0d] border border-[#D4AF37]/50 shadow-[0_25px_70px_rgba(0,0,0,0.95)]"
          >
            {/* Top Image Banner */}
            <div className="relative h-44 w-full">
              <Image
                src="/images/portfolio/prewedding_shoot.jpg"
                alt="Pre-wedding royal shoot"
                fill
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-[#0d0d0d]/50 to-black/60" />

              {/* Close Button */}
              <button
                onClick={handleDismiss}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/70 border border-white/20 text-white hover:text-[#D4AF37] hover:border-[#D4AF37] transition-colors focus:outline-none"
                aria-label="Close welcome popup"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="absolute bottom-3 left-6">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/80 border border-[#D4AF37]/40 text-[10px] font-mono tracking-widest text-[#F5D88A]">
                  <Sparkles className="w-3 h-3 text-[#D4AF37]" />
                  <span>SPECIAL MOMENTS AWAIT</span>
                </div>
              </div>
            </div>

            {/* Popup Content */}
            <div className="p-6 sm:p-8 space-y-4 text-center">
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#F5F2EA] leading-tight">
                Let&apos;s Capture <span className="text-gold-gradient italic">Your Story.</span>
              </h3>

              <p className="font-sans text-xs sm:text-sm text-[#A5A5A5] leading-relaxed max-w-sm mx-auto">
                Have a special moment coming up? Let&apos;s make it unforgettable. Connect with our creative director for dates, venue advice, and tailored luxury packages.
              </p>

              {/* Action Buttons */}
              <div className="pt-3 flex flex-col sm:flex-row items-center gap-3">
                <Link
                  href="#contact"
                  onClick={handleAction}
                  className="w-full sm:flex-1 py-3 px-5 rounded-full bg-gradient-to-r from-[#FCEBA4] via-[#D4AF37] to-[#F5D88A] text-[#050505] text-xs font-bold uppercase tracking-[0.16em] shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:shadow-[0_0_35px_rgba(212,175,55,0.7)] flex items-center justify-center gap-2 hover:scale-[1.02] transition-all"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Your Shoot</span>
                </Link>

                <Link
                  href="#portfolio"
                  onClick={handleAction}
                  className="w-full sm:w-auto py-3 px-5 rounded-full border border-[#D4AF37]/35 text-[#F5F2EA] hover:bg-[#D4AF37]/10 text-xs font-medium uppercase tracking-[0.16em] flex items-center justify-center gap-1.5 transition-colors"
                >
                  <span>Explore Portfolio</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="pt-1">
                <button
                  onClick={handleDismiss}
                  className="text-[11px] text-[#A5A5A5] hover:text-[#D4AF37] underline transition-colors"
                >
                  No thanks, I will browse first
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
