"use client";

import { useState } from "react";
import {
  Phone,
  MessageSquare,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Calendar,
  Sparkles,
  ExternalLink,
} from "lucide-react";
import InstagramIcon from "@/components/InstagramIcon";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    eventType: "Wedding Photography",
    eventDate: "",
    location: "Faridabad / Delhi NCR",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Please enter your name.";
    if (!formData.phone.trim()) {
      newErrors.phone = "Please enter your phone number.";
    } else if (formData.phone.replace(/[^0-9]/g, "").length < 10) {
      newErrors.phone = "Please enter a valid 10-digit mobile number.";
    }
    if (!formData.eventDate) newErrors.eventDate = "Please choose an estimated date.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Construct formatted WhatsApp message
    const waText = `*New Booking Inquiry - NK Gabru Photography*
---------------------------------------
👤 *Name:* ${formData.name}
📞 *Phone:* ${formData.phone}
✉️ *Email:* ${formData.email || "Not specified"}
💍 *Event Type:* ${formData.eventType}
📅 *Event Date:* ${formData.eventDate}
📍 *Location:* ${formData.location}
💬 *Message:* ${formData.message || "Looking for package details and availability."}
---------------------------------------
_Sent via NK Gabru Photography Website_`;

    const waUrl = `https://wa.me/917053700761?text=${encodeURIComponent(waText)}`;

    // Open WhatsApp
    window.open(waUrl, "_blank", "noopener,noreferrer");
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-28 sm:py-36 bg-[#050505] overflow-hidden border-t border-[#D4AF37]/15">
      {/* Background Ambience */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#D4AF37]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#D4AF37]/30 bg-[#121212] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#F5D88A]" />
            <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-[#F5D88A]">
              Get In Touch
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-[#F5F2EA] tracking-wide mb-4">
            LET&apos;S CRAFT YOUR <span className="text-gold-gradient font-bold italic">LEGACY</span>
          </h2>

          <p className="font-sans text-sm sm:text-base text-[#A5A5A5] leading-relaxed">
            Reserve your wedding dates, schedule a studio consultation, or discuss your bespoke cinema vision.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Left Column: Studio Information & Direct Action Buttons */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 rounded-3xl bg-[#0d0d0d] border border-[#D4AF37]/25 space-y-6 shadow-2xl">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#D4AF37] block mb-1">
                  Studio Headquarters
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#F5F2EA]">
                  NK Gabru Photography
                </h3>
                <p className="text-xs text-[#A5A5A5] mt-1 font-mono">
                  Capture • Create • Cherish
                </p>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3.5 text-xs sm:text-sm text-[#F5F2EA]/90 pt-4 border-t border-white/5">
                <MapPin className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-[#F5F2EA] font-semibold mb-0.5">
                    Studio Address:
                  </strong>
                  <p className="text-[#A5A5A5] leading-relaxed">
                    Office No. FF 16, Varun Tower,
                    <br />
                    Sector 20B, Ajronda Chowk,
                    <br />
                    Faridabad, Haryana – 121003.
                  </p>
                  <a
                    href="https://maps.google.com/?q=Varun+Tower+Ajronda+Chowk+Sector+20B+Faridabad"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-[#D4AF37] hover:text-[#FFF2B2] mt-2 font-medium"
                  >
                    <span>View on Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Phone Numbers */}
              <div className="flex items-start gap-3.5 text-xs sm:text-sm text-[#F5F2EA]/90 pt-4 border-t border-white/5">
                <Phone className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-[#F5F2EA] font-semibold mb-0.5">
                    Direct Phone Lines:
                  </strong>
                  <div className="flex flex-col gap-1 text-[#A5A5A5]">
                    <a
                      href="tel:7053700761"
                      className="hover:text-[#D4AF37] transition-colors font-mono"
                    >
                      +91 70537 00761
                    </a>
                    <a
                      href="tel:9650991936"
                      className="hover:text-[#D4AF37] transition-colors font-mono"
                    >
                      +91 96509 91936
                    </a>
                  </div>
                </div>
              </div>

              {/* Instagram */}
              <div className="flex items-start gap-3.5 text-xs sm:text-sm text-[#F5F2EA]/90 pt-4 border-t border-white/5">
                <InstagramIcon className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-[#F5F2EA] font-semibold mb-0.5">
                    Official Instagram:
                  </strong>
                  <a
                    href="https://www.instagram.com/nkgabruphotography?vrfl=MXUyeHlqdGdqcmRjeQ%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#D4AF37] hover:text-[#FFF2B2] transition-colors font-mono block"
                  >
                    @nkgabruphotography
                  </a>
                </div>
              </div>

              {/* Studio Timings */}
              <div className="flex items-start gap-3.5 text-xs sm:text-sm text-[#F5F2EA]/90 pt-4 border-t border-white/5">
                <Clock className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-[#F5F2EA] font-semibold mb-0.5">
                    Studio Hours:
                  </strong>
                  <p className="text-[#A5A5A5]">
                    Monday – Sunday: 10:00 AM – 8:30 PM
                    <br />
                    <span className="text-[11px] text-[#D4AF37]">
                      (Consultations by prior appointment)
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="grid grid-cols-2 gap-3.5">
              <a
                href="tel:7053700761"
                className="py-3.5 px-4 rounded-2xl bg-[#121212] border border-[#D4AF37]/35 text-[#F5F2EA] hover:border-[#D4AF37] hover:bg-[#D4AF37]/10 transition-all flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider"
              >
                <Phone className="w-4 h-4 text-[#D4AF37]" />
                <span>Call Now</span>
              </a>

              <a
                href="https://wa.me/917053700761?text=Hello%20NK%20Gabru%20Photography,%20I%20would%20like%20to%20inquire%20about%20booking%20a%20shoot."
                target="_blank"
                rel="noopener noreferrer"
                className="py-3.5 px-4 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/40 text-[#25D366] hover:bg-[#25D366]/20 transition-all flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Column: Premium Booking Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#0d0d0d] border border-[#D4AF37]/30 shadow-2xl relative">
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#F5F2EA] mb-2">
                Booking Inquiry Form
              </h3>
              <p className="text-xs sm:text-sm text-[#A5A5A5] mb-8">
                Fill in your details below. Your inquiry will automatically format into a direct WhatsApp message to our studio director for instant confirmation.
              </p>

              {isSubmitted ? (
                <div className="p-8 rounded-2xl bg-[#121212] border border-[#D4AF37] text-center space-y-4 animate-fade-in">
                  <div className="w-14 h-14 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37] flex items-center justify-center text-[#F5D88A] mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="font-serif text-2xl font-bold text-[#F5F2EA]">
                    Inquiry Dispatched!
                  </h4>
                  <p className="text-xs sm:text-sm text-[#A5A5A5] max-w-md mx-auto leading-relaxed">
                    Your details have been compiled and sent straight to our official WhatsApp (+91 70537 00761). Our lead director will connect with you within 2 business hours.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-4 px-6 py-2.5 rounded-full border border-white/20 text-xs uppercase tracking-wider text-white hover:border-[#D4AF37] hover:text-[#D4AF37]"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#D4AF37] mb-2">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rahul Sharma"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className={`w-full px-4 py-3 rounded-xl bg-[#141414] border ${
                          errors.name ? "border-red-500" : "border-white/10"
                        } focus:border-[#D4AF37] focus:outline-none text-xs sm:text-sm text-[#F5F2EA] transition-colors`}
                      />
                      {errors.name && (
                        <span className="text-[11px] text-red-400 mt-1 block">
                          {errors.name}
                        </span>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#D4AF37] mb-2">
                        Mobile Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 98765 43210"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className={`w-full px-4 py-3 rounded-xl bg-[#141414] border ${
                          errors.phone ? "border-red-500" : "border-white/10"
                        } focus:border-[#D4AF37] focus:outline-none text-xs sm:text-sm text-[#F5F2EA] transition-colors`}
                      />
                      {errors.phone && (
                        <span className="text-[11px] text-red-400 mt-1 block">
                          {errors.phone}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Event Type & Event Date */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#D4AF37] mb-2">
                        Service / Event Type *
                      </label>
                      <select
                        value={formData.eventType}
                        onChange={(e) =>
                          setFormData({ ...formData, eventType: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-[#141414] border border-white/10 focus:border-[#D4AF37] focus:outline-none text-xs sm:text-sm text-[#F5F2EA] transition-colors"
                      >
                        <option value="Wedding & Event Photography">
                          Wedding &amp; Event Photography
                        </option>
                        <option value="Modeling Portfolio">Modeling Portfolio</option>
                        <option value="Pre-Wedding Photography">
                          Pre-Wedding Photography
                        </option>
                        <option value="Post-Wedding Shoot">Post-Wedding Shoot</option>
                        <option value="Video Shoot & Droneography">
                          Video Shoot &amp; Droneography
                        </option>
                        <option value="All Types of Video Shoot & Editing">
                          All Types of Video Shoot &amp; Editing
                        </option>
                        <option value="Other Bespoke Celebration">
                          Other Bespoke Celebration
                        </option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#D4AF37] mb-2">
                        Event Date / Window *
                      </label>
                      <input
                        type="date"
                        required
                        value={formData.eventDate}
                        onChange={(e) =>
                          setFormData({ ...formData, eventDate: e.target.value })
                        }
                        className={`w-full px-4 py-3 rounded-xl bg-[#141414] border ${
                          errors.eventDate ? "border-red-500" : "border-white/10"
                        } focus:border-[#D4AF37] focus:outline-none text-xs sm:text-sm text-[#F5F2EA] transition-colors`}
                      />
                      {errors.eventDate && (
                        <span className="text-[11px] text-red-400 mt-1 block">
                          {errors.eventDate}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Email & Location */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#D4AF37] mb-2">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        placeholder="you@domain.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-[#141414] border border-white/10 focus:border-[#D4AF37] focus:outline-none text-xs sm:text-sm text-[#F5F2EA] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#D4AF37] mb-2">
                        City / Shoot Destination
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Faridabad, Jaipur, Udaipur"
                        value={formData.location}
                        onChange={(e) =>
                          setFormData({ ...formData, location: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-[#141414] border border-white/10 focus:border-[#D4AF37] focus:outline-none text-xs sm:text-sm text-[#F5F2EA] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#D4AF37] mb-2">
                      Describe Your Vision / Requirements
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Share details about the venues, rituals, guest scale, or specific cinematic shots you dream of..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-[#141414] border border-white/10 focus:border-[#D4AF37] focus:outline-none text-xs sm:text-sm text-[#F5F2EA] transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4 px-8 rounded-full bg-gradient-to-r from-[#FCEBA4] via-[#D4AF37] to-[#F5D88A] text-[#050505] text-xs sm:text-sm font-bold uppercase tracking-[0.2em] shadow-[0_0_25px_rgba(212,175,55,0.4)] hover:shadow-[0_0_40px_rgba(212,175,55,0.8)] hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 flex items-center justify-center gap-2 mt-4"
                  >
                    <Send className="w-4 h-4 text-[#050505]" />
                    <span>Send Booking Inquiry via WhatsApp</span>
                  </button>

                  <p className="text-[11px] text-center text-[#A5A5A5] pt-2">
                    Direct instant connection • No wait times • Transparent pricing
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
