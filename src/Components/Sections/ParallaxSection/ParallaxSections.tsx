import React, { useEffect, useRef } from "react";
import "./ParallaxSection.css";

const ParallaxSection: React.FC = () => {
  const parallaxRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      parallaxRefs.current.forEach((ref, index) => {
        if (ref) {
          const speed = index === 1 ? 0.5 : (index + 1) * 0.2; // Reduced speed for the middle container
          const offset = window.pageYOffset * speed;
          ref.style.backgroundPositionY = `${offset}px`;
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="parallax-section">
      {/* First container with two images */}
      <div className="image-container">
        <img
          src="https://Webimages-used.s3.us-east-005.backblazeb2.com/AG-site/remy_loz-3S0INpfREQc-unsplash.jpg"
          alt="First Image"
          className="static-image"
        />
        <img
          src="https://Webimages-used.s3.us-east-005.backblazeb2.com/AG-site/remy_loz-3S0INpfREQc-unsplash.jpg"
          alt="Second Image"
          className="static-image"
        />
      </div>

      {/* Middle container with parallax images */}
      <div className="parallax-container">
        <div
          className="parallax-image"
          ref={(el) => (parallaxRefs.current[0] = el!)}
          style={{
            backgroundImage:
              "url('https://Webimages-used.s3.us-east-005.backblazeb2.com/AG-site/anton-rybakov-FtQ174OU--Y-unsplash.jpg')",
          }}
        ></div>
        <div
          className="parallax-image"
          ref={(el) => (parallaxRefs.current[1] = el!)}
          style={{
            backgroundImage:
              "url('https://Webimages-used.s3.us-east-005.backblazeb2.com/AG-site/james-mcdonald-3d4sSUChunA-unsplash.jpg')",
          }}
        ></div>
        <div
          className="parallax-image"
          ref={(el) => (parallaxRefs.current[2] = el!)}
          style={{
            backgroundImage:
              "url('https://Webimages-used.s3.us-east-005.backblazeb2.com/AG-site/michael-soledad-9juYjd6iQLU-unsplash.jpg')",
          }}
        ></div>
      </div>

      {/* Last container with two images */}
      <div className="image-container">
        <img
          src="https://Webimages-used.s3.us-east-005.backblazeb2.com/AG-site/remy_loz-3S0INpfREQc-unsplash.jpg"
          alt="First Image"
          className="static-image"
        />
        <img
          src="https://Webimages-used.s3.us-east-005.backblazeb2.com/AG-site/remy_loz-3S0INpfREQc-unsplash.jpg"
          alt="Second Image"
          className="static-image"
        />
      </div>
    </div>
  );
};

export default ParallaxSection;
