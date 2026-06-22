import { useState, useEffect } from "react";

export default function GenesisPopup() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  if (!visible) return null;

  return (
    <div style={{
      position: "fixed", inset: 0, zIndex: 9999,
      background: "rgba(0,0,0,0.6)",
      display: "flex", alignItems: "center", justifyContent: "center",
      padding: "2rem",
    }}>
      <div style={{
        background: "#fff", borderRadius: "12px",
        border: "1px solid #e0e0e0",
        maxWidth: "480px", width: "100%", overflow: "hidden",
        fontFamily: "sans-serif",
      }}>
        {/* Cabeçalho */}
        <div style={{
          background: "#2C2C2A", padding: "1.5rem 1.5rem 1rem",
          textAlign: "center",
        }}>
          <div style={{ fontSize: "36px", marginBottom: "8px" }}>📜</div>
          <p style={{
            color: "#B4B2A9", fontSize: "11px",
            letterSpacing: "2px", textTransform: "uppercase", margin: 0,
          }}>
            Gênesis — Versículo I
          </p>
        </div>

        {/* Corpo */}
        <div style={{ padding: "1.5rem" }}>
          <p style={{
            fontSize: "13px", color: "#555", fontStyle: "italic",
            textAlign: "center", margin: "0 0 1rem", lineHeight: "1.6",
          }}>
            "No princípio, Deus criou o céu e a terra. E disse:{" "}
            <em>Quem sou eu?</em> — e ainda não havia resposta."
          </p>

          <div style={{
            borderLeft: "3px solid #B4B2A9",
            background: "#f9f9f7",
            borderRadius: "0 8px 8px 0",
            padding: "0.75rem 1rem",
            marginBottom: "1.25rem",
          }}>
            <p style={{ fontSize: "14px", fontWeight: 500, margin: "0 0 4px" }}>
              ⚠️ Aviso do Criador
            </p>
            <p style={{ fontSize: "13px", color: "#555", margin: 0, lineHeight: "1.6" }}>
              Assim como Adão ainda estava sendo moldado do barro no Éden,
              a seção <strong>"Quem Eu Sou?"</strong> ainda está sendo
              esculpida pelo seu criador.
            </p>
          </div>

          <p style={{
  fontSize: "13px", color: "#555",
  textAlign: "center", margin: "0 0 1.25rem", lineHeight: "1.6",
}}>
  <strong>
    Consulte uma prévia do conteúdo, explorando o livro de Gênesis e a
    pessoa de Adão. Mas esteja ciente de que ele ainda está em
    desenvolvimento e pode sofrer alterações.
  </strong>
</p>

          <button
            onClick={() => setVisible(false)}
            style={{
              width: "100%", padding: "10px",
              background: "#2C2C2A", color: "#F1EFE8",
              border: "none", borderRadius: "8px",
              fontSize: "14px", cursor: "pointer",
            }}
          >
            Entendido, seguirei em frente →
          </button>
        </div>

        {/* Rodapé */}
        <div style={{
          padding: "0.75rem 1.5rem",
          borderTop: "1px solid #e0e0e0",
          textAlign: "center",
        }}>
          <p style={{ fontSize: "11px", color: "#888", margin: 0, fontStyle: "italic" }}>
            "E viu que era bom." — Gênesis 1:31
          </p>
        </div>
      </div>
    </div>
  );
}