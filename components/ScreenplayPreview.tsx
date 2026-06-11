interface Scene {
  slug: string;
  action: string;
  character?: string;
  dialogue?: string;
  parenthetical?: string;
}

interface Props {
  title: string;
  scenes: Scene[];
}

export default function ScreenplayPreview({ title, scenes }: Props) {
  return (
    <div
      className="rounded-xl overflow-hidden"
      style={{
        background: "#0f0f14",
        border: "1px solid rgba(201,168,76,0.12)",
      }}
    >
      {/* Title page header */}
      <div
        className="text-center py-8 px-6 border-b"
        style={{ borderColor: "rgba(201,168,76,0.1)" }}
      >
        <div
          className="text-xs mb-2"
          style={{ color: "rgba(201,168,76,0.5)", letterSpacing: "0.3em" }}
        >
          SCREENPLAY DRAFT
        </div>
        <div
          className="font-screenplay text-2xl font-bold"
          style={{ color: "#fff" }}
        >
          {title.toUpperCase()}
        </div>
        <div
          className="text-xs mt-1"
          style={{ color: "rgba(232,232,240,0.3)" }}
        >
          Written by PLOT AI — Draft 1
        </div>
      </div>

      {/* Script content */}
      <div className="p-6 md:p-10 font-screenplay text-sm" style={{ lineHeight: 1.8 }}>
        {scenes.map((scene, i) => (
          <div key={i} className="mb-8">
            {/* Scene heading */}
            <div
              className="font-bold mb-2"
              style={{ color: "#fff", letterSpacing: "0.05em" }}
            >
              {scene.slug}
            </div>

            {/* Action line */}
            <p
              className="mb-4"
              style={{ color: "rgba(232,232,240,0.7)", maxWidth: "600px" }}
            >
              {scene.action}
            </p>

            {/* Dialogue */}
            {scene.character && (
              <div className="ml-24 md:ml-40">
                <div
                  className="font-bold mb-0.5"
                  style={{ color: "#f0d080", letterSpacing: "0.05em" }}
                >
                  {scene.character.toUpperCase()}
                </div>
                {scene.parenthetical && (
                  <div
                    className="italic mb-0.5"
                    style={{ color: "rgba(201,168,76,0.5)" }}
                  >
                    ({scene.parenthetical})
                  </div>
                )}
                {scene.dialogue && (
                  <p
                    className="max-w-xs"
                    style={{ color: "rgba(232,232,240,0.8)" }}
                  >
                    {scene.dialogue}
                  </p>
                )}
              </div>
            )}
          </div>
        ))}

        <div
          className="text-center mt-8 text-xs"
          style={{ color: "rgba(232,232,240,0.25)" }}
        >
          — FADE OUT —
        </div>
      </div>
    </div>
  );
}
