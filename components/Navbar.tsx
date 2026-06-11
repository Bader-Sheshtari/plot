"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: "rgba(10, 10, 15, 0.85)",
        backdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(201, 168, 76, 0.12)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div
            className="w-9 h-9 flex items-center justify-center rounded"
            style={{
              background: "linear-gradient(135deg, #c9a84c, #f0d080)",
              boxShadow: "0 0 20px rgba(201,168,76,0.3)",
            }}
          >
            <span
              style={{
                color: "#0a0a0f",
                fontWeight: 900,
                fontSize: "1rem",
                letterSpacing: "-0.05em",
              }}
            >
              P
            </span>
          </div>
          <span
            style={{
              fontSize: "1.4rem",
              fontWeight: 800,
              letterSpacing: "0.15em",
              color: "#fff",
            }}
          >
            PLO<span className="text-gold">T</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className="text-sm font-medium transition-colors duration-200"
            style={{ color: "rgba(232,232,240,0.7)", letterSpacing: "0.05em" }}
            onMouseEnter={(e) =>
              ((e.target as HTMLElement).style.color = "#c9a84c")
            }
            onMouseLeave={(e) =>
              ((e.target as HTMLElement).style.color = "rgba(232,232,240,0.7)")
            }
          >
            HOME
          </Link>
          <Link
            href="/create"
            className="text-sm font-medium transition-colors duration-200"
            style={{ color: "rgba(232,232,240,0.7)", letterSpacing: "0.05em" }}
            onMouseEnter={(e) =>
              ((e.target as HTMLElement).style.color = "#c9a84c")
            }
            onMouseLeave={(e) =>
              ((e.target as HTMLElement).style.color = "rgba(232,232,240,0.7)")
            }
          >
            CREATE
          </Link>
          <Link
            href="/projects"
            className="text-sm font-medium transition-colors duration-200"
            style={{ color: "rgba(232,232,240,0.7)", letterSpacing: "0.05em" }}
            onMouseEnter={(e) =>
              ((e.target as HTMLElement).style.color = "#c9a84c")
            }
            onMouseLeave={(e) =>
              ((e.target as HTMLElement).style.color = "rgba(232,232,240,0.7)")
            }
          >
            MY PROJECTS
          </Link>
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/create"
            className="btn-primary px-5 py-2 text-xs"
            style={{ zIndex: 1 }}
          >
            Start Creating
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="block w-6 h-0.5 transition-all duration-300"
              style={{ background: "#c9a84c" }}
            />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden border-t"
          style={{
            borderColor: "rgba(201,168,76,0.12)",
            background: "rgba(10,10,15,0.97)",
          }}
        >
          <div className="px-6 py-4 flex flex-col gap-4">
            {[
              { href: "/", label: "HOME" },
              { href: "/create", label: "CREATE" },
              { href: "/projects", label: "MY PROJECTS" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium"
                style={{ color: "rgba(232,232,240,0.7)", letterSpacing: "0.05em" }}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/create"
              className="btn-primary px-5 py-2.5 text-xs mt-2"
              onClick={() => setMenuOpen(false)}
            >
              Start Creating
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
