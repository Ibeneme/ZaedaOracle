import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import BlogHero from "./BlogHero/BlogHero";
import "./BlogPage.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchNewsInsights } from "../../Redux/Admin/newsInsightsSlice";
import { AppDispatch, RootState } from "../../Redux/store";
import { formatDate } from "./formatDate.utils";

const BlogPage: React.FC = () => {
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  const { insights, status, error } = useSelector(
    (state: RootState) => state.newsInsights
  );

  useEffect(() => {
    dispatch(fetchNewsInsights());
  }, [dispatch]);

  const handleClick = (id: string) => {
    navigate(`/blog-details/${id}`); // Navigate to the blog details page by ID
  };

  const truncateText = (text: string, maxLength: number = 200) => {
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  };

  return (
    <div style={{ backgroundColor: "#f4f4f4" }}>
      <BlogHero title="News and Insights" />

      <div style={{ marginTop: 120 }}>
        <br /> <br />
      </div>
      <div className="blog-page">
        <div className="blog-page-content">
          <div className="blog-list">
            {status === "loading" && <p>Loading...</p>}
            {status === "failed" && <p>Error: {error}</p>}
            {status === "succeeded" &&
              insights.map((post) => (
                <div
                  key={post._id}
                  className="blog-card"
                  onClick={() => handleClick(post._id)} // Pass the ID instead of the whole post
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="blog-image"
                  />
                  <div className="blog-card-content">
                    <h2>{post.title}</h2>
                    <p>{truncateText(post.content)}</p>
                    <p className="blog-date">
                      {post.dateCreated
                        ? formatDate(new Date(post.dateCreated))
                        : "Unknown date"}
                    </p>
                  </div>
                  <div className="blog-image-overlay">
                    <FaArrowRight className="arrow-icon" />
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
