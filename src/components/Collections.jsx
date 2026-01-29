import React from "react";

const Collections = ({ theme, collections, setQuery, handleSearch }) => {
  return (
    <div style={{ backgroundColor: theme.card, padding: "45px", borderRadius: "28px", border: `1px solid ${theme.border}`, marginBottom: "40px" }}>
      <p style={{ fontSize: "10px", textTransform: "uppercase", color: theme.textMuted, marginBottom: "8px", letterSpacing: "1px" }}>Collections</p>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "35px" }}>
        <h2 style={{ fontSize: "24px", fontWeight: "600", margin: 0 }}>Curated starting points</h2>
        <span style={{ fontSize: "10px", color: theme.textMuted }}>Click a card to search instantly.</span>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "18px" }}>
        {collections.map((col, i) => (
          <div
            key={i}
            onClick={() => {
              setQuery(col.title);
              handleSearch(col.tag, 1);
            }}
            style={{
              backgroundColor: theme.bg,
              border: `1px solid ${theme.border}`,
              padding: "28px",
              borderRadius: "20px",
              cursor: "pointer",
            }}
          >
            <h3 style={{ fontSize: "16px", fontWeight: "600", marginBottom: "10px" }}>{col.title}</h3>
            <p style={{ color: theme.textMuted, fontSize: "11px", lineHeight: "1.6", marginBottom: "20px" }}>{col.desc}</p>
            <p style={{ color: theme.accent, fontSize: "10px", fontWeight: "600", letterSpacing: "1px" }}>{col.tag}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collections;
