"use client";

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import UserIntroForm from "@/components/UserIntroForm";
import MainSteps from "@/components/MainSteps";
import Footer from "@/components/Footer";

const QUOTES = [
  { text: "Your idea deserves a movie.", sub: "Every great film started with a single thought." },
  { text: "Build the next global story.", sub: "Hollywood, Bollywood, Arab cinema — it all began with a writer." },
  { text: "Write like a studio. Create like a filmmaker.", sub: "Professional screenplay tools, zero learning curve." },
];

const GENRES = [
  { name: "THRILLER", color: "#e63946", icon: "🔪" },
  { name: "DRAMA", color: "#c9a84c", icon: "🎭" },
  { name: "SCI-FI", color: "#4cc9f0", icon: "🚀" },
  { name: "ROMANCE", color: "#ff6b9d", icon: "💫" },
  { name: "ACTION", color: "#f77f00", icon: "💥" },
  { name: "HORROR", color: "#9b5de5", icon: "👁️" },
];

export default function Home() {
  return (
    <main className="flex flex-col">
      <Navbar />
      <HeroSection />

      {/* Quotes section */}
      <section
        className="py-20 px-6 overflow-hidden"
        style={{
          background: "linear-gradient(180deg, #0a0a0f 0%, #111118 50%, #0a0a0f 100%)",
          borderTop: "1px solid rgba(201,168,76,0.08)",
          borderBottom: "1px solid rgba(201,168,76,0.08)",
        }}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {QUOTES.map((q, i) => (
            <div
              key={i}
              className="text-center px-6"
              style={{ borderRight: i < 2 ? "1px solid rgba(201,168,76,0.1)" : "none" }}
            >
              <div
                className="text-2xl font-black mb-2"
                style={{ color: "#fff", lineHeight: 1.2, letterSpacing: "-0.01em" }}
              >
                &ldquo;{q.text}&rdquo;
              </div>
              <p className="text-sm" style={{ color: "rgba(232,232,240,0.4)", lineHeight: 1.6 }}>
                {q.sub}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Genre showcase */}
      <section className="py-20 px-6" style={{ background: "#0a0a0f" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 800, color: "#fff" }}>
              Every Genre. <span className="text-gold">Every Story.</span>
            </h2>
            <p className="mt-2 text-sm" style={{ color: "rgba(232,232,240,0.4)" }}>
              From Hollywood blockbusters to intimate indie dramas.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {GENRES.map((g) => (
              <div
                key={g.name}
                className="flex flex-col items-center gap-3 py-6 px-4 rounded-xl transition-all duration-300 cursor-pointer"
                style={{ background: "rgba(255,255,255,0.02)", border: `1px solid ${g.color}20` }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = `${g.color}10`;
                  el.style.borderColor = `${g.color}50`;
                  el.style.transform = "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = "rgba(255,255,255,0.02)";
                  el.style.borderColor = `${g.color}20`;
                  el.style.transform = "translateY(0)";
                }}
              >
                <span style={{ fontSize: "1.5rem" }}>{g.icon}</span>
                <span className="text-xs font-black" style={{ color: g.color, letterSpacing: "0.1em" }}>
                  {g.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <MainSteps />
      <UserIntroForm />

      {/* Cinema cultures section */}
      <section
        className="py-20 px-6"
        style={{
          background: "linear-gradient(180deg, #0a0a0f 0%, #0d0d12 100%)",
          borderTop: "1px solid rgba(201,168,76,0.08)",
        }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <div
              className="text-xs font-bold mb-3"
              style={{ color: "#c9a84c", letterSpacing: "0.3em" }}
            >
              GLOBAL CINEMA INSPIRATIONS
            </div>
            <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, color: "#fff" }}>
              Inspired by the World&apos;s{" "}
              <span className="text-cinema">Greatest Cinemas</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: "Hollywood", flag: "🇺🇸", desc: "Blockbusters, franchises, and the art of spectacle", color: "#c9a84c" },
              { title: "Bollywood", flag: "🇮🇳", desc: "Emotion, music, drama, and vibrant storytelling", color: "#f77f00" },
              { title: "Arab Cinema", flag: "🌙", desc: "Rich cultural narratives, poetry, and human depth", color: "#4cc9f0" },
              { title: "World Cinema", flag: "🌍", desc: "European arthouse to Korean thrillers — globally inspired", color: "#9b5de5" },
            ].map((cinema) => (
              <div
                key={cinema.title}
                className="rounded-xl p-6 text-center transition-all duration-300"
                style={{ background: "rgba(255,255,255,0.02)", border: `1px solid ${cinema.color}18` }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = `${cinema.color}40`;
                  el.style.transform = "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = `${cinema.color}18`;
                  el.style.transform = "translateY(0)";
                }}
              >
                <div className="text-3xl mb-3">{cinema.flag}</div>
                <h3 className="font-bold mb-2" style={{ color: cinema.color, letterSpacing: "0.05em" }}>
                  {cinema.title}
                </h3>
                <p className="text-xs leading-relaxed" style={{ color: "rgba(232,232,240,0.45)" }}>
                  {cinema.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
