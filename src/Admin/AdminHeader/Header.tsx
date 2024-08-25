import React from "react";
import { FaNewspaper, FaFileAlt } from "react-icons/fa";
import { useMediaQuery } from "react-responsive";
import { useLocation, useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import styles from "./Header.module.css"; // Updated CSS module import

const Header: React.FC = () => {
  // Use media query to check if the view is mobile
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const location = useLocation(); // Get the current route
  const navigate = useNavigate(); // Use navigate to programmatically change routes

  // Determine the active route
  const isNewsActive = location.pathname === "/news-insights-admin";
  const isLegalActive = location.pathname === "/legal-insights-admin";

  // Handle navigation to different routes
  const handleNavigation = (route: string) => {
    navigate(route);
  };

  return (
    <header className={isMobile ? styles.mobileHeader : styles.header}>
      <div
        className={`${styles.navItem} ${
          isNewsActive ? styles.activeNavItem : ""
        }`}
        onClick={() => handleNavigation("/news-insights-admin")}
      >
        <FaNewspaper
          className={`${styles.icon} ${isNewsActive ? styles.activeIcon : ""}`}
        />
        <p className={`${styles.p} ${isNewsActive ? styles.activeText : ""}`}>
          News Insights
        </p>
      </div>
      <div
        className={`${styles.navItem} ${
          isLegalActive ? styles.activeNavItem : ""
        }`}
        onClick={() => handleNavigation("/legal-insights-admin")}
      >
        <FaFileAlt
          className={`${styles.icon} ${isLegalActive ? styles.activeIcon : ""}`}
        />
        <p className={`${styles.p} ${isLegalActive ? styles.activeText : ""}`}>
          Legal Insights
        </p>
      </div>
    </header>
  );
};

export default Header;
