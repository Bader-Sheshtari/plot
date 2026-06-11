import Navbar from "@/components/Navbar";
import PlotForm from "@/components/PlotForm";
import Footer from "@/components/Footer";

export default function CreatePage() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />

      <section
        className="flex-1 relative pt-28 pb-20 px-6 overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 20%, rgba(201,168,76,0.07) 0%, transparent 70%), #0a0a0f",
        }}
      >
        {/* Background grid */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(201,168,76,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.025) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        <div className="relative z-10 max-w-2xl mx-auto">
          {/* Page header */}
          <div className="text-center mb-12">
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold mb-5"
              style={{
                background: "rgba(230,57,70,0.08)",
                border: "1px solid rgba(230,57,70,0.25)",
                color: "#e63946",
                letterSpacing: "0.2em",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse-gold" />
              PLOT STUDIO — LIVE
            </div>
            <h1
              style={{
                fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
                fontWeight: 900,
                lineHeight: 1,
                color: "#fff",
                letterSpacing: "-0.02em",
              }}
            >
              Create Your{" "}
              <span className="text-gold">Screenplay</span>
            </h1>
            <p
              className="mt-4 max-w-md mx-auto"
              style={{ color: "rgba(232,232,240,0.5)", fontSize: "1rem", lineHeight: 1.7 }}
            >
              Fill in the details below and let PLOT&apos;s AI transform your idea
              into a complete cinematic story.
            </p>

            {/* Progress indicator */}
            <div className="flex items-center justify-center gap-3 mt-6">
              {["Idea", "Style", "Format", "Generate"].map((step, i) => (
                <div key={step} className="flex items-center gap-2">
                  <div className="flex flex-col items-center gap-1">
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold"
                      style={{
                        background: i === 0 ? "linear-gradient(135deg, #c9a84c, #f0d080)" : "rgba(255,255,255,0.05)",
                        border: i === 0 ? "none" : "1px solid rgba(201,168,76,0.2)",
                        color: i === 0 ? "#0a0a0f" : "rgba(232,232,240,0.3)",
                      }}
                    >
                      {i + 1}
                    </div>
                    <span className="text-xs" style={{ color: i === 0 ? "#c9a84c" : "rgba(232,232,240,0.25)", letterSpacing: "0.05em" }}>
                      {step}
                    </span>
                  </div>
                  {i < 3 && (
                    <div
                      className="w-8 h-px mb-4"
                      style={{ background: "rgba(201,168,76,0.15)" }}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          <PlotForm />

          {/* Bottom note */}
          <p
            className="text-center text-xs mt-6"
            style={{ color: "rgba(232,232,240,0.2)" }}
          >
            ✦ AI generation takes 8–10 seconds. Your screenplay draft will be ready instantly.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
