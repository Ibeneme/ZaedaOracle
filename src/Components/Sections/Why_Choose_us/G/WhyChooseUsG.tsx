import "../WhyChooseUs.css"; // Import your CSS file here } from "react";

// Import your image
import exampleImage from "../../../../assets/images/new.png"; // Update the path to your image

const WhyChooseUsG: React.FC = () => {
  return (
    <section className="why-choose-us-section">
      <div className="why-choose-us-text">
        <h2>General Legal Services</h2>
        <ul>
          <li>
            <strong>Business Formation and Incorporation:</strong> We assist
            with the legal aspects of forming and incorporating your business,
            ensuring compliance with all regulatory requirements.
          </li>
          <li>
            <strong>Compliance and Regulatory Advice:</strong> We offer guidance
            on compliance with industry regulations and standards to help your
            business operate smoothly and legally.
          </li>
          <li>
            <strong>General Litigation:</strong> Our experienced litigators
            handle a wide range of legal disputes, providing effective
            representation in court.
          </li>
        </ul>
      </div>
      <div className="why-choose-us-image">
        <img src={exampleImage} alt="General Legal Services" />
      </div>
    </section>
  );
};

export default WhyChooseUsG;
