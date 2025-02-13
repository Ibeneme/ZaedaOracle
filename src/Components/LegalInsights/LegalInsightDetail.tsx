import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { InsightType } from "./LegalInsights.types";
import "./LegalInsightDetail.css";
import { formatDescription } from "../../Admin/Pages/LegalInsights/LegalInsightsComponent";
import { fetchLegalInsightById } from "../../Redux/Admin/legalInsightsSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../Redux/store";

const LegalInsightDetail: React.FC = () => {
  const location = useLocation();
  // const { insight } = location.state as { insight: InsightType };
  // console.log(insight, "insight");
  const dispatch: AppDispatch = useDispatch();
  const [message, setMessage] = useState(""); // State for displaying success/error message
  const { id } = useParams<{ id: string }>();
  const [insight, setInsight] = useState(""); 

  const handleFetch = () => {
    setMessage("");
    dispatch(fetchLegalInsightById(id as any))
      .then((response) => {
        console.log(response, "response");
        setInsight(response.payload)
      })
      .catch(() => {
        setMessage("An error occurred while subscribing.");
      });
  };

  useEffect(() => {
    handleFetch();
    if (id) {
      dispatch(fetchLegalInsightById(id)); // Fetch the blog post by ID
    }
  }, [dispatch, id]);

  if (!insight) {
    return <div className="error-message">No insight data available.</div>;
  }

  return (
    <div className="legal-insight-detail">
      <img src={insight.image} alt={insight.title} className="insight-image" />
      <h1 className="insight-title">{insight.title}</h1>
      <div className="insight-description">
        {formatDescription(insight.description)}
      </div>
    </div>
  );
};

export default LegalInsightDetail;
