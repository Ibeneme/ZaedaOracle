import "../WhyChooseUs.css"; // Import your CSS file here
import "aos/dist/aos.css";
// Import your image
import exampleImage from "../../../../assets/images/vision.png"; // Update the path to your image

const WhyChooseUsB: React.FC = () => {
  return (
    <section className="why-choose-us-section">
      <div className="why-choose-us-text">
        <h2>Vision Statement</h2>
        <p style={{ fontSize: 20 }}>
          Our mission at Zaeda Oracle is to empower and safeguard creatives
          across Africa by providing comprehensive legal and business support.
          We are committed to fostering sustainable practices and developing
          innovative, profitable business models that drive growth within the
          African creative economy.{" "}
        </p>
      </div>
      <div className="why-choose-us-image">
        <img src={exampleImage} alt="Example" />
      </div>
    </section>
  );
};

export default WhyChooseUsB;
