import React from "react";
import "./VisionSection.css"; // Import the CSS for styling

// Import the parallax image
import parallaxImage from "../../../assets/StartPage/studio.jpg";

const VisionSection: React.FC = () => {
  return (
    <section className="vision-section">
      <div className="vision-content">
        <h1>Our Vision</h1>
        <p>
          At Antigravitygroup, our vision is to revolutionize the industry with
          innovative solutions and groundbreaking technologies. We aim to push
          the boundaries of what's possible and drive positive change globally.
        </p>
      </div>
      <div className="vision-parallax">
        <img src={parallaxImage} alt="Vision" />
      </div>
    </section>
  );
};

export default VisionSection;
