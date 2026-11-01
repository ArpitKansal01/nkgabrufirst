"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Phone, Calendar, Camera } from "lucide-react";
import InstagramIcon from "@/components/InstagramIcon";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Experience", href: "#experience" },
  { name: "Why Us", href: "#why-us" },
  { name: "Reviews", href: "#reviews" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? "glass-nav py-3 shadow-[0_4px_30px_rgba(0,0,0,0.8)]"
            : "bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo Brand */}
          <Link
            href="#hero"
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="NK Gabru Photography - Home"
          >
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0">
              <Image
                src="/images/logo/logo-mark.svg"
                alt="NK Gabru Emblem"
                fill
                className="object-contain filter drop-shadow-[0_0_8px_rgba(212,175,55,0.4)] group-hover:scale-105 transition-transform duration-300"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg sm:text-xl font-bold tracking-[0.18em] text-[#F5F2EA] group-hover:text-[#F5D88A] transition-colors">
                NK GABRU
              </span>
              <span className="text-[9px] sm:text-[10px] font-sans tracking-[0.32em] text-[#D4AF37] uppercase">
                Photography • Faridabad
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative text-[13px] tracking-[0.12em] uppercase text-[#F5F2EA]/80 hover:text-[#F5D88A] transition-colors py-1 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-gradient-to-r from-[#D4AF37] to-[#F5D88A] group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </nav>

          {/* Desktop Right CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="https://www.instagram.com/nkgabruphotography?vrfl=MXUyeHlqdGdqcmRjeQ%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram profile"
              className="p-2.5 rounded-full border border-[#D4AF37]/30 text-[#D4AF37] hover:text-white hover:border-[#D4AF37] hover:bg-[#D4AF37]/10 transition-all duration-300"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>

            <a
              href="tel:7053700761"
              aria-label="Call studio"
              className="p-2.5 rounded-full border border-[#D4AF37]/30 text-[#D4AF37] hover:text-white hover:border-[#D4AF37] hover:bg-[#D4AF37]/10 transition-all duration-300"
            >
              <Phone className="w-4 h-4" />
            </a>

            <Link
              href="#contact"
              className="relative px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.15em] text-[#050505] bg-gradient-to-r from-[#FCEBA4] via-[#D4AF37] to-[#F5D88A] rounded-full shadow-[0_0_15px_rgba(212,175,55,0.3)] hover:shadow-[0_0_25px_rgba(212,175,55,0.6)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 flex items-center gap-2"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Your Shoot</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#D4AF37] focus:outline-none"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-30 lg:hidden bg-[#050505]/95 backdrop-blur-2xl pt-24 px-6 flex flex-col justify-between pb-10"
          >
            <div className="flex flex-col space-y-5">
              <div className="pb-4 border-b border-[#D4AF37]/20 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Camera className="w-4 h-4 text-[#D4AF37]" />
                  <span className="text-xs uppercase tracking-[0.2em] text-[#D4AF37]">
                    NK Gabru Photography
                  </span>
                </div>
                <span className="text-[10px] text-[#A5A5A5]">Faridabad, Haryana</span>
              </div>

              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-serif text-2xl tracking-[0.08em] text-[#F5F2EA] hover:text-[#F5D88A] transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="space-y-4 pt-6 border-t border-[#D4AF37]/20">
              <div className="flex items-center gap-3">
                <a
                  href="tel:7053700761"
                  className="flex-1 py-3 text-center rounded-xl border border-[#D4AF37]/40 text-[#D4AF37] font-medium text-xs tracking-wider flex items-center justify-center gap-2 hover:bg-[#D4AF37]/10"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call 70537 00761</span>
                </a>
                <a
                  href="https://www.instagram.com/nkgabruphotography?vrfl=MXUyeHlqdGdqcmRjeQ%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl border border-[#D4AF37]/40 text-[#D4AF37] hover:bg-[#D4AF37]/10"
                  aria-label="Instagram"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
              </div>

              <Link
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full block py-3.5 text-center font-semibold text-xs tracking-[0.2em] uppercase text-[#050505] bg-gradient-to-r from-[#FCEBA4] via-[#D4AF37] to-[#F5D88A] rounded-xl shadow-[0_0_20px_rgba(212,175,55,0.4)]"
              >
                Book Your Shoot Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
