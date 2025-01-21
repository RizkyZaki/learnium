import Navbar from "@/components/landing-page/Navbar";
import HeroSection from "@/components/landing-page/HeroSection";
import FeaturesSection from "@/components/landing-page/features/FeaturesSection";
import BenefitsSection from "@/components/landing-page/benefits/BenefitsSection";
import Footer from "@/components/Footer";
import CallToActionSection from "@/components/landing-page/CallToActionSection";

export default function LandingPage() {
  return (
    <div className="bg-primary-backgorund text-white font-sans relative">
      {/* Radial Gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-gradientStart via-gradientMiddle to-gradientEnd opacity-90 z-0"></div>
      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <FeaturesSection />
        <BenefitsSection />
        <CallToActionSection />
        <Footer />
      </div>
    </div>
  );
}
