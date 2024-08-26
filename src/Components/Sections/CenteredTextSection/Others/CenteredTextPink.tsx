import React, { useState } from "react";
import "./CenteredTextSectionPink.css";
//import { useNavigate } from "react-router-dom";
import Modal from "../../../Modal/Modal";

const CenteredTextSectionPink: React.FC = () => {
  //const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // const handleNavigation = (path: string) => {
  //   navigate(path);
  // };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section className="centered-text-section-pink">
      <h2 className="section-header" style={{ marginTop: -64 }}>
        Empowering Africa’s Creative
        <br />
        <span
          style={{
            backgroundColor: "#000",
            color: "#fff",
            padding: "4px 16px",
            marginTop: 48,
          }}
        >
          {" "}
          Industry
        </span>
        <br />
      </h2>
      <p className="section-paragraph">
        At Zaeda Oracle, we are dedicated to empowering Africa's creative
        industry through comprehensive legal and business support. Our approach
        focuses on understanding and addressing the unique challenges faced by
        creative professionals, providing them with tailored solutions that
        foster growth and success. We are committed to facilitating access to
        valuable resources, offering strategic guidance, and creating
        opportunities for innovation. By investing in the development of
        creative talent and promoting sustainable practices, we aim to drive
        progress and contribute to a vibrant and thriving creative economy
        across the continent{" "}
      </p>

      <button className="cta-button" onClick={openModal}>
        Contact Us
      </button>

      {isModalOpen && <Modal onClose={closeModal} />}
    </section>
  );
};

export default CenteredTextSectionPink;
