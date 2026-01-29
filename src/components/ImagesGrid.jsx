import React from "react";

const ImagesGrid = ({ theme, images }) => {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px", marginBottom: "60px" }}>
      {images.map((image) => (
        <div
          key={image.id}
          style={{
            aspectRatio: "4/3",
            overflow: "hidden",
            borderRadius: "20px",
            backgroundColor: theme.card,
            border: `1px solid ${theme.border}`,
          }}
        >
          <img
            src={image.urls.regular}
            alt={image.alt_description}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
      ))}
    </div>
  );
};

export default ImagesGrid;
