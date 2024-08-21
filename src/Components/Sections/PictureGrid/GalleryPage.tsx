import React from "react";
import PictureGrid from "./PictureGrid";

// Importing images from your assets
import weatherPatternsImage from "../../../assets/StartPage/studio.jpg";
import techImage from "../../../assets/StartPage/tech.jpg";
import bwImage from "../../../assets/StartPage/techcode.jpg";

const GalleryPage: React.FC = () => {
  const images = [
    {
      src: weatherPatternsImage,
      header: "Integrity and Professionalism",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vehicula mi eget ligula malesuada, at bibendum libero dictum. Maecenas vel neque id odio bibendum tristique. Proin nec libero non odio scelerisque pharetra ut ac ex. Integer blandit eros et dolor ultrices, sed dapibus sapien laoreet. Nulla facilisi. Nulla vel dolor nec nisi finibus malesuada. Curabitur fermentum nunc euismod, facilisis metus sit amet, tincidunt ligula",
    },
    {
      src: techImage,
      header: "Respect for People",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vehicula mi eget ligula malesuada, at bibendum libero dictum. Maecenas vel neque id odio bibendum tristique. Proin nec libero non odio scelerisque pharetra ut ac ex. Integer blandit eros et dolor ultrices, sed dapibus sapien laoreet. Nulla facilisi. Nulla vel dolor nec nisi finibus malesuada. Curabitur fermentum nunc euismod, facilisis metus sit amet, tincidunt ligula.",
    },
    {
      src: bwImage,
      header: "Diversity and Inclusiveness",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vehicula mi eget ligula malesuada, at bibendum libero dictum. Maecenas vel neque id odio bibendum tristique. Proin nec libero non odio scelerisque pharetra ut ac ex. Integer blandit eros et dolor ultrices, sed dapibus sapien laoreet. Nulla facilisi. Nulla vel dolor nec nisi finibus malesuada. Curabitur fermentum nunc euismod, facilisis metus sit amet, tincidunt ligula",
    },
  ];

  return (
    <div style={{ padding: 24 }}>
      <h1 style={{ marginTop: 120 }}>
        Our Core{" "}
        <span
          style={{
            backgroundColor: "#01152C",
            color: "#fff",
            padding: "0px 12px",
          }}
        >
          Values
        </span>
      </h1>
      <p
        style={{
          color: "#808080",
          maxWidth: 700,
          marginBottom: 60,
          marginTop: -24,
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
        vehicula mi eget ligula malesuada, at bibendum libero dictum. Maecenas
        vel neque id odio bibendum tristique. Proin nec libero non odio
        scelerisque pharetra ut ac ex. Integer blandit eros et dolor ultrices,
        sed dapibus sapien laoreet. Nulla facilisi. Nulla vel dolor nec nisi
        finibus malesuada. Curabitur fermentum nunc euismod, facilisis metus sit
        amet, tincidunt ligula
      </p>
      <PictureGrid images={images} />
    </div>
  );
};

export default GalleryPage;
