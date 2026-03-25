import dynamic from "next/dynamic";
import { Providers } from "@/components/Providers";
import { GrainOverlay } from "@/components/GrainOverlay";
import { AmbientBackground } from "@/components/AmbientBackground";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { SectionDivider } from "@/components/SectionDivider";

// Lazy load below-the-fold sections
const Problem = dynamic(() => import("@/components/Problem").then(m => ({ default: m.Problem })));
const WhyFail = dynamic(() => import("@/components/WhyFail").then(m => ({ default: m.WhyFail })));
const Solution = dynamic(() => import("@/components/Solution").then(m => ({ default: m.Solution })));
const Method = dynamic(() => import("@/components/Method").then(m => ({ default: m.Method })));
const Results = dynamic(() => import("@/components/Results").then(m => ({ default: m.Results })));
const Proof = dynamic(() => import("@/components/Proof").then(m => ({ default: m.Proof })));
const Differentiators = dynamic(() => import("@/components/Differentiators").then(m => ({ default: m.Differentiators })));
const Audience = dynamic(() => import("@/components/Audience").then(m => ({ default: m.Audience })));
const Engagement = dynamic(() => import("@/components/Engagement").then(m => ({ default: m.Engagement })));
const Contact = dynamic(() => import("@/components/Contact").then(m => ({ default: m.Contact })));
const Footer = dynamic(() => import("@/components/Footer").then(m => ({ default: m.Footer })));

export default function Home() {
  return (
    <Providers>
      <GrainOverlay />
      <AmbientBackground />
      <Navigation />
      <main>
        {/* 1. Hero: sharp positioning + KPIs + what we deliver */}
        <Hero />
        <SectionDivider />

        {/* 2. Problem: your business is not visible */}
        <Problem />

        {/* 3. Why existing approaches fail */}
        <WhyFail />
        <SectionDivider />

        {/* 4. Our approach: what before how */}
        <Solution />

        {/* 5. Methodology: diagnose → structure → improve → steer */}
        <Method />
        <SectionDivider />

        {/* 6. Measurable outcomes */}
        <Results />

        {/* 7. 30/60/90 day proof of value */}
        <Proof />
        <SectionDivider />

        {/* 8. Explicit differentiation */}
        <Differentiators />

        {/* 9. Who it's for */}
        <Audience />
        <SectionDivider />

        {/* 10. Engagement model with pricing */}
        <Engagement />

        {/* 11. CTA: diagnostic call */}
        <Contact />
      </main>
      <Footer />
    </Providers>
  );
}
