// src/pages/About.jsx
import React from "react";
import "./About.css";
import bgVideo from "../assets/about-bg.mp4"; // 👈 Add your background video here

const About = () => {
  return (
    <div className="about-page">
      <video className="about-bg-video" autoPlay loop muted playsInline>
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="about-overlay">
        <div className="about-content">
          <h1>About Boomadevi Bookstore</h1>
          <p>
            Welcome to <strong>Boomadevi Bookstore</strong> — your trusted destination for discovering timeless classics,
            trending bestsellers, and hidden literary gems. Whether you're a passionate reader, a curious learner, or looking for the perfect gift,
            we offer an inspiring collection of books across all genres.
          </p>
          <p>
            Our platform is more than a bookstore. It's a curated experience for every reader, every age, and every interest.
          </p>

          <h2>Why Choose Us?</h2>
          <ul>
            <li>📚 Explore books in 20+ genres from Fiction to Spirituality</li>
            <li>🚀 Fast delivery & secure checkout</li>
            <li>🛒 Easy admin management for books and featured picks</li>
            <li>🌟 Discover Famous Books, Curated Picks, and Trending Titles</li>
          </ul>

          <h2>Contact Us</h2>
          <div className="contact-info">
            <p><strong>Email:</strong> support@boomadevi-bookstore.com</p>
            <p><strong>Phone:</strong> +91 98765 43210</p>
            <p><strong>Address:</strong> No. 123, Readers Lane, Book Town, Tamil Nadu - 638056</p>
            <p><strong>Working Hours:</strong> Monday - Saturday: 9 AM – 7 PM</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
