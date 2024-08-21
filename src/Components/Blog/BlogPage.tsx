import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import "./BlogPage.css";
import { BlogPost, blogPosts } from "./BlogPost";
import BlogHero from "./BlogHero/BlogHero";

const BlogPage: React.FC = () => {
  const navigate = useNavigate();
  const handleClick = (id: number) => {
    navigate(`/blog/${id}`);
  };

  return (
    <div style={{ backgroundColor: "#f4f4f4" }}>
      <BlogHero title="News and Insights" />

      <div style={{ marginTop: 120 }}>
        <br /> <br />
      </div>
      <div></div>
      <div className="blog-page">
        <div className="blog-page-content">
          <div className="blog-list">
            {blogPosts.map((post: BlogPost) => (
              <div
                key={post.id}
                className="blog-card"
                onClick={() => handleClick(post.id)}
              >
                <img src={post.image} alt={post.title} className="blog-image" />
                <div className="blog-card-content">
                  <h2>{post.title}</h2>
                  <p>{post.excerpt}</p>
                  <p className="blog-date">{post.date}</p> {/* Display date */}
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
