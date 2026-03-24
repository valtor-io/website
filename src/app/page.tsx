import dynamic from "next/dynamic";
import { Providers } from "@/components/Providers";
import { GrainOverlay } from "@/components/GrainOverlay";
import { AmbientBackground } from "@/components/AmbientBackground";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { SectionDivider } from "@/components/SectionDivider";

// Lazy load below-the-fold sections — they don't need to block initial paint
const Problem = dynamic(() => import("@/components/Problem").then(m => ({ default: m.Problem })));
const Solution = dynamic(() => import("@/components/Solution").then(m => ({ default: m.Solution })));
const Method = dynamic(() => import("@/components/Method").then(m => ({ default: m.Method })));
const Results = dynamic(() => import("@/components/Results").then(m => ({ default: m.Results })));
const Differentiators = dynamic(() => import("@/components/Differentiators").then(m => ({ default: m.Differentiators })));
const Audience = dynamic(() => import("@/components/Audience").then(m => ({ default: m.Audience })));
const Contact = dynamic(() => import("@/components/Contact").then(m => ({ default: m.Contact })));
const Footer = dynamic(() => import("@/components/Footer").then(m => ({ default: m.Footer })));

export default function Home() {
  return (
    <Providers>
      <GrainOverlay />
      <AmbientBackground />
      <Navigation />
      <main>
        <Hero />
        <SectionDivider />
        <Problem />
        <Solution />
        <SectionDivider />
        <Method />
        <Results />
        <SectionDivider />
        <Differentiators />
        <Audience />
        <SectionDivider />
        <Contact />
      </main>
      <Footer />
    </Providers>
  );
}
