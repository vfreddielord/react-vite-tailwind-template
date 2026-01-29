import React from "react";

const SearchCategories = ({ theme, query, setQuery, handleSearch, categories, images, page }) => {
  return (
    <div style={{ backgroundColor: theme.card, padding: "35px", borderRadius: "28px", border: `1px solid ${theme.border}`, marginBottom: "40px" }}>
      <p style={{ fontSize: "10px", textTransform: "uppercase", color: theme.textMuted, marginBottom: "12px", letterSpacing: "1px" }}>Search</p>
      
      <div style={{ display: "flex", gap: "12px", marginBottom: "24px" }}>
        <input
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch(query, 1)}
          value={query}
          placeholder="Search for inspiration..."
          style={{
            flexGrow: 1,
            backgroundColor: theme.inputBg,
            border: `1px solid ${theme.border}`,
            borderRadius: "12px",
            padding: "16px 20px",
            color: "white",
            outline: "none",
            fontSize: "14px",
          }}
        />
        <button
          onClick={() => handleSearch(query, 1)}
          style={{
            backgroundColor: theme.accent,
            color: "black",
            border: "none",
            padding: "0 32px",
            borderRadius: "12px",
            fontWeight: "bold",
            cursor: "pointer",
            fontSize: "14px",
          }}
        >
          Search
        </button>
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", alignItems: "center" }}>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setQuery(cat);
              handleSearch(cat, 1);
            }}
            style={{
              padding: "8px 18px",
              borderRadius: "14px",
              fontSize: "10px",
              border: `1px solid ${theme.border}`,
              cursor: "pointer",
              fontWeight: "600",
              backgroundColor: query.toLowerCase() === cat.toLowerCase() ? theme.accent : "#1a1a1a",
              color: query.toLowerCase() === cat.toLowerCase() ? "black" : "white",
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", marginTop: "25px", color: theme.textMuted, fontSize: "10px" }}>
        <span>{images.length} results</span>
        <span>Page {page} of 85</span>
      </div>
    </div>
  );
};

export default SearchCategories;
