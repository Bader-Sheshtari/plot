"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import Footer from "@/components/Footer";

const MOCK_PROJECTS = [
  {
    id: "1",
    title: "The Last Frequency",
    genre: "Thriller",
    tone: "Dark",
    lastEdited: "2 hours ago",
    status: "Draft" as const,
    format: "Feature Film",
  },
  {
    id: "2",
    title: "Daughters of the Desert",
    genre: "Drama",
    tone: "Emotional",
    lastEdited: "Yesterday",
    status: "Completed" as const,
    format: "Feature Film",
  },
  {
    id: "3",
    title: "Neon Infinity",
    genre: "Sci-Fi",
    tone: "Dark",
    lastEdited: "3 days ago",
    status: "Draft" as const,
    format: "Series Concept",
  },
  {
    id: "4",
    title: "The Red Carpet",
    genre: "Romance",
    tone: "Funny",
    lastEdited: "1 week ago",
    status: "Completed" as const,
    format: "Short Film",
  },
  {
    id: "5",
    title: "Ghost Protocol: Karachi",
    genre: "Action",
    tone: "Suspenseful",
    lastEdited: "2 weeks ago",
    status: "Draft" as const,
    format: "TV Episode",
  },
  {
    id: "6",
    title: "The Haunting of Studio 7",
    genre: "Horror",
    tone: "Dark",
    lastEdited: "1 month ago",
    status: "Completed" as const,
    format: "Short Film",
  },
];

const STATS = [
  { value: "6", label: "Total Projects" },
  { value: "3", label: "Completed" },
  { value: "3", label: "In Draft" },
  { value: "2.4K", label: "Words Written" },
];

export default function ProjectsPage() {
  const [filter, setFilter] = useState<"All" | "Draft" | "Completed">("All");

  const filtered =
    filter === "All"
      ? MOCK_PROJECTS
      : MOCK_PROJECTS.filter((p) => p.status === filter);

  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />

      {/* Header */}
      <section
        className="pt-28 pb-12 px-6"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(201,168,76,0.07) 0%, transparent 60%), #0a0a0f",
          borderBottom: "1px solid rgba(201,168,76,0.1)",
        }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div
                className="text-xs font-bold mb-3"
                style={{ color: "#c9a84c", letterSpacing: "0.25em" }}
              >
                YOUR STUDIO
              </div>
              <h1
                style={{
                  fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
                  fontWeight: 900,
                  color: "#fff",
                  lineHeight: 1,
                }}
              >
                My <span className="text-gold">Projects</span>
              </h1>
              <p
                className="mt-3"
                style={{ color: "rgba(232,232,240,0.45)", fontSize: "0.95rem" }}
              >
                Every great director has a vault. This is yours.
              </p>
            </div>
            <Link href="/create" className="btn-primary px-6 py-3 text-sm self-start md:self-auto">
              + New Project
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl p-4 text-center"
                style={{
                  background: "rgba(201,168,76,0.04)",
                  border: "1px solid rgba(201,168,76,0.12)",
                }}
              >
                <div
                  className="text-gold font-black"
                  style={{ fontSize: "1.8rem", letterSpacing: "-0.02em" }}
                >
                  {stat.value}
                </div>
                <div
                  className="text-xs mt-1"
                  style={{ color: "rgba(232,232,240,0.35)", letterSpacing: "0.08em" }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects grid */}
      <section className="flex-1 py-12 px-6" style={{ background: "#0a0a0f" }}>
        <div className="max-w-6xl mx-auto">
          {/* Filter tabs */}
          <div className="flex gap-2 mb-8">
            {(["All", "Draft", "Completed"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className="px-5 py-2 text-xs font-bold rounded transition-all duration-200"
                style={{
                  background:
                    filter === tab
                      ? "linear-gradient(135deg, #c9a84c, #f0d080)"
                      : "rgba(255,255,255,0.03)",
                  border:
                    filter === tab
                      ? "none"
                      : "1px solid rgba(201,168,76,0.2)",
                  color: filter === tab ? "#0a0a0f" : "rgba(232,232,240,0.5)",
                  letterSpacing: "0.1em",
                }}
              >
                {tab}
                <span
                  className="ml-2 px-1.5 py-0.5 rounded text-xs"
                  style={{
                    background:
                      filter === tab ? "rgba(0,0,0,0.15)" : "rgba(201,168,76,0.1)",
                    fontSize: "0.65rem",
                  }}
                >
                  {tab === "All"
                    ? MOCK_PROJECTS.length
                    : MOCK_PROJECTS.filter((p) => p.status === tab).length}
                </span>
              </button>
            ))}
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-4xl mb-4">🎬</div>
              <p style={{ color: "rgba(232,232,240,0.4)" }}>No projects here yet.</p>
              <Link href="/create" className="btn-primary px-6 py-3 text-sm mt-6 inline-flex">
                Create Your First Story
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filtered.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          )}

          {/* CTA banner */}
          <div
            className="mt-12 rounded-xl p-8 flex flex-col md:flex-row items-center justify-between gap-6"
            style={{
              background:
                "linear-gradient(135deg, rgba(201,168,76,0.06) 0%, rgba(230,57,70,0.04) 100%)",
              border: "1px solid rgba(201,168,76,0.15)",
            }}
          >
            <div>
              <h3
                className="font-black mb-1"
                style={{ fontSize: "1.3rem", color: "#fff" }}
              >
                Ready for your next masterpiece?
              </h3>
              <p className="text-sm" style={{ color: "rgba(232,232,240,0.45)" }}>
                &ldquo;One idea. One click. One cinematic world.&rdquo;
              </p>
            </div>
            <Link href="/create" className="btn-primary px-8 py-3 text-sm flex-shrink-0">
              ✦ Start New Project
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
