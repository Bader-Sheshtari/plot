"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

const TAGLINES = [
  "From imagination to screenplay.",
  "Write like a studio.",
  "Build the next global story.",
  "One idea. One click. One cinematic world.",
];

function FilmReel({ size = 120, opacity = 0.12 }: { size?: number; opacity?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      style={{ opacity }}
    >
      <circle cx="60" cy="60" r="55" stroke="#c9a84c" strokeWidth="2" />
      <circle cx="60" cy="60" r="42" stroke="#c9a84c" strokeWidth="1" />
      <circle cx="60" cy="60" r="10" fill="#c9a84c" fillOpacity="0.3" />
      {[0, 60, 120, 180, 240, 300].map((angle) => {
        const rad = (angle * Math.PI) / 180;
        const x = 60 + 30 * Math.cos(rad);
        const y = 60 + 30 * Math.sin(rad);
        return (
          <circle key={angle} cx={x} cy={y} r="8" fill="#c9a84c" fillOpacity="0.2" />
        );
      })}
      {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle) => {
        const rad = (angle * Math.PI) / 180;
        const x1 = 60 + 43 * Math.cos(rad);
        const y1 = 60 + 43 * Math.sin(rad);
        const x2 = 60 + 54 * Math.cos(rad);
        const y2 = 60 + 54 * Math.sin(rad);
        return (
          <line key={angle} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#c9a84c" strokeWidth="2" />
        );
      })}
    </svg>
  );
}

export default function HeroSection() {
  const taglineRef = useRef<HTMLSpanElement>(null);
  const idxRef = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!taglineRef.current) return;
      taglineRef.current.style.opacity = "0";
      taglineRef.current.style.transform = "translateY(10px)";
      setTimeout(() => {
        idxRef.current = (idxRef.current + 1) % TAGLINES.length;
        if (taglineRef.current) {
          taglineRef.current.textContent = TAGLINES[idxRef.current];
          taglineRef.current.style.opacity = "1";
          taglineRef.current.style.transform = "translateY(0)";
        }
      }, 400);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ paddingTop: "80px" }}
    >
      {/* Background layers */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 30%, rgba(201,168,76,0.08) 0%, transparent 70%), radial-gradient(ellipse 60% 80% at 80% 70%, rgba(230,57,70,0.05) 0%, transparent 60%), #0a0a0f",
        }}
      />

      {/* Spotlight beams */}
      <div
        className="absolute"
        style={{
          top: "-10%",
          left: "15%",
          width: "600px",
          height: "900px",
          background:
            "conic-gradient(from 260deg at 50% 0%, transparent 0deg, rgba(201,168,76,0.06) 15deg, transparent 30deg)",
          transformOrigin: "top center",
          animation: "float 8s ease-in-out infinite",
        }}
      />
      <div
        className="absolute"
        style={{
          top: "-10%",
          right: "15%",
          width: "600px",
          height: "900px",
          background:
            "conic-gradient(from 280deg at 50% 0%, transparent 0deg, rgba(201,168,76,0.05) 20deg, transparent 40deg)",
          transformOrigin: "top center",
          animation: "float 10s ease-in-out infinite reverse",
        }}
      />

      {/* Film reels decorations */}
      <div
        className="absolute animate-spin-slow"
        style={{ top: "8%", right: "5%", opacity: 0.08 }}
      >
        <FilmReel size={180} opacity={1} />
      </div>
      <div
        className="absolute"
        style={{
          bottom: "12%",
          left: "4%",
          opacity: 0.06,
          animation: "spin-slow 30s linear infinite reverse",
        }}
      >
        <FilmReel size={140} opacity={1} />
      </div>

      {/* Film strip top */}
      <div
        className="absolute top-0 left-0 right-0 h-2 flex"
        style={{ opacity: 0.15 }}
      >
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="flex-1"
            style={{
              background:
                i % 3 === 0
                  ? "rgba(201,168,76,0.8)"
                  : "rgba(201,168,76,0.1)",
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="flex justify-center mb-8">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold"
            style={{
              background: "rgba(201,168,76,0.08)",
              border: "1px solid rgba(201,168,76,0.25)",
              color: "#c9a84c",
              letterSpacing: "0.15em",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full animate-pulse-gold"
              style={{ background: "#c9a84c" }}
            />
            AI-POWERED SCREENPLAY GENERATOR
          </div>
        </div>

        {/* Headline */}
        <h1
          className="mb-6"
          style={{
            fontSize: "clamp(2.8rem, 8vw, 6.5rem)",
            fontWeight: 900,
            lineHeight: 0.95,
            letterSpacing: "-0.02em",
            color: "#fff",
          }}
        >
          Turn Your{" "}
          <span className="text-gold">Movie Idea</span>
          <br />
          Into a Full{" "}
          <span className="text-cinema">Screenplay</span>
        </h1>

        {/* Sub */}
        <p
          className="mb-4 mx-auto max-w-2xl"
          style={{
            fontSize: "clamp(1rem, 2vw, 1.2rem)",
            color: "rgba(232,232,240,0.6)",
            lineHeight: 1.7,
          }}
        >
          PLOT helps you transform one simple idea into a complete story,
          characters, scenes, and screenplay draft using AI.
        </p>

        {/* Rotating tagline */}
        <div className="mb-10 h-8 flex items-center justify-center">
          <span
            ref={taglineRef}
            className="text-sm font-medium italic"
            style={{
              color: "rgba(201,168,76,0.75)",
              transition: "opacity 0.4s ease, transform 0.4s ease",
              letterSpacing: "0.05em",
            }}
          >
            {TAGLINES[0]}
          </span>
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 justify-center mb-16">
          <Link href="/create" className="btn-primary px-8 py-4 text-sm">
            ✦ Start Creating
          </Link>
          <Link href="#steps" className="btn-secondary px-8 py-4 text-sm">
            View Demo
          </Link>
        </div>

        {/* Stats */}
        <div
          className="flex flex-wrap justify-center gap-8 md:gap-16"
          style={{ borderTop: "1px solid rgba(201,168,76,0.1)", paddingTop: "2rem" }}
        >
          {[
            { value: "50K+", label: "Stories Generated" },
            { value: "120+", label: "Countries" },
            { value: "15+", label: "Genres" },
            { value: "99%", label: "Satisfaction" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div
                className="text-gold"
                style={{ fontSize: "1.8rem", fontWeight: 800, letterSpacing: "-0.02em" }}
              >
                {stat.value}
              </div>
              <div
                className="text-xs mt-1"
                style={{ color: "rgba(232,232,240,0.35)", letterSpacing: "0.1em" }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: "linear-gradient(transparent, #0a0a0f)",
        }}
      />

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ color: "rgba(201,168,76,0.4)", animation: "float 2s ease-in-out infinite" }}
      >
        <div className="text-xs" style={{ letterSpacing: "0.2em" }}>SCROLL</div>
        <div
          className="w-px h-8"
          style={{ background: "linear-gradient(#c9a84c, transparent)" }}
        />
      </div>
    </section>
  );
}
