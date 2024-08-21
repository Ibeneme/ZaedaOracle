import React from "react";
import { Typewriter } from 'react-simple-typewriter';
import "./RollingLogos.css";

const RollingLogos: React.FC = () => {
  return (
    <section className="rolling-logos-container">
      <div className="rolling-logos-wrapper">
        <div className="rolling-logo-item">
          <Typewriter
            words={['Welcome to Zaeda Oracle Limited - Your Trusted Partner in Legal and Business Services for the Creative Industries.']}
            loop={1}
            cursor
            typeSpeed={50}
            deleteSpeed={50}
            delaySpeed={1000}
            cursorStyle="|"
            
          />
        </div>
      </div>
    </section>
  );
};

export default RollingLogos;
