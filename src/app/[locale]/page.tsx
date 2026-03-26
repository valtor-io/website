import dynamic from "next/dynamic";
import { Providers } from "@/components/Providers";
import { HtmlLang } from "@/components/HtmlLang";
import { GrainOverlay } from "@/components/GrainOverlay";
import { AmbientBackground } from "@/components/AmbientBackground";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { SectionDivider } from "@/components/SectionDivider";
import type { Locale } from "@/i18n/translations";

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
const FAQ = dynamic(() => import("@/components/FAQ").then(m => ({ default: m.FAQ })));
const Contact = dynamic(() => import("@/components/Contact").then(m => ({ default: m.Contact })));
const Footer = dynamic(() => import("@/components/Footer").then(m => ({ default: m.Footer })));

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <Providers locale={locale as Locale}>
      <HtmlLang />
      <GrainOverlay />
      <AmbientBackground />
      <Navigation />
      <main>
        <Hero />
        <SectionDivider />
        <Problem />
        <WhyFail />
        <SectionDivider />
        <Solution />
        <Method />
        <SectionDivider />
        <Results />
        <Proof />
        <SectionDivider />
        <Differentiators />
        <Audience />
        <SectionDivider />
        <Engagement />
        <SectionDivider />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </Providers>
  );
}
