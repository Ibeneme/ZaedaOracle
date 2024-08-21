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
        backgroundColor: "antiquewhite",
        marginBottom: -120,
        paddingBottom: 360,
      }}
    >
      <h3 className="section-header">Contact us</h3>
      <p className="section-paragraph">
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
          }}
        >
          <div
            style={{
              backgroundColor: "#030928",
              padding: 12,
              borderRadius: 4,
              width: "fit-content",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <FaEnvelope className="contact-icon-div" />{" "}
          </div>
          Email us at{" "}
          <a
            href="mailto:info@zaedaoracle.com"
            style={{ fontWeight: 900, color: "#030928" }}
          >
            info@zaedaoracle.com
          </a>{" "}
          for any inquiries.
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
              backgroundColor: "#030928",
              padding: 12,
              borderRadius: 4,
              width: "fit-content",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <FaPhone className="contact-icon-div" />{" "}
          </div>
          Call us at{" "}
          <a
            href="tel:+234111848399"
            style={{ fontWeight: 900, color: "#030928" }}
          >
            +234111848399
          </a>{" "}
          to speak with a member of our team.
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
              backgroundColor: "#030928",
              padding: 12,
              borderRadius: 4,
              width: "fit-content",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <FaMapMarkerAlt className="contact-icon-div" />{" "}
          </div>
          110 W Randol Mill Road, Suite 240, Arlington, Texas, 76011.
        </p>
      </div>
      <button className="cta-button" onClick={openModal}>
        Contact Us
      </button>
      {isModalOpen && <Modal onClose={closeModal} />}
    </section>
  );
};

export default CenteredTextSectionContact;
