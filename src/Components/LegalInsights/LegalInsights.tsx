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
import Loader from "../Loader/Loader";
import { formatDescription } from "../../Admin/Pages/LegalInsights/LegalInsightsComponent";

const LegalInsights: React.FC = () => {
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  const { insights, status, error } = useSelector(
    (state: RootState) => state.legalInsights
  );
  const [localError, setLocalError] = useState<string | null>(null);
  const overlayRefs = useRef<Map<string, HTMLDivElement | null>>(new Map());

  useEffect(() => {
    dispatch(fetchLegalInsights()).catch((err) => {
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
      observer.disconnect();
    };
  }, [dispatch]);

  const handleReadMore = (insight: InsightType) => {
    navigate(`/legal-insight-details/${insight?._id}`, {
      state: { insight },
    });
  };

  const formatDate = (date?: Date) => {
    if (!date) return "Date not available";
    return format(date, "do MMMM yyyy, hh:mm a", { locale: enGB });
  };

  if (status === "loading") {
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

  if (localError || error) {
    return <div className="error-message">Error: {localError || error}</div>;
  }

  return (
    <div>
      <BlogHero title="Legal Insights" />
      <br />
      <div style={{ padding: "150px 0px", backgroundColor: "#f4f4f4" }}>
        <div className="legal-insights-grid">
          {insights?.map((insight) => (
            <div
              onClick={() => handleReadMore(insight)}
              key={insight?._id}
              style={{ display: "flex", flexDirection: "column" }}
            >
              <div
                className="legal-insight-item"
                style={{
                  backgroundImage: `url(${insight?.image || fozaImage})`,
                  borderRadius: 32,
                }}
              ></div>

              <div
                style={{
                  padding: 16,
                  backgroundColor: "#fff",
                  borderRadius: 32,
                  marginTop: 8,
                }}
              >
                <h1 style={{ textAlign: "left", fontSize: 24 }}>
                  {insight?.title}
                </h1>
                <p>
                  {formatDescription(insight?.description?.slice(0, 180))}
                  {formatDescription(
                    insight?.description?.length > 180 ? "..." : ""
                  )}
                </p>
                <p>
                  <strong>Created:</strong> {formatDate(insight?.dateCreated)}
                </p>

                <button
                  onClick={() => handleReadMore(insight)}
                  style={{
                    backgroundColor: "transparent",
                    color: "green",
                    padding: 0,
                    margin: 0,
                    marginBottom: 24,
                    marginTop: 16,
                  }}
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
