import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./ImageCarousel.css";
import LanguageContext from "../contexts/LanguageContext";
import translations from "../translations";
import image1 from "../assets/StartPage/bw.jpg";
import image2 from "../assets/StartPage/office.jpg";
import image3 from "../assets/StartPage/studio.jpg";
import image4 from "../assets/StartPage/techcode.jpg";
import Header from "./Header/Header";
import Modal from "../Components/Modal/Modal";

// Array of images
const images = [image1, image2, image3, image4];

// Define border colors for each image
const borderColors = ["#FF5733", "#33FF57", "#3357FF", "#F0FF33"];

const ImageCarousel: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { language } = useContext(LanguageContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000); // Change image every 10 seconds

    return () => clearInterval(interval);
  }, []);

  const currentBorderColor = borderColors[currentImageIndex];

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const navigateToHome = () => {
    navigate("/home");
  };

  return (
    <div className="container">
      <Header />
      <div
        className="carousel"
        style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
      ></div>
      <div
        className="text-content"
        style={{ borderLeft: `14px solid ${currentBorderColor}` }} // Dynamic inline border color
      >
        <h1 className="startpage-headers-h1">
          {translations[language].theAntigravityGroup}
        </h1>
        <span className="startpage-headers-span">
          {translations[language].ideasInMotion}
        </span>
        <br />
        <br />
        <br />
        <p>{translations[language].antigravityMediaLtd}</p>
        <p>{translations[language].antigravityConsulting}</p>
        <p>{translations[language].antigravityIncubated}</p>
        <p>{translations[language].antigravityTechHub}</p>
        <br />
        <div style={{ flexDirection: "row", display: "flex", gap: 12 }}>
          <button className="cta-button" onClick={navigateToHome}>
            {translations[language].discover}
          </button>
          <button className="contact-us-button" onClick={openModal}>
            {translations[language].contactUs}
          </button>
        </div>
      </div>
      {isModalOpen && <Modal onClose={closeModal} />} {/* Display the modal */}
    </div>
  );
};

export default ImageCarousel;
