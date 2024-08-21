import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";
import Modal from "../Modal/Modal";
import logo from "../../assets/logo/Antigravity.png";

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <nav className={`${styles.navbar} ${isModalOpen ? styles.blur : ""}`}>
        <div className={styles.navContainer}>
          <div className={styles.logo} onClick={() => handleNavigation("/")}>
            <img src={logo} alt="Logo" className={styles.logoImage} />
          </div>
          {/* <ul className={styles.navLinks}>
            <li>
              <div
                className={styles.navLink}
                onClick={() => handleNavigation("/")}
              >
                Home
              </div>
            </li>
            <li>
              <div
                className={styles.navLink}
                onClick={() => handleNavigation("/about")}
              >
                About
              </div>
            </li>
            <li>
              <div
                className={styles.navLink}
                onClick={() => handleNavigation("/services")}
              >
                Services
              </div>
            </li>
            <li>
              <div
                className={styles.navLink}
                onClick={() => handleNavigation("/contact")}
              >
                Contact
              </div>
            </li>
          </ul> */}
          <div className={styles.navActions}>
            <button className={styles.loginButton} onClick={openModal}>
              Contact Us
            </button>
          </div>
        </div>
      </nav>
      {isModalOpen && <Modal onClose={closeModal} />}
    </>
  );
};

export default Navbar;
