import React from "react";
import { useParams } from "react-router-dom";
import "./BlogDetailPage.css";
import { blogPosts } from "./BlogPost";
import { FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";

const BlogDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find((p) => p.id.toString() === id);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="blog-detail-page">
      <div className="subscribe-box">
        <h2 className="subscribe-title">Subscribe to Our Email List</h2>
        <form className="subscribe-form">
          <input type="email" placeholder="Enter your email" />
          <button type="submit">Subscribe</button>
        </form>
      </div>

      <div className="blog-content">
        <img src={post.image} alt={post.title} className="detail-image" />
        <h1>{post.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.content ?? "" }} />
      </div>

      <div className="share-box">
        <h2 className="share-title">Share this post</h2>
        <div className="social-icons">
          <a
            href={`https://twitter.com/intent/tweet?url=${window.location.href}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
          <a
            href={`https://www.instagram.com/share?url=${window.location.href}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailPage;
