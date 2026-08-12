import { HeroSection } from "@/components/sections/HeroSection";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ServiceComparison } from "@/components/sections/ServiceComparison";
import { SignsSection } from "@/components/sections/SignsSection";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { AboutPravinSection } from "@/components/sections/AboutPravinSection";
import { CommercialSection } from "@/components/sections/CommercialSection";
import { WorkGallery } from "@/components/sections/WorkGallery";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { ServiceAreasSection } from "@/components/sections/ServiceAreasSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";

export default function HomePage() {
  return (
    <main className="min-h-screen pb-safe-bottom">
      <HeroSection />
      <TrustStrip />
      <ServicesSection />
      <ServiceComparison />
      <SignsSection />
      <WhyChooseUs />
      <AboutPravinSection />
      <CommercialSection />
      <WorkGallery />
      <ReviewsSection />
      <ServiceAreasSection />
      <FinalCTASection />
    </main>
  );
}
