import React from "react";
import { useLocation } from "react-router-dom";
import { InsightType } from "./LegalInsights.types";
import "./LegalInsightDetail.css";

const LegalInsightDetail: React.FC = () => {
  const location = useLocation();
  const { insight } = location.state as { insight: InsightType };

  if (!insight) {
    return <div className="error-message">No insight data available.</div>;
  }

  return (
    <div className="legal-insight-detail">
      <img src={insight.image} alt={insight.title} className="insight-image" />
      <h1 className="insight-title">{insight.title}</h1>
      <div className="insight-description">
        {insight.description.split('\n').map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>
    </div>
  );
};

export default LegalInsightDetail;
