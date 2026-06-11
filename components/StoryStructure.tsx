interface Structure {
  beginning: string;
  middle: string;
  ending: string;
}

export default function StoryStructure({ structure }: { structure: Structure }) {
  const acts = [
    { label: "ACT I", subtitle: "Beginning", text: structure.beginning, color: "#c9a84c", icon: "🌅" },
    { label: "ACT II", subtitle: "Middle", text: structure.middle, color: "#e63946", icon: "⚡" },
    { label: "ACT III", subtitle: "Ending", text: structure.ending, color: "#f0d080", icon: "🎯" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {acts.map((act, i) => (
        <div key={i} className="relative">
          {/* Connector arrow */}
          {i < 2 && (
            <div
              className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 items-center justify-center w-6 h-6 rounded-full text-xs"
              style={{
                background: "rgba(201,168,76,0.2)",
                color: "#c9a84c",
                border: "1px solid rgba(201,168,76,0.3)",
              }}
            >
              →
            </div>
          )}

          <div
            className="rounded-xl p-5 h-full"
            style={{
              background: "rgba(255,255,255,0.02)",
              border: `1px solid ${act.color}25`,
            }}
          >
            <div className="flex items-center gap-2 mb-3">
              <span>{act.icon}</span>
              <div>
                <div
                  className="text-xs font-black"
                  style={{ color: act.color, letterSpacing: "0.15em" }}
                >
                  {act.label}
                </div>
                <div
                  className="text-xs"
                  style={{ color: "rgba(232,232,240,0.4)" }}
                >
                  {act.subtitle}
                </div>
              </div>
            </div>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "rgba(232,232,240,0.7)" }}
            >
              {act.text}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
