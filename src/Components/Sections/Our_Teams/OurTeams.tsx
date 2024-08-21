import React, { useEffect, useRef } from "react";
import "./OurTeam.css"; // Import the CSS file for styling

// Import images using ES6 syntax
import fozaImage from "../../../assets/images/teams/fozaa.jpg";
import victorImage from "../../../assets/images/teams/IMG_9167.jpg";
import abioseImage from "../../../assets/images/teams/OLATUNDUN PICTURE.jpg";

const teamMembers = [
  {
    name: "Foza Fawehinmi",
    title: "Founder/Lead Consultant",
    bio: "Oyinkansola ‘Foza’ Fawehinmi is the Founder/Lead Consultant at Zaeda Oracle Limited with over 10 years of experience in legal practice, specializing in intellectual property, entertainment law, and business management.",
    linkedin:
      "https://www.linkedin.com/in/oyinkansola-fawehinmi?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    image: fozaImage,
  },
  {
    name: "Victor Ekpo",
    title: "Senior Legal and Business Consultant",
    bio: "Victor Ekpo is the Senior Legal and Business Manager with over 4 years of expertise and experience in the entertainment Industry and Business Management. He has a strong background in the music industry.",
    linkedin:
      "https://www.linkedin.com/in/victor-ekpo-640309202?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    image: victorImage,
  },
  {
    name: "Abiose Olatundun",
    title: "Executive Assistant",
    bio: "Abiose Olatundun Nusirat is an Accountant with extensive experience across multiple sectors, including banking and entertainment. Her career has been marked by a strong commitment to excellence and a deep understanding of client needs.",
    linkedin:
      "https://www.linkedin.com/in/oyinkansola-fawehinmi?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    image: abioseImage,
  },
];

const OurTeam: React.FC = () => {
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

  return (
    <section className="our-team">
      <h2 className="section-header-teams">Our Team</h2>
      <p className="section-paragraph-teams">Profiles of Key Team Members</p>
      <div className="team-members">
        {teamMembers.map((member, index) => (
          <div
            className="team-member"
            key={index}
            ref={(el) => (overlayRefs.current[index] = el)}
          >
            <div className="team-member-image">
              <img src={member.image} alt={member.name} />
              <div className="team-member-bio">
                <p>{member.bio}</p>
              </div>
            </div>
            <div className="team-member-info">
              <h3>{member.name}</h3>
              <p>{member.title}</p>
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <p>{member.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default OurTeam;
