import React from "react";
import { useNavigate } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";
import "./OurSubsidiaries.css"; // Import your CSS file here

// Import your images
import bgRed from "../../../assets/Navbar/OurSub/bg-red.png";
import bgBlue from "../../../assets/Navbar/OurSub/bg-blue.png";
import bgPurple from "../../../assets/Navbar/OurSub/bg-purple.png";
import bgYellow from "../../../assets/Navbar/OurSub/bg-yellow.png";

interface Subsidiary {
  name: string;
  description: string;
  image: string;
  route: string;
}

const subsidiaries: Subsidiary[] = [
  {
    name: "Antigravity Media",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada.",
    image: bgBlue,
    route: "/media",
  },
  {
    name: "Antigravity TechHub",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada.",
    image: bgYellow,
    route: "/tech",
  },
  {
    name: "Antigravity Incubated",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada.",
    image: bgRed,
    route: "/incubated",
  },
  {
    name: "Antigravity Consulting",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada.",
    image: bgPurple,
    route: "/consulting",
  },
];

const OurSubsidiaries: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="subsidiaries-container">
      <div className="subsidiaries-header">
        <h2>Our Subsidiaries</h2>
      </div>
      <div className="subsidiaries-grid">
        {subsidiaries.map((subsidiary, index) => (
          <div
            key={index}
            className="subsidiary-item"
            onClick={() => navigate(subsidiary.route)}
          >
            <img src={subsidiary.image} alt={subsidiary.name} />
            <div className="subsidiary-content">
              <h3>{subsidiary.name}</h3>
              <p>{subsidiary.description}</p>
              <div className="view-more-sub">
                View
                <FaChevronRight size={12} style={{marginLeft: '16'}} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurSubsidiaries;
