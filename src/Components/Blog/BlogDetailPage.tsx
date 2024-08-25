import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";
import "./BlogDetailPage.css";
import { formatDate } from "./formatDate.utils";
import Loader from "../Loader/Loader";
import { BASE_URL } from "../../Redux/baseUrl";

const BlogDetailPage: React.FC = () => {
  const location = useLocation();
  const post = location.state?.post; // Retrieve post data from navigation state
  const [email, setEmail] = useState(""); // State for storing the email
  const [message, setMessage] = useState(""); // State for displaying success/error message
  const [loading, setLoading] = useState(false); // State to manage loader visibility

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    axios
      .post(`${BASE_URL}/api/newsletter/subscribe`, { email })
      .then((response) => {
        if (response?.data?.message === "Email already subscribed") {
          console.log(response, "response");
          setMessage("Email already subscribed!");
          setEmail("");
        } else if (
          response?.data?.message === "Email subscribed successfully"
        ) {
          console.log(response, "response");
          setMessage("Email Subscribed successfully!");
          setEmail(""); // Clear the input field after successful subscription
        }
      })
      .catch((error) => {
        if (error.response && error.response.status === 201) {
          setMessage("Email already subscribed.");
        } else {
          setMessage("An error occurred while subscribing.");
        }
      })
      .finally(() => {
        setLoading(false); // Hide loader
      });
  };

  const handleShare = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="blog-detail-page">
      {/* Show loader when loading is true */}
      <div className="subscribe-box">
        {loading ? (
          <Loader />
        ) : (
          <>
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
          </>
        )}
      </div>
      <div className="blog-content">
        <img src={post.image} alt={post.title} className="detail-image" />
        <h1>{post.title}</h1>
        <p className="blog-date">
          {post.dateCreated
            ? formatDate(new Date(post.dateCreated))
            : "Unknown date"}
        </p>
        <div dangerouslySetInnerHTML={{ __html: post.content ?? "" }} />
      </div>
      <div className="share-box">
        <h2 className="share-title">Share this post</h2>
        <div className="social-icons">
          <div
            onClick={() =>
              handleShare(
                `https://twitter.com/intent/tweet?url=${encodeURIComponent(
                  "https://main--zaedaoracle.netlify.app" +
                    window.location.pathname
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
                  "https://main--zaedaoracle.netlify.app" +
                    window.location.pathname
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
                  "https://main--zaedaoracle.netlify.app" +
                    window.location.pathname
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

export default BlogDetailPage;
