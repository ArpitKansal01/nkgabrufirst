"use client";

import { useState } from "react";
import { MessageSquare, Sparkles, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Tooltip speech bubble */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="mb-3 max-w-[220px] p-3 rounded-2xl bg-[#101010]/95 backdrop-blur-xl border border-[#D4AF37]/40 shadow-[0_10px_25px_rgba(0,0,0,0.8)] relative text-left"
          >
            <button
              onClick={() => setShowTooltip(false)}
              className="absolute -top-1.5 -left-1.5 w-5 h-5 rounded-full bg-black border border-white/20 text-white/70 hover:text-white flex items-center justify-center text-[10px]"
              aria-label="Close message"
            >
              <X className="w-3 h-3" />
            </button>
            <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider text-[#F5D88A] mb-0.5">
              <Sparkles className="w-3 h-3 text-[#D4AF37]" />
              <span>Studio Online</span>
            </div>
            <p className="text-xs text-[#F5F2EA] leading-snug">
              Need instant date availability or quote? Chat with us on WhatsApp!
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <a
        href="https://wa.me/917053700761?text=Hello%20NK%20Gabru%20Photography,%20I%20am%20interested%20in%20inquiring%20about%20your%20services."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp with NK Gabru Photography"
        className="relative group p-4 rounded-full bg-[#25D366] text-white shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:shadow-[0_0_35px_rgba(37,211,102,0.8)] hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center"
      >
        {/* Pulsating golden ripple */}
        <span className="absolute -inset-1 rounded-full border border-[#D4AF37] opacity-60 animate-ping pointer-events-none" />
        <MessageSquare className="w-6 h-6 fill-current" />
      </a>
    </div>
  );
}
