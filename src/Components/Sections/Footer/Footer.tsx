import React from "react";
import "./Footer.css"; // Import the CSS file for styling
//import { FaEnvelope, FaLocationArrow, FaPhone } from "react-icons/fa";
import { FaLinkedin, FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
            <h1>Zaeda Oracle</h1>
          </div>
          {/* <div className="footer-contact">
          <h2>Contact Us</h2>
          <div className="footer-contact-grid">
            <div className="footer-item">
              <div className="footer-item-icon">
                <FaEnvelope size={16} className="contact-icon" />
              </div>
              <span>
                Email us at{" "}
                <a style={{ color: "#fff" }} href="mailto:info@zaedaoracle.com">
                  info@zaedaoracle.com
                </a>
              </span>
            </div>
            <div className="footer-item">
              <div className="footer-item-icon">
                <FaPhone size={16} className="contact-icon" />
              </div>
              <span>
                Call us at{" "}
                <a style={{ color: "#fff" }} href="tel:+234111848399">
                  +234 111 848 399
                </a>
              </span>
            </div>
            <div className="footer-item">
              <div className="footer-item-icon">
                <FaLocationArrow size={16} className="contact-icon" />
              </div>
              <span>
                110 W Randol Mill Road, Suite 240, Arlington, Texas, 76011.
              </span>
            </div>
          </div>
        </div> */}
          <br />
          <br />
          <br />
          <div className="footer-social">
            <a
              href="https://linkedin.com/company/zaeda-oracle"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://instagram.com/zaedaoracleltd"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://twitter.com/zaedaoracle"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://facebook.com/zaedaoracle"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebook size={24} />
            </a>
          </div>
        </div>
        <br />
        <br />
        <br /> <br />
        <div className="footer-bottom">
          <div className="footer-links">
            <ul>
              <li>
                <a href="/home">Home</a>
              </li>
              <li>
                <a href="/about-us">About Us</a>
              </li>
              <li>
                <a href="/services">Services</a>
              </li>
              <li>
                <a href="/blog">News & Insights</a>
              </li>
              <li>
                <a href="/contact-us">Contact Us</a>
              </li>
            </ul>
          </div>
          <br />
          <br />
          <br />
          <div className="footer-terms">
            {/* <h2>Terms of Service</h2> 
          <p>
            <a href="/terms-of-service">
              Review our Terms of Service to understand the terms and conditions
              of using our services.
            </a>
          </p>*/}
          </div>
        </div>
        <div className="footer-bottom">
          <p style={{ fontSize: 12, color: "#f4f4f4" }}>
            &copy; {new Date().getFullYear()} Zaeda Oracle. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
