import React from "react";

const Pagination = ({ theme, page, query, handleSearch }) => {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "10px", marginTop: "40px" }}>
      <button
        onClick={() => page > 1 && handleSearch(query, page - 1)}
        style={{ background: "none", border: "none", color: theme.textMuted, fontSize: "11px", cursor: "pointer" }}
      >
        Previous
      </button>

      {[1, 2, 3, 4, 5].map((num) => (
        <button
          key={num}
          onClick={() => handleSearch(query, num)}
          style={{
            width: "32px",
            height: "32px",
            borderRadius: "50%",
            border: "none",
            cursor: "pointer",
            fontSize: "11px",
            fontWeight: "600",
            backgroundColor: page === num ? theme.accent : "#1a1a1a",
            color: page === num ? "black" : "white",
          }}
        >
          {num}
        </button>
      ))}

      <button
        onClick={() => handleSearch(query, page + 1)}
        style={{ background: "none", border: "none", color: "white", fontSize: "11px", cursor: "pointer" }}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
