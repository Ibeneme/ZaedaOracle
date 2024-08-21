import React from 'react';
import { useParams } from 'react-router-dom';
import './LegalInsightDetail.css';
import fozaImage from '../../assets/images/teams/fozaa.jpg'; // Placeholder image

const LegalInsightDetail: React.FC = () => {
  const { title } = useParams<{ title: string }>(); // Retrieve the title from URL
  // Example content based on the title
  const insights = {
    'copyright-protection': {
      title: "Copyright Protection",
      content: "Detailed content about protecting intellectual property.",
      image: fozaImage,
    },
    'contract-negotiations': {
      title: "Contract Negotiations",
      content: "Detailed content about contract negotiations.",
      image: fozaImage,
    },
    'film-financing': {
      title: "Film Financing",
      content: "Detailed content about film financing.",
      image: fozaImage,
    },
    // Add more insights as needed
  };

  const insight = insights[title as keyof typeof insights] || {
    title: "Not Found",
    content: "The requested insight could not be found.",
    image: fozaImage,
  };

  return (
    <div className="legal-insight-detail">
      <img src={insight.image} alt={insight.title} className="insight-image" />
      <h1>{insight.title}</h1>
      <p>{insight.content}</p>
    </div>
  );
};

export default LegalInsightDetail;
