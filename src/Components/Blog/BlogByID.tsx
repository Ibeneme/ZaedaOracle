import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";
import Loader from "../Loader/Loader";
import "./BlogDetailPage.css";
import { formatDate } from "./formatDate.utils";
import { AppDispatch, RootState } from "../../Redux/store";
import { fetchNewsInsightById } from "../../Redux/Admin/newsInsightsSlice";

const BlogDetailPageById: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Get the ID from the URL params
  const dispatch: AppDispatch = useDispatch();
  const { insight, status, error } = useSelector(
    (state: RootState) => state.newsInsights
  ); // Adjust selector based on your state structure

  const [email, setEmail] = useState(""); // State for storing the email
  const [message, setMessage] = useState(""); // State for displaying success/error message

  useEffect(() => {
    if (id) {
      dispatch(fetchNewsInsightById(id)); // Fetch the blog post by ID
    }
  }, [dispatch, id]);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");
    dispatch(fetchNewsInsightById(id as any))
      .then((response) => {
        if (response.payload?.message === "Email already subscribed") {
          setMessage("Email already subscribed!");
        } else if (
          response.payload?.message === "Email subscribed successfully"
        ) {
          setMessage("Email Subscribed successfully!");
        }
        setEmail(""); // Clear the input field after successful subscription
      })
      .catch(() => {
        setMessage("An error occurred while subscribing.");
      });
  };

  const handleShare = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  if (status === "loading") {
    return <Loader />;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  if (!insight) {
    return <div>Post not found</div>;
  }

  return (
    <div className="blog-detail-page">
      <div className="subscribe-box">
        <h2 className="subscribe-title">Subscribe to Our Email List</h2>
        <form className="subscribe-form" onSubmit={handleSubscribe}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setMessage("");
            }}
            required
          />
          <button type="submit">Subscribe</button>
        </form>
        {message && <p>{message}</p>}
      </div>
      <div className="blog-content">
        <img src={insight.image} alt={insight.title} className="detail-image" />
        <h1>{insight.title}</h1>
        <p className="blog-date">
          {insight.dateCreated
            ? formatDate(new Date(insight.dateCreated))
            : "Unknown date"}
        </p>
        <div dangerouslySetInnerHTML={{ __html: insight.content ?? "" }} />
      </div>
      <div className="share-box">
        <h2 className="share-title">Share this post</h2>
        <div className="social-icons">
          <div
            onClick={() =>
              handleShare(
                `https://twitter.com/intent/tweet?url=${encodeURIComponent(
                  "https://main--zaedaoracle.netlify.app/blog-details/" + id
                )}`
              )
            }
            className="social-icon"
          >
            <FaTwitter color="#000" />
          </div>
          <div
            onClick={() =>
              handleShare(
                `https://www.instagram.com/share?url=${encodeURIComponent(
                  "https://main--zaedaoracle.netlify.app/blog-details/" + id
                )}`
              )
            }
            className="social-icon"
          >
            <FaInstagram color="#000" />
          </div>
          <div
            onClick={() =>
              handleShare(
                `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                  "https://main--zaedaoracle.netlify.app/blog-details/" + id
                )}`
              )
            }
            className="social-icon"
          >
            <FaFacebook color="#000" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailPageById;
