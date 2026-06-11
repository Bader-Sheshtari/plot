"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import ResultCard from "@/components/ResultCard";
import CharacterCard from "@/components/CharacterCard";
import StoryStructure from "@/components/StoryStructure";
import ScreenplayPreview from "@/components/ScreenplayPreview";
import Footer from "@/components/Footer";

const MOCK_RESULT = {
  title: "The Last Frequency",
  genre: "Thriller",
  tone: "Dark",
  format: "Feature Film",
  synopsis:
    "When a reclusive sound engineer discovers an abandoned radio broadcast that predicts catastrophic events 48 hours before they occur, he must decide whether to warn the world — or stay silent to protect the one secret that could destroy everything he loves. As the signals grow louder and the predictions grow darker, he realizes the broadcast isn't coming from the past. It's coming from the future. His future.",
  characters: [
    {
      name: "Marcus Vane",
      role: "Protagonist",
      personality: "Brilliant, isolated, haunted by guilt",
      goal: "Decode the signal and prevent the next disaster",
      conflict: "His obsession destroys his relationship with his daughter",
      emoji: "🎧",
    },
    {
      name: "Dr. Selene Okafor",
      role: "Ally",
      personality: "Rational, skeptical, fiercely protective",
      goal: "Find a scientific explanation before anyone gets hurt",
      conflict: "She's falling for Marcus while knowing he's losing his mind",
      emoji: "🔬",
    },
    {
      name: "The Archivist",
      role: "Antagonist",
      personality: "Cold, methodical, believes suffering serves a purpose",
      goal: "Ensure the timeline remains unchanged at any cost",
      conflict: "He was Marcus — thirty years from now",
      emoji: "👁️",
    },
    {
      name: "Lyra Vane",
      role: "Supporting",
      personality: "Intuitive, brave, emotionally perceptive",
      goal: "Reconnect with her father before it's too late",
      conflict: "She's the only one who doesn't think he's crazy — because she hears it too",
      emoji: "🎵",
    },
  ],
  structure: {
    beginning:
      "Marcus, living alone in a decaying soundproofed apartment, intercepts a strange looping transmission. Dismissing it as interference, he records it — then the first prediction comes true. A ferry sinks. Exactly 48 hours after the broadcast said it would.",
    middle:
      "As Marcus teams up with Dr. Okafor to decode the signal, mysterious figures begin following them. Each prediction is more personal than the last. When Marcus hears his daughter's name in the broadcast — followed by a date 48 hours away — everything changes. He breaks every rule to find her before time runs out.",
    ending:
      "The final confrontation reveals The Archivist's true identity. Marcus must choose: destroy the signal and lose his only connection to his future self, or let the broadcast play out and accept that some tragedies cannot be stopped. He destroys the transmitter. The predictions stop. But the last recording — never decoded — plays once, quietly, in the dark.",
  },
  scenes: [
    {
      slug: "INT. MARCUS'S STUDIO — 3 A.M.",
      action:
        "The room is a cathedral of wires, reel-to-reel machines, and dead monitors. MARCUS VANE, 44, sits hunched over a mixing board. Static fills the air. Then — a voice. Low. Distorted. Unmistakably human.",
      character: "VOICE (V.O.)",
      parenthetical: "through static",
      dialogue:
        "The ferry leaves at six. It won't arrive.",
    },
    {
      slug: "EXT. HARBOR — DAWN",
      action:
        "Marcus stands at the water's edge, coffee going cold. In the distance, emergency lights blink red and white across the gray water. He pulls out a recorder. Presses play. The voice again. He closes his eyes.",
      character: "MARCUS",
      parenthetical: "quietly, to no one",
      dialogue:
        "How long have you been watching?",
    },
    {
      slug: "INT. UNIVERSITY RESEARCH LAB — DAY",
      action:
        "Dr. Okafor examines the waveform on her screen. She tilts her head. Zooms in. The frequency pattern is unlike anything in any known database. She looks at Marcus for a long moment.",
      character: "DR. OKAFOR",
      dialogue:
        "This signal isn't broadcasting from any tower I've ever mapped. Marcus — this is broadcasting from inside a closed loop. The source and the receiver are the same point.",
    },
    {
      slug: "INT. LYRA'S APARTMENT — NIGHT",
      action:
        "Marcus stands at his daughter's door. She opens it. The silence between them is years wide. He holds up his phone. Plays her the recording. Her face changes. She takes a slow step backward.",
      character: "LYRA",
      parenthetical: "barely a whisper",
      dialogue:
        "Dad. That's my voice.",
    },
  ],
};

