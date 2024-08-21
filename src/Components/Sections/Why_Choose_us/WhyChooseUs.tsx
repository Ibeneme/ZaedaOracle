import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./WhyChooseUs.css"; // Import your CSS file here

// Import your image
import exampleImage from "../../../assets/why_choose_us/whya.png"; // Update the path to your image

const WhyChooseUs: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  return (
    <section className="why-choose-us-section" data-aos="zoom-in">
      <div className="why-choose-us-text" data-aos="zoom-in">
        <h2>Who Are We</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          lacinia odio vitae vestibulum. Cras venenatis euismod malesuada. Nulla
          facilisi. Integer in sapien nec magna feugiat gravida. Sed ut dui nec
          ante aliquam pharetra ac ac urna. Aliquam erat volutpat.
        </p>
        <p>
          Phasellus vulputate, magna non auctor facilisis, urna quam venenatis
          orci, nec luctus est purus a ligula. Mauris tincidunt sit amet libero
          in ullamcorper. Fusce sed arcu sed urna vestibulum feugiat. Duis
          tempor, sem sed aliquam pretium, neque libero volutpat turpis, vel
          sagittis elit ante in lectus.
        </p>
      </div>
      <div className="why-choose-us-image" data-aos="zoom-in">
        <img src={exampleImage} alt="Example" />
      </div>
    </section>
  );
};

export default WhyChooseUs;
