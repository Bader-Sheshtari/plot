"use client";

const STEPS = [
  {
    number: "01",
    title: "Write Your Story Idea",
    description:
      "Start with just one sentence. A feeling, a conflict, a world. That's all it takes.",
    icon: "✍",
    color: "#c9a84c",
  },
  {
    number: "02",
    title: "Choose the Genre",
    description:
      "Comedy, Horror, Thriller, Drama, Romance, Action, Sci-Fi, Fantasy, Mystery.",
    icon: "🎭",
    color: "#e63946",
  },
  {
    number: "03",
    title: "Choose the Tone",
    description:
      "Dark, Funny, Emotional, Suspenseful, Inspiring, or Realistic — you decide the feeling.",
    icon: "🎨",
    color: "#c9a84c",
  },
  {
    number: "04",
    title: "Generate Your Story World",
    description:
      "PLOT's AI engine builds the entire universe of your film — setting, era, atmosphere.",
    icon: "🌍",
    color: "#e63946",
  },
  {
    number: "05",
    title: "Get Characters, Plot & Screenplay",
    description:
      "Receive fully developed characters, a structured 3-act story, and a screenplay draft.",
    icon: "🎬",
    color: "#c9a84c",
  },
];

export default function MainSteps() {
  return (
    <section
      id="steps"
      className="relative py-24 px-6 overflow-hidden"
      style={{ background: "#0a0a0f" }}
    >
      {/* Background detail */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(201,168,76,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className="inline-block px-4 py-1 rounded mb-4 text-xs font-bold"
            style={{
              background: "rgba(201,168,76,0.08)",
              border: "1px solid rgba(201,168,76,0.25)",
              color: "#c9a84c",
              letterSpacing: "0.2em",
            }}
          >
            HOW IT WORKS
          </div>
          <h2
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 800,
              color: "#fff",
              lineHeight: 1.1,
            }}
          >
            From Imagination to{" "}
            <span className="text-gold">Screenplay</span>
          </h2>
          <p
            className="mt-3 max-w-lg mx-auto"
            style={{ color: "rgba(232,232,240,0.5)", fontSize: "1rem" }}
          >
            Five simple steps that transform your raw idea into a cinematic
            masterpiece.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line */}
          <div
            className="absolute left-1/2 top-0 bottom-0 w-px hidden lg:block"
            style={{
              background:
                "linear-gradient(#c9a84c, rgba(201,168,76,0.1))",
              transform: "translateX(-50%)",
              opacity: 0.2,
            }}
          />

          <div className="flex flex-col gap-6 lg:gap-0">
            {STEPS.map((step, i) => (
              <div
                key={step.number}
                className={`flex flex-col lg:flex-row items-center gap-6 ${
                  i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div className={`flex-1 ${i % 2 === 0 ? "lg:text-right lg:pr-16" : "lg:text-left lg:pl-16"}`}>
                  <div
                    className="inline-block card-cinema p-6 rounded-xl max-w-sm"
                    style={{ textAlign: "left" }}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span style={{ fontSize: "1.5rem" }}>{step.icon}</span>
                      <span
                        className="text-xs font-bold"
                        style={{ color: step.color, letterSpacing: "0.15em" }}
                      >
                        STEP {step.number}
                      </span>
                    </div>
                    <h3
                      className="mb-2"
                      style={{ fontSize: "1.1rem", fontWeight: 700, color: "#fff" }}
                    >
                      {step.title}
                    </h3>
                    <p
                      style={{
                        fontSize: "0.875rem",
                        color: "rgba(232,232,240,0.55)",
                        lineHeight: 1.6,
                      }}
                    >
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Center node */}
                <div className="hidden lg:flex flex-col items-center z-10 flex-shrink-0">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center font-black text-lg"
                    style={{
                      background:
                        i % 2 === 0
                          ? "linear-gradient(135deg, #c9a84c, #f0d080)"
                          : "linear-gradient(135deg, #e63946, #ff6b7a)",
                      color: "#0a0a0f",
                      boxShadow:
                        i % 2 === 0
                          ? "0 0 30px rgba(201,168,76,0.4)"
                          : "0 0 30px rgba(230,57,70,0.4)",
                    }}
                  >
                    {step.number}
                  </div>
                </div>

                {/* Spacer */}
                <div className="flex-1 hidden lg:block" />
              </div>
            ))}
          </div>
        </div>

        {/* CTA at bottom */}
        <div className="text-center mt-16">
          <a
            href="/create"
            className="btn-primary px-10 py-4 text-sm"
          >
            Begin Your Story Now ✦
          </a>
        </div>
      </div>
    </section>
  );
}
