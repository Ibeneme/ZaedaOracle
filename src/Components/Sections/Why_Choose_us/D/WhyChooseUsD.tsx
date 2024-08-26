import "../WhyChooseUs.css"; // Import your CSS file here
import "aos/dist/aos.css";
// Import your image
import exampleImage from "../../../../assets/images/e.png"; // Update the path to your image

const WhyChooseUsD: React.FC = () => {
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
            Music Industry
          </span>
        </h2>

        <ul>
          <li>
            <strong style={{ color: "#000" }}>
              Contract Drafting and Review:
            </strong>{" "}
            We assist with drafting, reviewing, and negotiating contracts to
            ensure your rights and interests are protected in every agreement.
          </li>
          <li>
            <strong style={{ color: "#000" }}>
              Intellectual Property Rights Management:
            </strong>{" "}
            Our team helps you secure and manage your intellectual property
            rights, including copyrights, trademarks, and patents, to protect
            your creative works.
          </li>
          <li>
            <strong style={{ color: "#000" }}>
              Licensing and Royalties:
            </strong>{" "}
            We offer guidance on licensing agreements and ensure you receive
            fair compensation through accurate royalty calculations and
            distributions.
          </li>
          <li>
            <strong style={{ color: "#000" }}>
              Dispute Resolution and Litigation:
            </strong>{" "}
            Our legal experts are skilled in resolving disputes through
            negotiation, mediation, and, if necessary, litigation to protect
            your interests.
          </li>
        </ul>
      </div>
      <div className="why-choose-us-image">
        <img src={exampleImage} alt="Why Choose Us" />
      </div>
    </section>
  );
};

export default WhyChooseUsD;
