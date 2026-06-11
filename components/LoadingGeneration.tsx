"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const STAGES = [
  { text: "Building your story world…", duration: 1800 },
  { text: "Creating your characters…", duration: 1600 },
  { text: "Structuring the plot…", duration: 1500 },
  { text: "Writing screenplay scenes…", duration: 2000 },
  { text: "Preparing your cinematic draft…", duration: 1200 },
];

export default function LoadingGeneration() {
  const router = useRouter();
  const [stageIndex, setStageIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    let totalElapsed = 0;
    const totalDuration = STAGES.reduce((sum, s) => sum + s.duration, 0);
    const interval = setInterval(() => {
      totalElapsed += 80;
      setProgress(Math.min((totalElapsed / totalDuration) * 100, 98));
    }, 80);

    let delay = 0;
    STAGES.forEach((stage, i) => {
      delay += stage.duration;
      setTimeout(() => {
        setStageIndex(i);
      }, delay - stage.duration);
    });

    const total = STAGES.reduce((s, st) => s + st.duration, 0);
    setTimeout(() => {
      clearInterval(interval);
      setProgress(100);
      setCompleted(true);
      setTimeout(() => router.push("/results"), 800);
    }, total);

    return () => clearInterval(interval);
  }, [router]);

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-6"
      style={{
        background:
          "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(201,168,76,0.06) 0%, transparent 70%), #0a0a0f",
      }}
    >
      {/* Film clapperboard animation */}
      <div className="mb-12 relative">
        <div
          className="w-24 h-24 rounded-2xl flex items-center justify-center"
          style={{
            background: "linear-gradient(135deg, rgba(201,168,76,0.15), rgba(201,168,76,0.05))",
            border: "2px solid rgba(201,168,76,0.3)",
            animation: "pulse-gold 1.5s ease-in-out infinite",
          }}
        >
          <span style={{ fontSize: "2.5rem" }}>🎬</span>
        </div>
        {/* Orbiting dots */}
        {[0, 72, 144, 216, 288].map((angle, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 rounded-full"
            style={{
              top: "50%",
              left: "50%",
              transform: `rotate(${angle}deg) translateX(56px) translateY(-50%)`,
              background: i % 2 === 0 ? "#c9a84c" : "#e63946",
              opacity: 0.7,
              animation: `spin-slow ${3 + i * 0.5}s linear infinite`,
            }}
          />
        ))}
      </div>

      {/* Stage text */}
      <div className="text-center mb-10">
        <div
          className="mb-2 text-xs font-bold"
          style={{ color: "rgba(201,168,76,0.5)", letterSpacing: "0.3em" }}
        >
          AI IS GENERATING
        </div>
        <div
          key={stageIndex}
          className="animate-fade-up"
          style={{
            fontSize: "clamp(1.3rem, 3vw, 1.8rem)",
            fontWeight: 700,
            color: "#fff",
            minHeight: "2.5rem",
          }}
        >
          {STAGES[stageIndex]?.text}
        </div>
      </div>

      {/* Progress bar */}
      <div className="w-full max-w-md">
        <div className="flex justify-between text-xs mb-2" style={{ color: "rgba(232,232,240,0.4)" }}>
          <span>Progress</span>
          <span style={{ color: "#c9a84c" }}>{Math.round(progress)}%</span>
        </div>
        <div
          className="h-1.5 rounded-full overflow-hidden"
          style={{ background: "rgba(201,168,76,0.1)" }}
        >
          <div
            className="h-full rounded-full transition-all duration-300"
            style={{
              width: `${progress}%`,
              background: completed
                ? "linear-gradient(90deg, #c9a84c, #f0d080)"
                : "linear-gradient(90deg, #e63946, #c9a84c, #f0d080)",
              boxShadow: "0 0 12px rgba(201,168,76,0.5)",
            }}
          />
        </div>
      </div>

      {/* Stage list */}
      <div className="mt-10 flex flex-col gap-3 w-full max-w-sm">
        {STAGES.map((stage, i) => (
          <div
            key={i}
            className="flex items-center gap-3 text-sm transition-all duration-300"
            style={{
              opacity: i <= stageIndex ? 1 : 0.25,
              color:
                i < stageIndex
                  ? "rgba(201,168,76,0.8)"
                  : i === stageIndex
                  ? "#fff"
                  : "rgba(232,232,240,0.3)",
            }}
          >
            <span
              className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 text-xs"
              style={{
                background:
                  i < stageIndex
                    ? "linear-gradient(135deg, #c9a84c, #f0d080)"
                    : i === stageIndex
                    ? "rgba(201,168,76,0.2)"
                    : "rgba(255,255,255,0.05)",
                border:
                  i === stageIndex
                    ? "1px solid rgba(201,168,76,0.5)"
                    : "none",
                color: i < stageIndex ? "#0a0a0f" : "#c9a84c",
                fontWeight: 700,
              }}
            >
              {i < stageIndex ? "✓" : i + 1}
            </span>
            {stage.text.replace("…", "")}
          </div>
        ))}
      </div>

      {completed && (
        <div
          className="mt-8 text-sm animate-fade-up"
          style={{ color: "#c9a84c", letterSpacing: "0.1em" }}
        >
          ✦ Your screenplay is ready — loading results…
        </div>
      )}
    </div>
  );
}
