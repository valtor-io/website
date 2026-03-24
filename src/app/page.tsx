import { Providers } from "@/components/Providers";
import { GrainOverlay } from "@/components/GrainOverlay";
import { AmbientBackground } from "@/components/AmbientBackground";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { Solution } from "@/components/Solution";
import { Method } from "@/components/Method";
import { Results } from "@/components/Results";
import { Differentiators } from "@/components/Differentiators";
import { Audience } from "@/components/Audience";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { SectionDivider } from "@/components/SectionDivider";

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
