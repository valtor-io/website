"use client";

import { useRef, useEffect, useState } from "react";
import {
  motion,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { useLocale } from "@/i18n/LanguageContext";
import { translations, t } from "@/i18n/translations";

function clamp(v: number, min: number, max: number) {
  return Math.min(Math.max(v, min), max);
}

function lerp(p: number, from: number, to: number) {
  return from + (to - from) * p;
}

function range(value: number, start: number, end: number) {
  return clamp((value - start) / (end - start), 0, 1);
}

/**
 * Extract video frames into an ImageBitmap array for instant scroll playback.
 * Plays the video at high speed, capturing a frame every ~interval seconds.
 */
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

  // Always use ended event to finalize — RVFC/timeupdate may miss the exact end
  video.addEventListener("ended", () => {
    // Small delay to let last createImageBitmap resolve
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
      if (video.ended) {
        video.removeEventListener("timeupdate", onTimeUpdate);
      }
    };
    video.addEventListener("timeupdate", onTimeUpdate);
  }

  video.playbackRate = 4;
  video.play();
}

export function Hero() {
  const { locale } = useLocale();
  const h = translations.hero;

  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const hintRef = useRef<HTMLDivElement>(null);

  const framesRef = useRef<ImageBitmap[]>([]);
  const totalFramesRef = useRef(0);
  const durationRef = useRef(0);
  const latestProgress = useRef(0);
  const lastFrameIndex = useRef(-1);
  const rafId = useRef(0);
  const [ready, setReady] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Extract frames on mount
  useEffect(() => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (!video || !canvas) return;

    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    const onMetadata = () => {
      durationRef.current = video.duration;
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;

      // Draw first frame immediately
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

      // Extract frames every ~33ms (≈30fps)
      const INTERVAL = 1 / 30;
      extractFrames(
        video,
        INTERVAL,
        (frame, idx) => {
          framesRef.current[idx] = frame;
        },
        (total) => {
          totalFramesRef.current = total;
          video.pause();
          video.style.display = "none";
          setReady(true);
        }
      );
    };

    video.addEventListener("loadeddata", onMetadata);
    if (video.readyState >= 2) onMetadata();

    return () => video.removeEventListener("loadeddata", onMetadata);
  }, []);

  // RAF loop — draws the right frame based on scroll, zero decode lag
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    const tick = () => {
      // Use total if extraction done, otherwise use frames captured so far
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

  // Scroll updates progress + UI
  useMotionValueEvent(scrollYProgress, "change", (p) => {
    latestProgress.current = p;

    if (overlayRef.current) {
      const rp = range(p, 0.68, 0.88);
      overlayRef.current.style.opacity = String(rp);
      overlayRef.current.style.transform = `translateY(${lerp(rp, 24, 0)}px) translateZ(0)`;
    }

    if (hintRef.current) {
      hintRef.current.style.opacity = String(lerp(range(p, 0, 0.08), 1, 0));
    }
  });

  const kpis = [
    { value: "\u20AC842K", label: t(h.kpi_revenue, locale) },
    { value: "11.4%", label: t(h.kpi_margin, locale) },
    { value: "27 Days", label: t(h.kpi_cash, locale) },
    { value: "68%", label: t(h.kpi_forecast, locale) },
  ];

  return (
    <div ref={containerRef} className="relative h-[200vh] md:h-[250vh]">
      <section className="sticky top-0 h-[100dvh] w-full overflow-hidden">
        {/* Video — only used for frame extraction */}
        <video
          ref={videoRef}
          src="/header.mp4"
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover md:object-cover object-center"
          style={ready ? { display: "none" } : undefined}
        />

        {/* Canvas — displays pre-extracted frames */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full"
          style={{ objectFit: "cover" }}
        />

        {/* Inward radial gradient mask — tighter on mobile */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 65% at 50% 50%, transparent 30%, var(--background) 85%)",
          }}
        />

        {/* Edge vignette — stronger on mobile for readability */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `
              linear-gradient(to bottom, var(--background) 0%, transparent 15%, transparent 80%, var(--background) 100%),
              linear-gradient(to right, var(--background) 0%, transparent 12%, transparent 88%, var(--background) 100%)
            `,
          }}
        />

        {/* Content overlay */}
        <div
          ref={overlayRef}
          className="absolute inset-0 z-10 flex items-center justify-center"
          style={{ opacity: 0, transform: "translateY(24px) translateZ(0)", willChange: "transform, opacity" }}
        >
          {/* Mobile-only subtle background for readability */}
          <div
            className="absolute inset-0 md:hidden"
            style={{
              background: "linear-gradient(to bottom, rgba(250,250,249,0.85) 0%, rgba(250,250,249,0.7) 50%, rgba(250,250,249,0.85) 100%)",
            }}
          />

          <div className="relative z-10 max-w-[1000px] px-6 w-full">
            <h2
              className="text-2xl md:text-[2.75rem] leading-[1.1] tracking-[-0.02em] max-w-[20ch]"
              style={{ fontFamily: "var(--serif)" }}
            >
              {t(h.headline, locale)}
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
        </div>

        {/* Scroll hint */}
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
