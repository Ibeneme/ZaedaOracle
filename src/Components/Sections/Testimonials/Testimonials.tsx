import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./Testimonials.css";

const testimonials = [
  {
    text: "Zaeda Oracle Limited provided exceptional legal services for our film production. Their attention to detail and expertise ensured our project was a success.",
    client: "Client A",
  },
  {
    text: "The Zaeda Oracle Limited team helped us easily navigate complex licensing agreements. We highly recommend their services.",
    client: "Client B",
  },
  {
    text: "Zaeda Oracle knows its onions. Since we started working, my company does not have to worry about legal representation anymore because we know we are fully covered.",
    client: "Client C",
  },
  {
    text: "Zaeda Oracle Limited provided exceptional legal services for our film production. Their attention to detail and expertise ensured our project was a success.",
    client: "Client A",
  },
  {
    text: "The Zaeda Oracle Limited team helped us easily navigate complex licensing agreements. We highly recommend their services.",
    client: "Client B",
  },
  {
    text: "Zaeda Oracle knows its onions. Since we started working, my company does not have to worry about legal representation anymore because we know we are fully covered.",
    client: "Client C",
  },
  {
    text: "Zaeda Oracle Limited provided exceptional legal services for our film production. Their attention to detail and expertise ensured our project was a success.",
    client: "Client A",
  },
  {
    text: "The Zaeda Oracle Limited team helped us easily navigate complex licensing agreements. We highly recommend their services.",
    client: "Client B",
  },
  {
    text: "Zaeda Oracle knows its onions. Since we started working, my company does not have to worry about legal representation anymore because we know we are fully covered.",
    client: "Client C",
  },
];

const Testimonials: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft -= 300;
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += 300;
    }
  };

  return (
    <section className="testimonials">
      <h2
        className="section-header"
        style={{ color: "#fff", marginBottom: 48 }}
      >
        Testimonials
      </h2>
      <div className="testimonials-wrapper">
        <div className="testimonials-container" ref={containerRef}>
          {testimonials.map((testimonial, index) => (
            <div className="testimonial-item" key={index}>
              <span className="testimonial-span-text">"</span>
              <p className="testimonial-text">{testimonial.text}"</p>
              <p className="testimonial-client">- {testimonial.client}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="testimonials-buttons">
        <button onClick={scrollLeft} className="scroll-button">
          <FaChevronLeft />
        </button>
        <button onClick={scrollRight} className="scroll-button">
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
