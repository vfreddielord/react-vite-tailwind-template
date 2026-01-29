import React from "react";

const NavbarHero = ({ theme }) => {
  return (
    <div>
 
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 0" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div
            style={{
              width: "32px",
              height: "32px",
              borderRadius: "8px",
              backgroundColor: "#261a00",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "11px",
              fontWeight: "bold",
              color: theme.accent,
              border: `1px solid ${theme.accent}33`,
            }}
          >
            UG
          </div>
          <div>
            <p style={{ fontSize: "9px", textTransform: "uppercase", letterSpacing: "1px", color: theme.textMuted, margin: 0 }}>
              Unsplash Gallery
            </p>
            <p style={{ fontSize: "14px", fontWeight: "500", margin: 0 }}>Freddie Lord C. Viernes</p>
          </div>
        </div>
        <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
          <div
            style={{
              width: "32px",
              height: "32px",
              borderRadius: "50%",
              backgroundColor: theme.card,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              fontSize: "14px",
              border: `1px solid ${theme.border}`,
            }}
          >
            ✕
          </div>
          <button
            style={{
              backgroundColor: "transparent",
              color: theme.accent,
              border: `1px solid ${theme.accent}44`,
              padding: "6px 16px",
              borderRadius: "20px",
              fontSize: "11px",
              fontWeight: "500",
              cursor: "pointer",
            }}
          >
            Collections
          </button>
        </div>
      </div>

    
      <div style={{ display: "grid", gridTemplateColumns: "1.8fr 1fr", gap: "15px", marginBottom: "30px" }}>
        <div style={{ backgroundColor: theme.card, padding: "30px", borderRadius: "20px", border: `1px solid ${theme.border}` }}>
          <p style={{ color: theme.accent, fontSize: "9px", textTransform: "uppercase", letterSpacing: "2px", fontWeight: "600", marginBottom: "12px" }}>
            Curated Search
          </p>
          <h1 style={{ fontSize: "32px", fontWeight: "600", marginBottom: "12px", letterSpacing: "-1px", lineHeight: "1.2" }}>
            Find the mood.<br />Build the board.
          </h1>
          <p style={{ color: theme.textMuted, fontSize: "13px", maxWidth: "400px", lineHeight: "1.5" }}>
            Explore premium imagery with a bold orange and black workspace. Search by theme, vibe, or subject and curate your inspiration.
          </p>
        </div>

        <div
          style={{
            backgroundColor: theme.card,
            padding: "25px",
            borderRadius: "20px",
            border: `1px solid ${theme.border}`,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div>
            <p style={{ color: theme.textMuted, fontSize: "8px", textTransform: "uppercase", letterSpacing: "1px" }}>Insight</p>
            <h2 style={{ fontSize: "20px", fontWeight: "600", margin: "8px 0 4px 0", color: theme.accent }}>24</h2>
            <p style={{ color: theme.textMuted, fontSize: "10px" }}>Images per search</p>
          </div>
          <div style={{ borderTop: `1px solid ${theme.border}`, paddingTop: "15px" }}>
            <h2 style={{ fontSize: "16px", fontWeight: "600", margin: 0 }}>Unsplash</h2>
            <p style={{ color: theme.textMuted, fontSize: "10px", margin: 0 }}>Trusted provider</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarHero;
