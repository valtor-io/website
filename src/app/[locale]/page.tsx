import { Providers } from "@/components/Providers";
import { HtmlLang } from "@/components/HtmlLang";
import { GrainOverlay } from "@/components/GrainOverlay";
import { AmbientBackground } from "@/components/AmbientBackground";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { SectionDivider } from "@/components/SectionDivider";
import { Problem } from "@/components/Problem";
import { WhyFail } from "@/components/WhyFail";
import { Solution } from "@/components/Solution";
import { Method } from "@/components/Method";
import { Results } from "@/components/Results";
import { Proof } from "@/components/Proof";
import { Differentiators } from "@/components/Differentiators";
import { Audience } from "@/components/Audience";
import { Engagement } from "@/components/Engagement";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import type { Locale } from "@/i18n/translations";

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
