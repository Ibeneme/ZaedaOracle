// PictureGrid.tsx
import React from "react";
import "./PictureGrid.css"; // Ensure this file includes the updated styles

interface PictureGridProps {
  images: { src: string; header: string; text: string }[];
}

const PictureGrid: React.FC<PictureGridProps> = ({ images }) => {
  return (
    <div className="picture-grid">
      {images.map((image, index) => (
        <div key={index} className="picture-grid-item">
          <img
            src={image.src}
            alt={`Image ${index + 1}`}
            className="grid-image"
          />
          <div className="overlay">
            <h2 style={{ color: "#fff" }}>{image.header}</h2>
            <p>{image.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PictureGrid;
