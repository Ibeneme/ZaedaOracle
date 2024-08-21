import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./LegalInsights.css";
import fozaImage from "../../assets/images/scale.jpg";
import BlogHero from "../Blog/BlogHero/BlogHero";
import { FaChevronRight } from "react-icons/fa"; // Import Chevron icon

const LegalInsights: React.FC = () => {
  const navigate = useNavigate(); // Initialize navigate
  const overlayRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show-content");
          } else {
            entry.target.classList.remove("show-content");
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the item is in view
    );

    overlayRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      overlayRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const handleReadMore = (title: string) => {
    // Navigate to a detailed page with the title as part of the URL or query parameters
    navigate(`/legal-insights/${title.replace(/\s+/g, "-").toLowerCase()}`);
  };

  const legalInsightsData = [
    {
      title: "Copyright Protection",
      description: "Learn about how to protect your intellectual property.",
      image: fozaImage,
    },
    {
      title: "Contract Negotiations",
      description: "Understand the intricacies of contract law.",
      image: fozaImage,
    },
    {
      title: "Film Financing",
      description: "Explore the legal aspects of financing your film.",
      image: fozaImage,
    },
    // Add more insights as needed
  ];

  return (
    <div>
      <BlogHero title="Legal Insights" />
      <br />
      <div style={{ padding: "150px 0px" }}>
        <h2 style={{ textAlign: "center", fontSize: "4rem" }}>
          Legal Insights
        </h2>
        <div className="legal-insights-grid">
          {legalInsightsData.map((insight, index) => (
            <div
              key={index}
              className="legal-insight-item"
              style={{ backgroundImage: `url(${insight.image})` }}
            >
              <div
                className="overlay"
                ref={(el) => (overlayRefs.current[index] = el)}
              >
                <h1>{insight.title}</h1>
                <p>{insight.description}</p>
                <button
                  className="read-more-button"
                  onClick={() => handleReadMore(insight.title)}
                >
                  Read More <FaChevronRight />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LegalInsights;
