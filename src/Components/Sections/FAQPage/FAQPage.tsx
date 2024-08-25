import React, { useState } from "react";
import "./FAQPage.css";

const FAQPage: React.FC = () => {
  const faqs = [
    {
      question: "How Do You Bill for your Legal services?",
      answer:
        "We have different packages. Once you send us an email, you will be sent the different packages from which you can choose which suits you best.",
    },
    {
      question: "Will more than one lawyer be working on my case?",
      answer:
        "At every point, a lawyer is assigned to you. However, if your package requires more than one, you will be notified.",
    },
    {
      question: "What are the services of the Company?",
      answer:
        "We carry out legal services, business management, and provide creative solutions to our clients in the Creative Industry.",
    },
    {
      question: "Does your Company provide management services?",
      answer:
        "Yes, depending on your retainer package, we provide business management services to our clients, including looking for avenues to expand your brand.",
    },
    {
      question: "Must every meeting be physical?",
      answer:
        "No, every meeting does not have to be physical. One of our strengths is adjusting to the digital age, allowing us to provide means for meetings to be held virtually.",
    },
  ];

  // State to track active accordion
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Toggle accordion
  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      <div className="faq-page">
        <h1 style={{ fontFamily: "var(--fontFamily)" }}>
          Frequently Asked Questions
        </h1>
        <br />
        <div className="faq-container">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${activeIndex === index ? "active" : ""}`}
            >
              <div
                className="faq-question"
                onClick={() => toggleAccordion(index)}
              >
                <h3>{faq.question}</h3>
                <span className="faq-icon">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </div>
              <div
                className="faq-answer"
                style={{
                  maxHeight: activeIndex === index ? "200px" : "0",
                  overflow: "hidden",
                }}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
