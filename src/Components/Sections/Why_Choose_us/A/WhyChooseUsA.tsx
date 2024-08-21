import "../WhyChooseUs.css"; // Import your CSS file here
// Import your image
import exampleImage from "../../../../assets/images/mission.png"; // Update the path to your image

const WhyChooseUsA: React.FC = () => {
  return (
    <section className="why-choose-us-section-a">
      <div className="why-choose-us-text">
        <h2>Mission Statement</h2>
        <p style={{ fontSize: 20 }}>
          To be the leading legal and business firm dedicated to nurturing and
          protecting creatives across Africa, while ensuring the sustainability
          and profitability of their ventures. We aim to drive the African
          creative economy forward by crafting innovative and profitable
          business models that empower creatives to thrive.{" "}
        </p>
      </div>
      <div className="why-choose-us-image">
        <img src={exampleImage} alt="Example" />
      </div>
    </section>
  );
};

export default WhyChooseUsA;
