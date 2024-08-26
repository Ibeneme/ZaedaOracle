import React, { useEffect, useState } from "react";
import "./Hero.css";
import image1 from "../../../assets/images/main.jpg";
import RollingLogos from "./RollingLogos/RollingLogos";
import CenteredTextSection from "../CenteredTextSection/CenteredTextSection";
//import BlogHero from "../../Blog/BlogHero/BlogHero";
import HeroHeader from "./HeroHeader";
import OurTeam from "../Our_Teams/OurTeams";
import FAQPage from "../FAQPage/FAQPage";
import Testimonials from "../Testimonials/Testimonials";
import WhyChooseUsD from "../Why_Choose_us/D/WhyChooseUsD";
import WhyChooseUsE from "../Why_Choose_us/E/WhyChooseUsE";
import WhyChooseUsF from "../Why_Choose_us/F/WhyChooseUsF";
import WhyChooseUsG from "../Why_Choose_us/G/WhyChooseUsG";

const Hero: React.FC = () => {
  const heroTitle = "Zaeda Oracle Limited";
  const contentTexts = "Navigating the creative economy in ";
  const [slideClass, setSlideClass] = useState("hero-slide");

  useEffect(() => {
    setTimeout(() => {
      setSlideClass("hero-slide enter");
    }, 0); // Delay added to trigger transition
  }, []);

  return (
    <div>
      <HeroHeader />
      <div className="hero-container">
        <div
          className={slideClass}
          style={{
            backgroundImage: `url(${image1})`,
            width: "100vw",
            height: "80vh",
          }}
        >
          <div className="hero-overlay"></div>
          <div className="hero-content">
            <h2 className="hero-title">{heroTitle}</h2>
            <p className="hero-title-p">
              {contentTexts}{" "}
              <span
                style={{
                  backgroundColor: "#C4D92E",
                  color: "#fff",
                  padding: `0px 5px`,
                }}
              >
                Africa
              </span>
            </p>
          </div>
        </div>
      </div>{" "}
      <RollingLogos />
      <CenteredTextSection />
      <WhyChooseUsD />
      <WhyChooseUsE />
      <WhyChooseUsF />
      <WhyChooseUsG />
      <Testimonials />
      <OurTeam />
      <FAQPage />
    </div>
  );
};

export default Hero;
