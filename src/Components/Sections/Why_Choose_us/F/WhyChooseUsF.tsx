import "../WhyChooseUs.css"; // Import your CSS file here
import "aos/dist/aos.css";
// Import your image
import exampleImage from "../../../../assets/images/f.png"; // Update the path to your image

const WhyChooseUsF: React.FC = () => {
  return (
    <section className="why-choose-us-section-a">
      <div className="why-choose-us-text">
        <h2>
          Legal Services for the
          <br />
          <span
            style={{
              backgroundColor: "#000",
              color: "#fff",
              padding: "0px 8px",
            }}
          >
            Film Industry
          </span>
        </h2>

        <ul>
          <li>
            <strong style={{ color: "#000" }}>Production Agreements:</strong> We
            draft and negotiate production agreements, ensuring that our clients
            involved in film production have clear and fair terms.
          </li>
          <li>
            <strong style={{ color: "#000" }}>Distribution Rights:</strong> We
            assist with securing and protecting distribution rights for your
            film projects, both domestically and internationally.
          </li>
          <li>
            <strong style={{ color: "#000" }}>Copyright Protection:</strong> Our
            team ensures your film's creative content is legally protected
            through comprehensive copyright services.
          </li>
          <li>
            <strong style={{ color: "#000" }}>Contract Negotiations:</strong> We
            handle all aspects of contract negotiations to ensure your interests
            are well-represented in every deal.
          </li>
          <li>
            <strong style={{ color: "#000" }}>
              Film Financing Structuring:
            </strong>{" "}
            We handle and advise on ways motion pictures (either short films or
            movies) can be financed.
          </li>
        </ul>
      </div>
      <div className="why-choose-us-image">
        <img src={exampleImage} alt="Film Industry Services" />
      </div>
    </section>
  );
};

export default WhyChooseUsF;
