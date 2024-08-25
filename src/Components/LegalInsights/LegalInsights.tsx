import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../Redux/store";
import { fetchLegalInsights } from "../../Redux/Admin/legalInsightsSlice";
import "./LegalInsights.css";
import fozaImage from "../../assets/images/scale.jpg";
import BlogHero from "../Blog/BlogHero/BlogHero";
import { FaChevronRight } from "react-icons/fa";
import { format } from "date-fns";
import { enGB } from "date-fns/locale";
import { InsightType } from "./LegalInsights.types";

const LegalInsights: React.FC = () => {
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  const { insights, status, error } = useSelector(
    (state: RootState) => state.legalInsights
  );
  const [localError, setLocalError] = useState<string | null>(null);
  const overlayRefs = useRef<Map<string, HTMLDivElement | null>>(new Map());

  useEffect(() => {
    dispatch(fetchLegalInsights())
      .then((response) => {
        console.log(response, "response");
      })
      .catch((err) => {
        setLocalError(err.message || "An error occurred");
      });

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
      { threshold: 0.5 }
    );

    overlayRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      overlayRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [dispatch]);

  const handleReadMore = (insight: InsightType) => {
    navigate(`/legal-insight-details`, {
      state: { insight },
    });
  };

  const formatDate = (date?: Date) => {
    if (!date) return "Date not available";
    return format(date, "do MMMM yyyy, hh:mm a", { locale: enGB });
  };
  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (localError || error) {
    return <div>Error: {localError || error}</div>;
  }

  return (
    <div>
      <BlogHero title="Legal Insights" />
      <br />
      <div style={{ padding: "150px 0px" }}>
        <div className="legal-insights-grid">
          {insights.map((insight) => (
            <div
              key={insight._id}
              className="legal-insight-item"
              style={{ backgroundImage: `url(${insight.image || fozaImage})` }}
            >
              <div
                className="overlay"
                ref={(el) => {
                  if (el) {
                    overlayRefs.current.set(insight._id, el);
                  } else {
                    overlayRefs.current.delete(insight._id);
                  }
                }}
              >
                <h1>{insight.title}</h1>
                <p>
                  {insight.description.slice(0, 180)}
                  {insight.description.length > 180 ? "..." : ""}
                </p>
                <p>
                  <strong>Created:</strong> {formatDate(insight.dateCreated)}
                </p>
                <p>
                  <strong>Updated:</strong> {formatDate(insight.dateUpdated)}
                </p>
                <button
                  className="read-more-button"
                  onClick={() => handleReadMore(insight)}
                >
                  Read More <FaChevronRight />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LegalInsights;
