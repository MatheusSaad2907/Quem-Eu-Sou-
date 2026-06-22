import { useState, useEffect } from 'react'
import videoQuem from '../videos/QuemEu.mp4'; 


export default function Preloader({ children }) {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 5000)
    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return (
      <div style={{
        position: "fixed", inset: 0, zIndex: 9999,
        display: "flex", alignItems: "center", justifyContent: "center",
        background: "#fff",
      }}>
        <div style={{ width: "100%", maxWidth: "1280px", aspectRatio: "16/9", overflow: "hidden" }}>
          <video
            autoPlay
            muted
            playsInline
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
            onEnded={() => setLoading(false)}
          >
            <source src={videoQuem} type="video/mp4" />
          </video>
        </div>
      </div>
    )
  }

  return children
}