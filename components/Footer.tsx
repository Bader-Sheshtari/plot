"use client";

import Link from "next/link";

const studioBadges = [
  "CINE STUDIO",
  "GLOBAL PICTURES",
  "NOVA FILMS",
  "ATLAS CINEMA",
  "MERIDIAN",
  "STELLAR ARTS",
];

export default function Footer() {
  return (
    <footer
      style={{
        background: "linear-gradient(180deg, #0a0a0f 0%, #06060a 100%)",
        borderTop: "1px solid rgba(201,168,76,0.12)",
      }}
    >
      {/* Studio partners strip */}
      <div
        className="border-b"
        style={{ borderColor: "rgba(201,168,76,0.08)" }}
      >
        <div className="max-w-7xl mx-auto px-6 py-6">
          <p
            className="text-center text-xs mb-5"
            style={{ color: "rgba(232,232,240,0.3)", letterSpacing: "0.2em" }}
          >
            INSPIRED BY THE WORLD'S GREATEST CINEMA TRADITIONS
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {studioBadges.map((badge) => (
              <div
                key={badge}
                className="px-4 py-1.5 rounded"
                style={{
                  border: "1px solid rgba(201,168,76,0.2)",
                  color: "rgba(201,168,76,0.5)",
                  fontSize: "0.65rem",
                  letterSpacing: "0.2em",
                  fontWeight: 700,
                }}
              >
                {badge}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-10 h-10 flex items-center justify-center rounded"
                style={{
                  background: "linear-gradient(135deg, #c9a84c, #f0d080)",
                }}
              >
                <span style={{ color: "#0a0a0f", fontWeight: 900, fontSize: "1.1rem" }}>
                  P
                </span>
              </div>
              <span
                style={{
                  fontSize: "1.6rem",
                  fontWeight: 800,
                  letterSpacing: "0.15em",
                }}
              >
                PLO<span className="text-gold">T</span>
              </span>
            </div>
            <p
              className="text-sm leading-relaxed mb-6 max-w-xs"
              style={{ color: "rgba(232,232,240,0.45)" }}
            >
              AI-powered screenplay generation for the world's next generation
              of filmmakers, writers, and dreamers.
            </p>
            <div className="flex flex-col gap-1">
              {[
                '"Your idea deserves a movie."',
                '"From imagination to screenplay."',
                '"Write like a studio."',
              ].map((quote) => (
                <p
                  key={quote}
                  className="text-xs italic"
                  style={{ color: "rgba(201,168,76,0.5)" }}
                >
                  {quote}
                </p>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4
              className="text-xs font-bold mb-4"
              style={{ color: "#c9a84c", letterSpacing: "0.2em" }}
            >
              PLATFORM
            </h4>
            <div className="flex flex-col gap-3">
              {[
                { href: "/", label: "Home" },
                { href: "/create", label: "Create Plot" },
                { href: "/projects", label: "My Projects" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm transition-colors duration-200"
                  style={{ color: "rgba(232,232,240,0.45)" }}
                  onMouseEnter={(e) =>
                    ((e.target as HTMLElement).style.color = "#c9a84c")
                  }
                  onMouseLeave={(e) =>
                    ((e.target as HTMLElement).style.color =
                      "rgba(232,232,240,0.45)")
                  }
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Cinema */}
          <div>
            <h4
              className="text-xs font-bold mb-4"
              style={{ color: "#c9a84c", letterSpacing: "0.2em" }}
            >
              CINEMA WORLD
            </h4>
            <div className="flex flex-col gap-3">
              {[
                "Hollywood",
                "Bollywood",
                "Arab Cinema",
                "European Film",
                "World Cinema",
              ].map((item) => (
                <span
                  key={item}
                  className="text-sm"
                  style={{ color: "rgba(232,232,240,0.3)" }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="divider-gold mt-10 mb-6" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p
            className="text-xs"
            style={{ color: "rgba(232,232,240,0.25)", letterSpacing: "0.05em" }}
          >
            © 2025 PLOT. All rights reserved. Built for dreamers worldwide.
          </p>
          <p
            className="text-xs"
            style={{ color: "rgba(201,168,76,0.4)", letterSpacing: "0.1em" }}
          >
            ONE IDEA. ONE CLICK. ONE CINEMATIC WORLD.
          </p>
        </div>
      </div>
    </footer>
  );
}
