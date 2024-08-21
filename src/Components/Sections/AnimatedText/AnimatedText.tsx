import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./animatedTextStyles.css"; // Import CSS file

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Component
const AnimatedText: React.FC = () => {
  useEffect(() => {
    // Animation logic
    const textElements = gsap.utils.toArray(".lastsection-Text");
    textElements.forEach((text: any) => {
      gsap.to(text, {
        backgroundSize: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: text,
          start: "center 80%",
          end: "center 20%",
          scrub: true,
        },
      });
    });
  }, []);

  return (
    <div className="lastsection-Container">
      <h1 className="lastsection-Text">INTEGRITY AND PROFESSIONALISM,</h1>
      <h1 className="lastsection-Text">RESPECT FOR ALL,</h1>
      <h1 className="lastsection-Text">DIVERSITY & INCLUSIVENESS,</h1>
      <h1 className="lastsection-Text">ZERO DISCRIMINATION.</h1>
    </div>
  );
};

export default AnimatedText;
