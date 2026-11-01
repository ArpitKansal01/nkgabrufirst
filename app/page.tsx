import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ApertureExperience from "@/components/ApertureExperience";
import Services from "@/components/Services";
import FilmBeforeAfter from "@/components/FilmBeforeAfter";
import Portfolio from "@/components/Portfolio";
import WhyChooseUs from "@/components/WhyChooseUs";
import CinematicStatement from "@/components/CinematicStatement";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";
import BookingPopup from "@/components/BookingPopup";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#050505] text-[#F5F2EA] overflow-hidden">
      {/* Scroll Progress Bar */}
      <ScrollProgress />

      {/* Luxury Golden Custom Cursor for Desktop */}
      <CustomCursor />

      {/* Floating Interactive Elements */}
      <BookingPopup />
      <WhatsAppButton />

      {/* Navigation */}
      <Navbar />

      {/* Section A: Cinematic Full-Screen Hero */}
      <Hero />

      {/* Section B: Brand Introduction & Collage */}
      <About />

      {/* Section 5: 3D Camera Experience & Aperture Control */}
      <ApertureExperience />

      {/* Section C: Bespoke Services */}
      <Services />

      {/* Editorial Bonus: Interactive Film Raw vs Graded Truth */}
      <FilmBeforeAfter />

      {/* Section D: Featured Photography Portfolio & Lightbox */}
      <Portfolio />

      {/* Section E: Why Choose NK Gabru Photography? */}
      <WhyChooseUs />

      {/* Section F: Cinematic Brand Statement */}
      <CinematicStatement />

      {/* Section G: Customer Testimonials Carousel */}
      <Testimonials />

      {/* Section H: Contact & Direct Booking */}
      <Contact />

      {/* Section I: Premium Footer */}
      <Footer />
    </main>
  );
}
