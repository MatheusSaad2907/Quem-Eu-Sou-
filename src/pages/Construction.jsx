import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"

export default function UnderConstructionPopup({ section = "esta seção" }) {
  const [visible, setVisible] = useState(true)
  const navigate = useNavigate()

  function handleClose() {
    setVisible(false)
    navigate("/")
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          style={{
            position: "fixed", inset: 0, zIndex: 9999,
            background: "rgba(0,0,0,0.6)",
            display: "flex", alignItems: "center", justifyContent: "center",
            padding: "1.5rem",
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 16 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            style={{
              background: "#fff", borderRadius: "16px",
              maxWidth: "420px", width: "100%",
              fontFamily: "sans-serif", overflow: "hidden",
            }}
          >
            <div style={{ background: "#2C2C2A", padding: "1.5rem", textAlign: "center" }}>
              <div style={{ fontSize: "36px", marginBottom: "8px" }}>🏗️</div>
              <p style={{
                color: "#B4B2A9", fontSize: "11px",
                letterSpacing: "2px", textTransform: "uppercase", margin: 0,
              }}>
                Neemias 2:17 — Em Construção
              </p>
            </div>

            <div style={{ padding: "1.5rem" }}>
              <p style={{
                fontSize: "13px", color: "#888", fontStyle: "italic",
                textAlign: "center", margin: "0 0 1.25rem", lineHeight: 1.7,
              }}>
                "Vinde e edifiquemos os muros de Jerusalém, para que não continuemos a ser objeto de escárnio."
              </p>

              <div style={{
                background: "#fafaf8", border: "1px solid #e8e8e4",
                borderRadius: "10px", padding: "1rem 1.25rem", marginBottom: "1.25rem",
              }}>
                <p style={{ fontSize: "14px", fontWeight: 600, color: "#2C2C2A", margin: "0 0 6px" }}>
                  🔨 Ainda edificando...
                </p>
                <p style={{ fontSize: "13px", color: "#666", margin: 0, lineHeight: 1.7 }}>
                  Assim como Neemias reconstruiu os muros de Jerusalém tijolo por tijolo,{" "}
                  <strong>{section}</strong> ainda está sendo erguida com cuidado e dedicação.
                </p>
              </div>

              <p style={{
                fontSize: "12px", color: "#aaa",
                textAlign: "center", margin: "0 0 1.25rem", lineHeight: 1.6,
              }}>
                Volte em breve — a obra não para. 🕊️
              </p>

              <button
                onClick={handleClose}
                style={{
                  width: "100%", padding: "10px",
                  background: "#2C2C2A", color: "#F1EFE8",
                  border: "none", borderRadius: "8px",
                  fontSize: "14px", cursor: "pointer",
                  fontFamily: "sans-serif",
                }}
              >
                Entendido, seguirei em frente →
              </button>
            </div>

            <div style={{
              padding: "0.75rem 1.5rem",
              borderTop: "1px solid #f0f0ec",
              textAlign: "center",
            }}>
              <p style={{ fontSize: "11px", color: "#bbb", margin: 0, fontStyle: "italic" }}>
                "O trabalho é grande e extenso." — Neemias 4:19
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}