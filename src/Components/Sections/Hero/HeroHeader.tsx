import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Hero.css";
import Modal from "../../Modal/Modal";

const HeroHeader: React.FC = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  //const setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // const toggleDropdown = () => {
  //   setDropdownOpen((prev) => !prev);
  // };

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const isActive = (path: string) => location.pathname === path;
  const [isModalOpen, setIsModalOpen] = useState(false);

  //   const handleNavigation = (path: string) => {
  //     navigate(path);
  //   };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <header className={`hero-header ${showNavbar ? "scrolled" : "scrolled"}`}>
      <div className="hero-header-title">
        <h1
          className={`hero-header-title ${
            showNavbar ? "scrolled" : "scrolled"
          }`}
          onClick={() => navigate("/")}
        >
          Zaeda Oracle
        </h1>
      </div>

      <nav className={`hero-navbar ${mobileMenuOpen ? "open" : ""}`}>
        <ul>
          <li
            onClick={() => navigate("/home")}
            className={isActive("/home") ? "active-route" : ""}
          >
            Home
          </li>
          <li
            onClick={() => navigate("/our-services")}
            className={isActive("/our-services") ? "active-route" : ""}
          >
            Our Services
          </li>
          <li
            onClick={() => navigate("/faqs")}
            className={isActive("/faqs") ? "active-route" : ""}
          >
            FAQs
          </li>
          <li
            onClick={() => navigate("/about-us")}
            className={isActive("/about-us") ? "active-route" : ""}
          >
            About Us
          </li>
          <li
            onClick={() => navigate("/our-team")}
            className={isActive("/our-team") ? "active-route" : ""}
          >
            Our Team
          </li>
          <li
            onClick={() => navigate("/blog")}
            className={isActive("/blog") ? "active-route" : ""}
          >
            News and Insights
          </li>
          <li
            onClick={() => navigate("/legal-insights")}
            className={isActive("/legal-insights") ? "active-route" : ""}
          >
            Legal Insights
          </li>
          <li
            onClick={openModal}
            className={isActive("/") ? "active-route" : ""}
          >
            Contact Us
          </li>
        </ul>
        {isModalOpen && <Modal onClose={closeModal} />}
      </nav>

      <div className="burger-menu" onClick={toggleMobileMenu}>
        {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </div>
    </header>
  );
};

export default HeroHeader;
