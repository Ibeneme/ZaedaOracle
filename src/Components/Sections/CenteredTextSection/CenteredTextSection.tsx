import React, { useState } from "react";
import "./CenteredTextSection.css"; // Import your CSS file here
import Modal from "../../Modal/Modal";
//import { useNavigate } from "react-router-dom";

const CenteredTextSection: React.FC = () => {
  //const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  //   const handleNavigation = (path: string) => {
  //     navigate(path);
  //   };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section
      className="centered-text-section"
      style={{ backgroundColor: "#C4D92E" }}
    >
      <h3 className="section-header">
        Your Trusted Partner
        <br />
        in Legal and business Services for the Creative Industries.
        <br />
      </h3>
      <p className="section-paragraph">
        Established in 2023, Zaeda Oracle Limited specialises in providing
        comprehensive legal and business management services to businesses and
        individuals in the music, film, fashion and the creative industries, as
        well as the general public. Our team of 10+ years of experienced lawyers
        and managers are dedicated to safeguarding your interests and ensuring
        your success.
      </p>
      <button className="cta-button" onClick={openModal}>
        Contact Us
      </button>
      <br /> <br />
      {isModalOpen && <Modal onClose={closeModal} />}
    </section>
  );
};

export default CenteredTextSection;