export default function ResultsPage() {
  const [copied, setCopied] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(
      MOCK_RESULT.synopsis + "\n\n" + MOCK_RESULT.structure.beginning
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />

      {/* Hero banner */}
      <section
        className="pt-28 pb-12 px-6"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(201,168,76,0.08) 0%, transparent 60%), #0a0a0f",
          borderBottom: "1px solid rgba(201,168,76,0.1)",
        }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div
                className="inline-flex items-center gap-2 px-3 py-1 rounded text-xs font-bold mb-4"
                style={{
                  background: "rgba(201,168,76,0.1)",
                  border: "1px solid rgba(201,168,76,0.3)",
                  color: "#c9a84c",
                  letterSpacing: "0.15em",
                }}
              >
                ✦ SCREENPLAY GENERATED
              </div>
              <h1
                style={{
                  fontSize: "clamp(2rem, 5vw, 4rem)",
                  fontWeight: 900,
                  color: "#fff",
                  lineHeight: 1,
                  letterSpacing: "-0.02em",
                }}
              >
                {MOCK_RESULT.title}
              </h1>
              <div className="flex flex-wrap gap-3 mt-4">
                {[MOCK_RESULT.genre, MOCK_RESULT.tone, MOCK_RESULT.format].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full font-medium"
                      style={{
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(201,168,76,0.2)",
                        color: "rgba(232,232,240,0.6)",
                      }}
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap gap-3">
              <button
                onClick={handleCopy}
                className="btn-secondary px-4 py-2 text-xs flex items-center gap-2"
              >
                {copied ? "✓ Copied!" : "📋 Copy Script"}
              </button>
              <Link href="/create" className="btn-secondary px-4 py-2 text-xs flex items-center gap-2">
                🔄 Regenerate
              </Link>
              <button
                className="btn-secondary px-4 py-2 text-xs flex items-center gap-2"
                onClick={() => window.print()}
              >
                📄 Export PDF
              </button>
              <button
                onClick={handleSave}
                className="btn-primary px-4 py-2 text-xs flex items-center gap-2"
              >
                {saved ? "✓ Saved!" : "💾 Save Project"}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="flex-1 py-12 px-6" style={{ background: "#0a0a0f" }}>
        <div className="max-w-5xl mx-auto flex flex-col gap-8">
          {/* Synopsis */}
          <ResultCard title="Story Synopsis" badge="SYNOPSIS" badgeColor="#c9a84c">
            <p
              style={{
                fontSize: "1.05rem",
                color: "rgba(232,232,240,0.8)",
                lineHeight: 1.85,
                fontStyle: "italic",
              }}
            >
              &ldquo;{MOCK_RESULT.synopsis}&rdquo;
            </p>
          </ResultCard>

          {/* Characters */}
          <ResultCard
            title="Main Characters"
            badge="CHARACTERS"
            badgeColor="#e63946"
            action={
              <span
                className="text-xs"
                style={{ color: "rgba(232,232,240,0.3)" }}
              >
                {MOCK_RESULT.characters.length} characters
              </span>
            }
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {MOCK_RESULT.characters.map((char) => (
                <CharacterCard key={char.name} char={char} />
              ))}
            </div>
          </ResultCard>

          {/* Story Structure */}
          <ResultCard title="Story Structure" badge="3-ACT STRUCTURE" badgeColor="#c9a84c">
            <StoryStructure structure={MOCK_RESULT.structure} />
          </ResultCard>

          {/* Screenplay */}
          <ResultCard title="Screenplay Draft" badge="DRAFT 1" badgeColor="#e63946">
            <ScreenplayPreview
              title={MOCK_RESULT.title}
              scenes={MOCK_RESULT.scenes}
            />
          </ResultCard>

          {/* Bottom CTAs */}
          <div
            className="rounded-xl p-8 text-center"
            style={{
              background: "rgba(201,168,76,0.04)",
              border: "1px solid rgba(201,168,76,0.15)",
            }}
          >
            <h3
              className="font-black mb-2"
              style={{ fontSize: "1.5rem", color: "#fff" }}
            >
              Your screenplay is just the beginning.
            </h3>
            <p
              className="text-sm mb-6"
              style={{ color: "rgba(232,232,240,0.5)" }}
            >
              Save this project and continue building your cinematic world.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button
                onClick={handleSave}
                className="btn-primary px-8 py-3 text-sm"
              >
                Save to My Projects
              </button>
              <Link href="/create" className="btn-secondary px-8 py-3 text-sm">
                Create Another Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
