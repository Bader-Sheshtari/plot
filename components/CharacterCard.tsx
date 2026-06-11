interface Character {
  name: string;
  role: string;
  personality: string;
  goal: string;
  conflict: string;
  emoji?: string;
}

export default function CharacterCard({ char }: { char: Character }) {
  return (
    <div
      className="rounded-xl p-5 transition-all duration-300"
      style={{
        background: "rgba(255,255,255,0.02)",
        border: "1px solid rgba(201,168,76,0.12)",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,168,76,0.4)";
        (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
        (e.currentTarget as HTMLElement).style.boxShadow = "0 20px 40px rgba(0,0,0,0.5)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,168,76,0.12)";
        (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
        (e.currentTarget as HTMLElement).style.boxShadow = "none";
      }}
    >
      {/* Avatar */}
      <div
        className="w-12 h-12 rounded-full flex items-center justify-center mb-3 text-xl"
        style={{
          background: "linear-gradient(135deg, rgba(201,168,76,0.15), rgba(201,168,76,0.05))",
          border: "1px solid rgba(201,168,76,0.3)",
        }}
      >
        {char.emoji || "👤"}
      </div>

      <div
        className="text-xs font-bold mb-0.5"
        style={{ color: "#c9a84c", letterSpacing: "0.1em" }}
      >
        {char.role.toUpperCase()}
      </div>
      <div
        className="font-bold mb-3"
        style={{ color: "#fff", fontSize: "1.05rem" }}
      >
        {char.name}
      </div>

      <div className="flex flex-col gap-2 text-xs">
        {[
          { label: "Personality", value: char.personality },
          { label: "Goal", value: char.goal },
          { label: "Conflict", value: char.conflict },
        ].map((item) => (
          <div key={item.label}>
            <span
              className="font-semibold"
              style={{ color: "rgba(201,168,76,0.6)" }}
            >
              {item.label}:{" "}
            </span>
            <span style={{ color: "rgba(232,232,240,0.6)" }}>{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
