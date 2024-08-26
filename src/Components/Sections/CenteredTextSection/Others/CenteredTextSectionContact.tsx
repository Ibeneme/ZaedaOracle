import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import "../CenteredTextSection.css"; // Import your CSS file here
import Modal from "../../../Modal/Modal";

const CenteredTextSectionContact: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section
      className="centered-text-section"
      style={{
        backgroundColor: "#000",
        marginBottom: -120,
        paddingBottom: 360,
      }}
    >
      <h3 className="section-header" style={{ color: "#C4D92E" }}>
        Contact us
      </h3>
      <p className="section-paragraph" style={{ color: "#C4D92E" }}>
        Have questions or need legal assistance? Fill out our contact form and
        our team will get back to you promptly.
      </p>
      <div className="contact-details-div">
        <p
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 12,
            color: "#fff",
          }}
        >
          <div
            style={{
              backgroundColor: "#ffffff45",
              padding: 12,
              borderRadius: 4,
              width: "fit-content",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <FaMapMarkerAlt
              className="contact-icon-div"
              style={{ color: "#fff" }}
            />{" "}
          </div>
          110 W Randol Mill Road, Suite 240, Arlington, Texas, 76011.
        </p>
        <p
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 12,
          }}
        >
          <div
            style={{
              backgroundColor: "#ffffff45",
              padding: 12,
              borderRadius: 4,
              width: "fit-content",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <FaEnvelope
              className="contact-icon-div"
              style={{ color: "#fff" }}
            />{" "}
          </div>
          <a
            href="mailto:info@zaedaoracle.com"
            style={{ fontWeight: 900, color: "#fff" }}
          >
            info@zaedaoracle.com
          </a>{" "}
        </p>
        <p
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 12,
          }}
        >
          <div
            style={{
              backgroundColor: "#ffffff45",
              padding: 12,
              borderRadius: 4,
              width: "fit-content",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <FaPhone className="contact-icon-div" style={{ color: "#fff" }} />{" "}
          </div>
          <a
            href="tel:+2348039415693"
            style={{ fontWeight: 900, color: "#fff" }}
          >
            +2348039415693
          </a>{" "}
        </p>
      </div>
      <button
        className="cta-button"
        onClick={openModal}
        style={{ backgroundColor: "#C4D92E", border: `1px solid #C4D92E` }}
      >
        Contact Us
      </button>
      {isModalOpen && <Modal onClose={closeModal} />}
    </section>
  );
};

export default CenteredTextSectionContact;
