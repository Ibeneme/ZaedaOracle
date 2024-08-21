import React from 'react';
import './MissionSection.css'; // Import the CSS for styling

// Import the parallax image
import missionParallaxImage from "../../../assets/StartPage/studio.jpg";

const MissionSection: React.FC = () => {
  return (
    <section className="mission-section">
      <div className="mission-parallax">
        <img src={missionParallaxImage} alt="Mission" />
      </div>
      <div className="mission-content">
        <h1>Our Mission</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          vehicula mi eget ligula malesuada, at bibendum libero dictum.
          Maecenas vel neque id odio bibendum tristique. Proin nec libero non
          odio scelerisque pharetra ut ac ex. Integer blandit eros et dolor
          ultrices, sed dapibus sapien laoreet. Nulla facilisi. Nulla vel
          dolor nec nisi finibus malesuada. Curabitur fermentum nunc euismod,
          facilisis metus sit amet, tincidunt ligula.
        </p>
      </div>
    </section>
  );
};

export default MissionSection;
