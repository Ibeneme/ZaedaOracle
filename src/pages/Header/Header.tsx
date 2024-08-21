import React, { useState, useContext } from "react";
import "./Header.css"; // Import the CSS file for styling

// Import flags directly
import ukFlag from "../../assets/flags/uk.png";
import germanFlag from "../../assets/flags/germany.png";
import frenchFlag from "../../assets/flags/france.png";
import spanishFlag from "../../assets/flags/spain.png";
import LanguageContext from "../../contexts/LanguageContext";

const languages = [
  { name: "English", code: "en", flag: ukFlag },
  { name: "German", code: "de", flag: germanFlag },
  { name: "French", code: "fr", flag: frenchFlag },
  { name: "Spanish", code: "es", flag: spanishFlag },
];

const Header: React.FC = () => {
  const { language, setLanguage } = useContext(LanguageContext);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const currentLanguage =
    languages.find((lang) => lang.code === language) || languages[0];

  const handleLanguageChange = (languageCode: string) => {
    setLanguage(languageCode);
    setDropdownOpen(false);
  };

  return (
    <div className="header">
      <div
        className="language-selector"
        onClick={() => setDropdownOpen(!dropdownOpen)}
      >
        <img
          src={currentLanguage.flag}
          alt={currentLanguage.name}
          className="flag"
        />
        <span>{currentLanguage.name}</span>
      </div>
      {dropdownOpen && (
        <div className="dropdown">
          {languages.map((language) => (
            <div
              key={language.code}
              className="dropdown-item"
              onClick={() => handleLanguageChange(language.code)}
            >
              <img src={language.flag} alt={language.name} className="flag" />
              <span>{language.name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Header;
