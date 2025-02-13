import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { InsightType } from "./LegalInsights.types";
import "./LegalInsightDetail.css";
import { formatDescription } from "../../Admin/Pages/LegalInsights/LegalInsightsComponent";
import { fetchLegalInsightById } from "../../Redux/Admin/legalInsightsSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../Redux/store";
import Loader from "../Loader/Loader";

const LegalInsightDetail: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const { id } = useParams<{ id: string }>();

  const [insight, setInsight] = useState<InsightType | null>(null);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    if (!id) return;

    setError("");
    dispatch(fetchLegalInsightById(id))
      .then((response) => {
        if (response.payload.success === true) {
          setInsight(response.payload.data);
        } else {
          setError("No insight data found.");
        }
      })
      .catch(() => setError("An error occurred while fetching the insight."));
  }, [id, dispatch]);

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  if (!insight) {
    return (
      <div
        style={{
          height: "100vh",
          width: "100vw",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Loader />
      </div>
    );
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
