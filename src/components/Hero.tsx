"use client";

import { useRef, useEffect, useState } from "react";
import {
  motion,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { useLocale } from "@/i18n/LanguageContext";
import { translations, t, type Locale } from "@/i18n/translations";

function clamp(v: number, min: number, max: number) {
  return Math.min(Math.max(v, min), max);
}

function lerp(p: number, from: number, to: number) {
  return from + (to - from) * p;
}

function range(value: number, start: number, end: number) {
  return clamp((value - start) / (end - start), 0, 1);
}

function extractFrames(
  video: HTMLVideoElement,
  interval: number,
  onFrame: (frame: ImageBitmap, index: number) => void,
  onDone: (total: number) => void
) {
  const canvas = document.createElement("canvas");
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  const ctx = canvas.getContext("2d", { alpha: false })!;
  let frameIndex = 0;
  let nextCapture = 0;

  const captureFrame = () => {
    if (video.currentTime >= nextCapture) {
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      createImageBitmap(canvas).then((bmp) => {
        onFrame(bmp, frameIndex);
        frameIndex++;
      });
      nextCapture += interval;
    }
  };

  video.addEventListener("ended", () => {
    setTimeout(() => onDone(frameIndex), 100);
  }, { once: true });

  const hasRVFC = "requestVideoFrameCallback" in HTMLVideoElement.prototype;
  if (hasRVFC) {
    let id: number;
    const onVideoFrame = () => {
      captureFrame();
      if (!video.ended) {
        id = (video as any).requestVideoFrameCallback(onVideoFrame);
      }
    };
    id = (video as any).requestVideoFrameCallback(onVideoFrame);
  } else {
    const onTimeUpdate = () => {
      captureFrame();
      if (video.ended) video.removeEventListener("timeupdate", onTimeUpdate);
    };
    video.addEventListener("timeupdate", onTimeUpdate);
  }

  video.playbackRate = 4;
  video.play();
}

/* ─── Shared content block ─── */
function HeroContent({ locale, className = "" }: { locale: Locale; className?: string }) {
  const h = translations.hero;
  const kpis = [
    { value: "5–15%", label: t(h.kpi_revenue, locale) },
    { value: "€100K+", label: t(h.kpi_margin, locale) },
    { value: "€250K+", label: t(h.kpi_cash, locale) },
    { value: "30", label: t(h.kpi_forecast, locale) },
  ];

  return (
    <div className={className}>
      <h2
        className="text-2xl md:text-[2.75rem] leading-[1.1] tracking-[-0.02em] max-w-[28ch]"
        style={{ fontFamily: "var(--serif)" }}
      >
        {t(h.headline, locale).split("\n").map((line, i) => (
          <span key={i}>
            {i > 0 && <br />}
            {i === 1 ? <span className="italic">{line}</span> : line}
          </span>
        ))}
      </h2>

      <p className="mt-4 md:mt-5 text-foreground-muted text-[14px] md:text-[15px] leading-relaxed max-w-[60ch]">
        {t(h.subheadline, locale)}
      </p>

      <div className="mt-6 md:mt-8 grid grid-cols-2 md:grid-cols-4 gap-px bg-border border border-border overflow-hidden" style={{ borderRadius: "8px" }}>
        {kpis.map((kpi) => (
          <div key={kpi.label} className="bg-surface px-4 py-3 md:px-5 md:py-4">
            <span
              className="text-lg md:text-2xl tracking-tight text-foreground"
              style={{ fontFamily: "var(--serif)" }}
            >
              {kpi.value}
            </span>
            <p className="mt-1 text-[10px] md:text-[11px] font-mono text-foreground-muted tracking-wide uppercase">
              {kpi.label}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-6 md:mt-8">
        <span className="text-accent text-[11px] font-mono tracking-[0.15em] uppercase">
          {t(h.mission_label, locale)}
        </span>
        <div className="mt-3 grid md:grid-cols-2 gap-x-8 gap-y-1.5 md:gap-y-2">
          {h.mission_steps.map((step, i) => (
            <div key={i} className="flex items-start gap-3 py-1">
              <span className="text-accent text-[11px] font-mono mt-0.5 shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-foreground-muted text-[12px] md:text-[13px] leading-relaxed">
                {t(step, locale)}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-3 md:gap-4">
        <motion.a
          href="#contact"
          className="inline-flex items-center justify-center bg-foreground text-background text-[13px] tracking-wide px-7 py-3.5"
          style={{ borderRadius: "4px" }}
          whileHover={{ scale: 1.02, boxShadow: "0 4px 20px rgba(26,26,26,0.12)" }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 400, damping: 15 }}
        >
          {t(h.cta_primary, locale)}
        </motion.a>
        <motion.a
          href="#method"
          className="inline-flex items-center justify-center border border-border text-foreground text-[13px] tracking-wide px-7 py-3.5"
          style={{ borderRadius: "4px" }}
          whileHover={{ scale: 1.01, borderColor: "var(--foreground-subtle)", backgroundColor: "rgba(26,26,26,0.02)" }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 400, damping: 15 }}
        >
          {t(h.cta_secondary, locale)}
        </motion.a>
      </div>
    </div>
  );
}

/* ─── Main Hero ─── */
export function Hero() {
  const { locale } = useLocale();
  const [isMobile, setIsMobile] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const hintRef = useRef<HTMLDivElement>(null);

  const framesRef = useRef<ImageBitmap[]>([]);
  const totalFramesRef = useRef(0);
  const latestProgress = useRef(0);
  const lastFrameIndex = useRef(-1);
  const rafId = useRef(0);
  const [ready, setReady] = useState(false);
  const [videoSrc, setVideoSrc] = useState<string | undefined>(undefined);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    // Defer video load until after first paint — page renders instantly
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setVideoSrc("/header.mp4");
      });
    });
  }, []);

  // Desktop: extract frames — only after video src is set and loaded
  useEffect(() => {
    if (typeof window !== "undefined" && window.innerWidth < 768) return;
    if (!videoSrc) return;

    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (!video || !canvas) return;

    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    const onMetadata = () => {
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

      extractFrames(video, 1 / 30, (frame, idx) => {
        framesRef.current[idx] = frame;
      }, (total) => {
        totalFramesRef.current = total;
        video.pause();
        video.style.display = "none";
        setReady(true);
      });
    };

    video.addEventListener("loadeddata", onMetadata);
    if (video.readyState >= 2) onMetadata();
    return () => video.removeEventListener("loadeddata", onMetadata);
  }, [videoSrc]);

  // Desktop: RAF draws frames from scroll
  useEffect(() => {
    if (typeof window !== "undefined" && window.innerWidth < 768) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    const tick = () => {
      const total = totalFramesRef.current || framesRef.current.length;
      if (total > 0) {
        const p = clamp(latestProgress.current / 0.65, 0, 1);
        const idx = Math.min(Math.round(p * (total - 1)), total - 1);
        if (idx !== lastFrameIndex.current && framesRef.current[idx]) {
          ctx.drawImage(framesRef.current[idx], 0, 0, canvas.width, canvas.height);
          lastFrameIndex.current = idx;
        }
      }
      rafId.current = requestAnimationFrame(tick);
    };

    rafId.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId.current);
  }, []);

  // Desktop: scroll drives overlay
  useMotionValueEvent(scrollYProgress, "change", (p) => {
    latestProgress.current = p;

    if (!isMobile && overlayRef.current) {
      const rp = range(p, 0.68, 0.88);
      overlayRef.current.style.opacity = String(rp);
      overlayRef.current.style.transform = `translateY(${lerp(rp, 24, 0)}px) translateZ(0)`;
    }

    if (!isMobile && hintRef.current) {
      hintRef.current.style.opacity = String(lerp(range(p, 0, 0.08), 1, 0));
    }
  });

  /* ─── Mobile layout ─── */
  if (isMobile) {
    return (
      <section className="pt-24 pb-16 px-6">
        {/* Video card — uses preload="none" + autoPlay so browser starts downloading
            only after critical content is painted */}
        <div className="relative overflow-hidden bg-[#e8e4df]" style={{ borderRadius: "12px", aspectRatio: "16/9" }}>
          <video
            src={videoSrc}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ boxShadow: "inset 0 0 40px rgba(0,0,0,0.08)" }}
          />
        </div>

        <HeroContent locale={locale} className="mt-8" />
      </section>
    );
  }

  /* ─── Desktop layout (scroll-driven) ─── */
  return (
    <div ref={containerRef} className="relative" style={{ height: "250vh" }}>
      <section className="sticky top-0 h-[100dvh] w-full overflow-hidden" style={{ backgroundColor: "#e8e4df" }}>
        {videoSrc && (
          <video
            ref={videoRef}
            src={videoSrc}
            muted
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover object-center"
            style={ready ? { display: "none" } : undefined}
          />
        )}

        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full"
          style={{ objectFit: "cover" }}
        />

        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 70% 65% at 50% 50%, transparent 30%, var(--background) 85%)",
          }}
        />

        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `
              linear-gradient(to bottom, var(--background) 0%, transparent 12%, transparent 85%, var(--background) 100%),
              linear-gradient(to right, var(--background) 0%, transparent 10%, transparent 90%, var(--background) 100%)
            `,
          }}
        />

        <div
          ref={overlayRef}
          className="absolute inset-0 z-10 flex items-center justify-center"
          style={{ opacity: 0, transform: "translateY(24px) translateZ(0)", willChange: "transform, opacity" }}
        >
          <HeroContent locale={locale} className="max-w-[1000px] px-6 w-full" />
        </div>

        <div
          ref={hintRef}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <motion.div
            className="w-[1px] h-8 bg-foreground-subtle/40"
            animate={{ scaleY: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            style={{ transformOrigin: "top" }}
          />
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-border" />
      </section>
    </div>
  );
}
