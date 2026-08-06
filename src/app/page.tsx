import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import PracticeAreas from "@/components/sections/PracticeAreas";
import Results from "@/components/sections/Results";
import About from "@/components/sections/About";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Testimonials from "@/components/sections/Testimonials";
import CaseResults from "@/components/sections/CaseResults";
import ConsultationCTA from "@/components/sections/ConsultationCTA";
import FAQ from "@/components/sections/FAQ";
import InsightsPreview from "@/components/sections/InsightsPreview";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <PracticeAreas />
      <Results />
      <About />
      <WhyChooseUs />
      <Testimonials />
      <CaseResults />
      <ConsultationCTA />
      <FAQ />
      <InsightsPreview />
    </>
  );
}
