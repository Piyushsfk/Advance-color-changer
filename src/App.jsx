import { useState } from "react"

const colors = [
  { name: "red",     hex: "#EF4444" },
  { name: "orange",  hex: "#F97316" },
  { name: "amber",   hex: "#F59E0B" },
  { name: "yellow",  hex: "#FBBF24" },
  { name: "lime",    hex: "#84CC16" },
  { name: "green",   hex: "#22C55E" },
  { name: "emerald", hex: "#10B981" },
  { name: "teal",    hex: "#14B8A6" },
  { name: "cyan",    hex: "#06B6D4" },
  { name: "sky",     hex: "#0EA5E9" },
  { name: "blue",    hex: "#3B82F6" },
  { name: "indigo",  hex: "#6366F1" },
  { name: "violet",  hex: "#7C3AED" },
  { name: "purple",  hex: "#8B5CF6" },
  { name: "fuchsia", hex: "#D946EF" },
  { name: "pink",    hex: "#EC4899" },
  { name: "rose",    hex: "#F43F5E" },
  { name: "brown",   hex: "#92400E" },
  { name: "slate",   hex: "#64748B" },
  { name: "grey",    hex: "#6B7280" },
  { name: "black",   hex: "#0f0f0f" },
  { name: "white",   hex: "#ffffff", dark: true },
]

function App() {
  const [color, setColor] = useState("#ffffff")
  const [colorName, setColorName] = useState("white")
  const [r, setR] = useState(128)
  const [g, setG] = useState(128)
  const [b, setB] = useState(128)

  const mixedColor = `rgb(${r}, ${g}, ${b})`

  const applyMix = () => {
    setColor(mixedColor)
    setColorName(`rgb(${r}, ${g}, ${b})`)
  }

  return (
    <div
      style={{ backgroundColor: color, width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", transition: "background-color 0.5s ease" }}
    >
      {/* Top - color name label */}
      <div style={{ display: "flex", justifyContent: "center", paddingTop: "2.5rem" }}>
        <span style={{ background: "rgba(255,255,255,0.3)", backdropFilter: "blur(8px)", padding: "4px 16px", borderRadius: "999px", fontSize: "14px", fontWeight: 500, color: "#1f2937" }}>
          {colorName}
        </span>
      </div>

      {/* Bottom - control panel */}
      <div style={{ display: "flex", justifyContent: "center", padding: "0 1rem 2rem" }}>
        <div style={{ background: "white", borderRadius: "1rem", boxShadow: "0 25px 50px rgba(0,0,0,0.25)", padding: "12px 16px", width: "100%", maxWidth: "520px" }}>

          {/* Quick Colors */}
          <p style={{ fontSize: "11px", color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "8px" }}>Quick Colors</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "16px" }}>
            {colors.map((c) => (
              <button
                key={c.name}
                onClick={() => { setColor(c.hex); setColorName(c.name) }}
                style={{
                  backgroundColor: c.hex,
                  color: c.dark ? "#333" : "white",
                  border: c.dark ? "1px solid #ddd" : "none",
                  padding: "4px 12px",
                  borderRadius: "999px",
                  fontSize: "12px",
                  fontWeight: 500,
                  cursor: "pointer",
                  outline: "none",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
                  transition: "transform 0.1s",
                }}
                onMouseEnter={e => e.target.style.transform = "scale(1.08)"}
                onMouseLeave={e => e.target.style.transform = "scale(1)"}
                onMouseDown={e => e.target.style.transform = "scale(0.95)"}
                onMouseUp={e => e.target.style.transform = "scale(1.08)"}
              >
                {c.name}
              </button>
            ))}
          </div>

          {/* RGB Mixer */}
          <div style={{ borderTop: "1px solid #f3f4f6", paddingTop: "12px" }}>
            <p style={{ fontSize: "11px", color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "12px" }}>Mix Your Own</p>

            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              {/* Sliders */}
              <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "8px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span style={{ fontSize: "12px", fontWeight: 500, color: "#ef4444", width: "48px" }}>R {r}</span>
                  <input type="range" min="0" max="255" value={r} step="1"
                    onChange={(e) => setR(Number(e.target.value))}
                    style={{ flex: 1, accentColor: "#ef4444" }} />
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span style={{ fontSize: "12px", fontWeight: 500, color: "#16a34a", width: "48px" }}>G {g}</span>
                  <input type="range" min="0" max="255" value={g} step="1"
                    onChange={(e) => setG(Number(e.target.value))}
                    style={{ flex: 1, accentColor: "#22c55e" }} />
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span style={{ fontSize: "12px", fontWeight: 500, color: "#3b82f6", width: "48px" }}>B {b}</span>
                  <input type="range" min="0" max="255" value={b} step="1"
                    onChange={(e) => setB(Number(e.target.value))}
                    style={{ flex: 1, accentColor: "#3b82f6" }} />
                </div>
              </div>

              {/* Preview + Apply */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
                <div style={{ width: "40px", height: "40px", borderRadius: "50%", border: "2px solid #e5e7eb", backgroundColor: mixedColor }} />
                <button
                  onClick={applyMix}
                  style={{ fontSize: "12px", padding: "4px 12px", borderRadius: "8px", background: "#f3f4f6", border: "none", cursor: "pointer", color: "#374151" }}
                  onMouseEnter={e => e.target.style.background = "#e5e7eb"}
                  onMouseLeave={e => e.target.style.background = "#f3f4f6"}
                >
                  Apply
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default App