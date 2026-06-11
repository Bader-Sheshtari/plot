"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const WRITER_TYPES = ["Writer", "Director", "Producer", "Student", "Dreamer"];

export default function UserIntroForm() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    email: "",
    project: "",
    type: "",
  });
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (typeof window !== "undefined") {
      localStorage.setItem("plot_user", JSON.stringify(form));
    }
    router.push("/create");
  };

  const fields = [
    { id: "name", label: "Full Name", placeholder: "Your full name", type: "text" },
    { id: "email", label: "Email Address", placeholder: "your@email.com", type: "email" },
    { id: "project", label: "Project Name", placeholder: "My Epic Film", type: "text" },
  ];

  return (
    <section
      id="start"
      className="relative py-24 px-6 overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(201,168,76,0.05) 0%, transparent 70%), #0a0a0f",
      }}
    >
      {/* Decorative lines */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-40"
        style={{ background: "linear-gradient(transparent, #c9a84c, transparent)", opacity: 0.3 }}
      />
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-px h-40"
        style={{ background: "linear-gradient(transparent, #c9a84c, transparent)", opacity: 0.3 }}
      />

      <div className="max-w-xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div
            className="inline-block px-4 py-1 rounded mb-4 text-xs font-bold"
            style={{
              background: "rgba(230,57,70,0.1)",
              border: "1px solid rgba(230,57,70,0.3)",
              color: "#e63946",
              letterSpacing: "0.2em",
            }}
          >
            STEP 0 — ENTER THE STUDIO
          </div>
          <h2
            className="mb-3"
            style={{
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: 800,
              lineHeight: 1.1,
              color: "#fff",
            }}
          >
            Your idea deserves{" "}
            <span className="text-gold">a movie.</span>
          </h2>
          <p style={{ color: "rgba(232,232,240,0.5)", fontSize: "0.95rem" }}>
            Tell us who you are, and let's build something cinematic together.
          </p>
        </div>

        {/* Form card */}
        <div
          className="rounded-xl p-8"
          style={{
            background: "rgba(17,17,24,0.9)",
            border: "1px solid rgba(201,168,76,0.15)",
            boxShadow: "0 40px 80px rgba(0,0,0,0.5)",
          }}
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {fields.map((field) => (
              <div key={field.id}>
                <label
                  className="block text-xs font-semibold mb-2"
                  style={{ color: "#c9a84c", letterSpacing: "0.1em" }}
                >
                  {field.label.toUpperCase()}
                </label>
                <input
                  type={field.type}
                  required
                  placeholder={field.placeholder}
                  className="input-cinema px-4 py-3 text-sm"
                  style={{
                    borderColor:
                      focused === field.id
                        ? "rgba(201,168,76,0.7)"
                        : "rgba(201,168,76,0.2)",
                  }}
                  value={form[field.id as keyof typeof form]}
                  onChange={(e) =>
                    setForm({ ...form, [field.id]: e.target.value })
                  }
                  onFocus={() => setFocused(field.id)}
                  onBlur={() => setFocused(null)}
                />
              </div>
            ))}

            {/* Writer type */}
            <div>
              <label
                className="block text-xs font-semibold mb-2"
                style={{ color: "#c9a84c", letterSpacing: "0.1em" }}
              >
                I AM A...
              </label>
              <div className="grid grid-cols-3 gap-2 sm:grid-cols-5">
                {WRITER_TYPES.map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setForm({ ...form, type })}
                    className="py-2 text-xs font-semibold rounded transition-all duration-200"
                    style={{
                      background:
                        form.type === type
                          ? "linear-gradient(135deg, #c9a84c, #f0d080)"
                          : "transparent",
                      border:
                        form.type === type
                          ? "1px solid transparent"
                          : "1px solid rgba(201,168,76,0.25)",
                      color: form.type === type ? "#0a0a0f" : "rgba(232,232,240,0.6)",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            <button
              type="submit"
              className="btn-primary w-full py-4 text-sm mt-2"
              disabled={!form.type}
              style={{ opacity: form.type ? 1 : 0.5, cursor: form.type ? "pointer" : "not-allowed" }}
            >
              ✦ Enter PLOT Studio
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
