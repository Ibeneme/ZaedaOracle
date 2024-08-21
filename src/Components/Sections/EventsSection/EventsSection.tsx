import React from "react";
import "./EventsSection.css";
import { FaChevronRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import bgRed from "../../../assets/Navbar/OurSub/bg-red.png";
import bgBlue from "../../../assets/Navbar/OurSub/bg-blue.png";
import bgPurple from "../../../assets/Navbar/OurSub/bg-purple.png";
import bgYellow from "../../../assets/Navbar/OurSub/bg-yellow.png";

const EventsSection: React.FC = () => {
  const navigate = useNavigate();

  // Event type definition
  interface Event {
    title: string;
    date: string;
    time: string;
    venue: string;
    image: string;
    route: string;
    name?: string;
  }

  // Sample events data
  const events: Event[] = [
    {
      title: "Event 1: Antigravity Media",
      date: "August 15, 2024",
      time: "7:00 PM",
      venue: "Downtown Arena",
      image: bgRed,
      route: "/media",
    },
    {
      title: "Event 2: Antigravity TechHub",
      date: "September 10, 2024",
      time: "6:00 PM",
      venue: "City Hall",
      image: bgBlue,
      route: "/tech",
    },
    {
      title: "Event 3: Antigravity Incubated",
      date: "October 20, 2024",
      time: "5:00 PM",
      venue: "Innovation Center",
      image: bgPurple,
      route: "/incubated",
    },
    {
      title: "Event 4: Antigravity Consulting",
      date: "November 15, 2024",
      time: "4:00 PM",
      venue: "Tech Park",
      image: bgYellow,
      route: "/consulting",
    },
  ];

  return (
    <>
      <section className="subsidiaries-container">
        <div className="subsidiaries-header">
          <h2>Our Events</h2>
        </div>
        <div className="subsidiaries-grid">
          {events.map((event, index) => (
            <div
              key={index}
              className="subsidiary-item"
              onClick={() => navigate(event.route)}
            >
              <img src={event.image} alt={event.title} />
              <div className="subsidiary-content">
                <h3>{event.name || event.title}</h3>
                <p>{event.venue}</p>
                <p>{event.date}</p>
                <div className="view-more-sub">
                  View
                  <FaChevronRight size={12} style={{ marginLeft: "8px" }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="events-section">
        <header className="header-events">
          <p className="header-events-h2" >Antigravity Group</p>
        </header>
      </section>
    </>
  );
};

export default EventsSection;
