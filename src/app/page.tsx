import { HeroSection } from "@/components/marketing/HeroSection";
import { PrivacyIntroSection } from "@/components/marketing/PrivacyIntroSection";
import { PrinciplesSection } from "@/components/marketing/PrinciplesSection";
import { RoadmapSection } from "@/components/marketing/RoadmapSection";
import { SecurityPhilosophySection } from "@/components/marketing/SecurityPhilosophySection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <PrivacyIntroSection />
      <PrinciplesSection />
      <RoadmapSection />
      <SecurityPhilosophySection />
    </>
  );
}
