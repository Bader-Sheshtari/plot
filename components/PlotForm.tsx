"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const GENRES = [
  "Comedy", "Horror", "Thriller", "Drama", "Romance",
  "Action", "Sci-Fi", "Fantasy", "Mystery",
];
const TONES = [
  "Dark", "Funny", "Emotional", "Suspenseful", "Inspiring", "Realistic",
];
const FORMATS = ["Short Film", "Feature Film", "TV Episode", "Series Concept"];
const ENDINGS = ["Happy", "Sad", "Shocking", "Open Ending", "Plot Twist"];

export default function PlotForm() {
  const router = useRouter();
  const [form, setForm] = useState({
    idea: "",
    genre: "",
    tone: "",
    format: "",
    ending: "",
  });

  const isReady =
    form.idea.trim().length > 10 &&
    form.genre &&
    form.tone &&
    form.format &&
    form.ending;

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isReady) return;
    if (typeof window !== "undefined") {
      localStorage.setItem("plot_form", JSON.stringify(form));
    }
    router.push("/loading");
  };

  const SelectRow = ({
    label, options, field,
  }: { label: string; options: string[]; field: keyof typeof form }) => (
    <div>
      <label
        className="block text-xs font-bold mb-3"
        style={{ color: "#c9a84c", letterSpacing: "0.15em" }}
      >
        {label}
      </label>
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => (
          <button
            key={opt}
            type="button"
            onClick={() => setForm({ ...form, [field]: opt })}
            className="px-4 py-2 text-xs font-semibold rounded transition-all duration-200"
            style={{
              background:
                form[field] === opt
                  ? "linear-gradient(135deg, #c9a84c, #f0d080)"
                  : "rgba(255,255,255,0.03)",
              border:
                form[field] === opt
                  ? "1px solid transparent"
                  : "1px solid rgba(201,168,76,0.2)",
              color: form[field] === opt ? "#0a0a0f" : "rgba(232,232,240,0.6)",
              letterSpacing: "0.05em",
              transform: form[field] === opt ? "scale(1.05)" : "scale(1)",
            }}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <div
      className="rounded-2xl p-8 md:p-10"
      style={{
        background: "rgba(17,17,24,0.95)",
        border: "1px solid rgba(201,168,76,0.15)",
        boxShadow: "0 40px 80px rgba(0,0,0,0.5)",
      }}
    >
      <form onSubmit={handleGenerate} className="flex flex-col gap-8">
        {/* Story Idea */}
        <div>
          <label
            className="block text-xs font-bold mb-3"
            style={{ color: "#c9a84c", letterSpacing: "0.15em" }}
          >
            YOUR STORY IDEA
          </label>
          <textarea
            required
            rows={4}
            placeholder="Describe your movie idea in a few sentences... e.g. 'A struggling musician discovers an ancient record that plays the future, but listening changes who he becomes...'"
            className="input-cinema px-4 py-3 text-sm resize-none"
            style={{ minHeight: "120px" }}
            value={form.idea}
            onChange={(e) => setForm({ ...form, idea: e.target.value })}
          />
          <div className="mt-1 text-xs" style={{ color: "rgba(232,232,240,0.3)" }}>
            {form.idea.length} characters — the more detail, the richer your story.
          </div>
        </div>

        <SelectRow label="GENRE" options={GENRES} field="genre" />
        <SelectRow label="TONE" options={TONES} field="tone" />
        <SelectRow label="FORMAT" options={FORMATS} field="format" />
        <SelectRow label="ENDING TYPE" options={ENDINGS} field="ending" />

        {/* Divider */}
        <div className="divider-gold" />

        {/* Summary */}
        {isReady && (
          <div
            className="rounded-lg p-4 text-sm"
            style={{
              background: "rgba(201,168,76,0.05)",
              border: "1px solid rgba(201,168,76,0.2)",
              color: "rgba(232,232,240,0.7)",
              lineHeight: 1.7,
            }}
          >
            <span style={{ color: "#c9a84c", fontWeight: 700 }}>Your Plot: </span>
            A <strong style={{ color: "#f0d080" }}>{form.tone}</strong>{" "}
            <strong style={{ color: "#f0d080" }}>{form.genre}</strong>{" "}
            <strong style={{ color: "#f0d080" }}>{form.format}</strong>{" "}
            with a <strong style={{ color: "#f0d080" }}>{form.ending}</strong> ending.
          </div>
        )}

        <button
          type="submit"
          disabled={!isReady}
          className="btn-primary w-full py-5 text-sm"
          style={{
            opacity: isReady ? 1 : 0.4,
            cursor: isReady ? "pointer" : "not-allowed",
            fontSize: "0.9rem",
          }}
        >
          ✦ Generate My Plot
        </button>
      </form>
    </div>
  );
}
