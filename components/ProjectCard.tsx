"use client";

import Link from "next/link";

interface Project {
  id: string;
  title: string;
  genre: string;
  tone: string;
  lastEdited: string;
  status: "Draft" | "Completed";
  format: string;
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div
      className="card-cinema rounded-xl p-6 flex flex-col gap-4 group"
    >
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span
              className="text-xs font-bold px-2 py-0.5 rounded"
              style={{
                background:
                  project.status === "Completed"
                    ? "rgba(201,168,76,0.1)"
                    : "rgba(230,57,70,0.1)",
                border: `1px solid ${project.status === "Completed" ? "rgba(201,168,76,0.3)" : "rgba(230,57,70,0.3)"}`,
                color:
                  project.status === "Completed" ? "#c9a84c" : "#e63946",
                letterSpacing: "0.1em",
              }}
            >
              {project.status.toUpperCase()}
            </span>
            <span
              className="text-xs"
              style={{ color: "rgba(232,232,240,0.3)" }}
            >
              {project.format}
            </span>
          </div>
          <h3
            className="font-bold text-lg"
            style={{ color: "#fff", lineHeight: 1.2 }}
          >
            {project.title}
          </h3>
        </div>
        <div className="text-2xl opacity-60 group-hover:opacity-100 transition-opacity">
          🎬
        </div>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {[project.genre, project.tone].map((tag) => (
          <span
            key={tag}
            className="text-xs px-3 py-1 rounded-full"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(201,168,76,0.15)",
              color: "rgba(232,232,240,0.5)",
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Footer */}
      <div
        className="flex items-center justify-between pt-3"
        style={{ borderTop: "1px solid rgba(201,168,76,0.08)" }}
      >
        <span
          className="text-xs"
          style={{ color: "rgba(232,232,240,0.3)" }}
        >
          Edited {project.lastEdited}
        </span>
        <Link
          href="/results"
          className="btn-secondary text-xs px-4 py-2"
        >
          Continue Writing →
        </Link>
      </div>
    </div>
  );
}
