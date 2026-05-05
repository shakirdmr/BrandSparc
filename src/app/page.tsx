import Hero from "@/components/sections/Hero";
import PainPoints from "@/components/sections/PainPoints";
import SocialProof from "@/components/sections/SocialProof";
import Services from "@/components/sections/Services";
import HowItWorks from "@/components/sections/HowItWorks";
import Results from "@/components/sections/Results";
import Pricing from "@/components/sections/Pricing";
import FAQSection from "@/components/sections/FAQ";
import SiteFooter from "@/components/sections/SiteFooter";

export default function Home() {
  return (
    <main>
      <Hero />
      <PainPoints />
      <SocialProof />
      <Services />
      <HowItWorks />
      <Results />
      <Pricing />
      <FAQSection />
      <SiteFooter />
    </main>
  );
}
