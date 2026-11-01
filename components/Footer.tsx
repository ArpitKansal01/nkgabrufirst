"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUp, Phone, MapPin, Mail, Heart } from "lucide-react";
import InstagramIcon from "@/components/InstagramIcon";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#050505] text-[#F5F2EA] pt-20 pb-12 overflow-hidden border-t border-[#D4AF37]/20">
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/5">
          {/* Brand Info & Tagline (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="#hero" className="inline-block focus:outline-none">
              <div className="relative w-56 h-14">
                <Image
                  src="/images/logo/logo.svg"
                  alt="NK Gabru Photography"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-[#A5A5A5] leading-relaxed max-w-sm">
              Faridabad&apos;s premier cinematic wedding and portrait studio. Transforming fleeting emotions into everlasting royal visual heirlooms.
            </p>

            <div className="pt-1 flex items-center gap-3">
              <a
                href="https://www.instagram.com/nkgabruphotography?vrfl=MXUyeHlqdGdqcmRjeQ%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-[#D4AF37]/30 bg-[#101010] flex items-center justify-center text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#050505] hover:scale-105 transition-all"
                aria-label="Instagram Profile"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>

              <a
                href="tel:7053700761"
                className="w-10 h-10 rounded-full border border-[#D4AF37]/30 bg-[#101010] flex items-center justify-center text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#050505] hover:scale-105 transition-all"
                aria-label="Call Studio"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-[#D4AF37]">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-[#A5A5A5]">
              <li>
                <Link href="#hero" className="hover:text-[#F5D88A] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-[#F5D88A] transition-colors">
                  Brand Story
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-[#F5D88A] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#portfolio" className="hover:text-[#F5D88A] transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="#experience" className="hover:text-[#F5D88A] transition-colors">
                  3D Aperture
                </Link>
              </li>
              <li>
                <Link href="#reviews" className="hover:text-[#F5D88A] transition-colors">
                  Client Reviews
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-[#F5D88A] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Bespoke Services (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-[#D4AF37]">
              Our Services
            </h4>
            <ul className="space-y-2.5 text-xs text-[#A5A5A5]">
              <li>Wedding &amp; Event Photography</li>
              <li>Modeling &amp; Fashion Portfolio</li>
              <li>Pre-Wedding Destination Shoots</li>
              <li>Post-Wedding Intimate Sessions</li>
              <li>Cinematic Video &amp; 4K Droneography</li>
              <li>All Types of Video Shoot &amp; Editing</li>
            </ul>
          </div>

          {/* Studio Contact (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-[#D4AF37]">
              Faridabad Studio
            </h4>
            <div className="space-y-3 text-xs text-[#A5A5A5]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                <p>
                  Office No. FF 16, Varun Tower, Sector 20B, Ajronda Chowk, Faridabad, Haryana – 121003.
                </p>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                <div className="flex flex-col">
                  <a href="tel:7053700761" className="hover:text-[#F5D88A]">
                    +91 70537 00761
                  </a>
                  <a href="tel:9650991936" className="hover:text-[#F5D88A]">
                    +91 96509 91936
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <InstagramIcon className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                <a
                  href="https://www.instagram.com/nkgabruphotography?vrfl=MXUyeHlqdGdqcmRjeQ%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#F5D88A]"
                >
                  @nkgabruphotography
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A5A5A5]">
          <p>© 2026 NK Gabru Photography. All rights reserved. Capture • Create • Cherish.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-[#D4AF37] hover:text-[#FFF2B2] transition-colors focus:outline-none group"
            aria-label="Scroll back to top"
          >
            <span className="text-[11px] font-mono tracking-widest uppercase">Back to Top</span>
            <div className="w-7 h-7 rounded-full bg-[#101010] border border-[#D4AF37]/40 flex items-center justify-center group-hover:-translate-y-1 transition-transform">
              <ArrowUp className="w-3.5 h-3.5" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
