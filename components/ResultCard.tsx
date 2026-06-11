import { ReactNode } from "react";

interface Props {
  title: string;
  badge?: string;
  badgeColor?: string;
  children: ReactNode;
  action?: ReactNode;
}

export default function ResultCard({ title, badge, badgeColor = "#c9a84c", children, action }: Props) {
  return (
    <div
      className="rounded-xl overflow-hidden"
      style={{
        background: "rgba(17,17,24,0.95)",
        border: "1px solid rgba(201,168,76,0.15)",
        boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
      }}
    >
      {/* Card header */}
      <div
        className="flex items-center justify-between px-6 py-4"
        style={{
          borderBottom: "1px solid rgba(201,168,76,0.1)",
          background: "rgba(201,168,76,0.03)",
        }}
      >
        <div className="flex items-center gap-3">
          {badge && (
            <span
              className="text-xs font-bold px-3 py-1 rounded"
              style={{
                background: `rgba(${badgeColor === "#e63946" ? "230,57,70" : "201,168,76"},0.1)`,
                border: `1px solid ${badgeColor}40`,
                color: badgeColor,
                letterSpacing: "0.15em",
              }}
            >
              {badge}
            </span>
          )}
          <h3
            className="font-bold"
            style={{ color: "#fff", fontSize: "1rem", letterSpacing: "0.02em" }}
          >
            {title}
          </h3>
        </div>
        {action && <div>{action}</div>}
      </div>
      <div className="p-6">{children}</div>
    </div>
  );
}
