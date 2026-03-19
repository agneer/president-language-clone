import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import MarketSection from "@/components/MarketSection";
import ComparisonSection from "@/components/ComparisonSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CurriculumSection from "@/components/CurriculumSection";
import PricingSection from "@/components/PricingSection";
import AboutSection from "@/components/AboutSection";
import ImmersionSection from "@/components/ImmersionSection";
import FAQSection from "@/components/FAQSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <StatsSection />
      <MarketSection />
      <ComparisonSection />
      <TestimonialsSection />
      <CurriculumSection />
      <PricingSection />
      <AboutSection />
      <ImmersionSection />
      <FAQSection />
      <FooterSection />
    </main>
  );
};

export default Index;
