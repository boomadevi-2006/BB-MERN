import React, { useState, useEffect } from "react";
import "./Home.css";
import Footer from "../components/Footer";
import GenreCarousel from '../components/GenreCarousel';
import Famous from "./genrePages/Famous"; // ✅ Import the Famous.jsx component
import firstVideo from "../assets/fv.mp4";
import secondVideo from "../assets/fv2.mp4";
import slide4 from "../assets/slide4.png";
import slide5 from "../assets/slide5.png";
import slide6 from "../assets/slide6.png";

const images = [slide4, slide5, slide6];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Slideshow logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-layout">
      {/* Left Column: Video */}
      <div className="video-container">
        <video src={secondVideo} autoPlay loop muted playsInline />
        <video src={firstVideo} autoPlay loop muted playsInline className="video-item" />
      </div>

      {/* Right Column: Slideshow */}
      <div className="slideshow-container">
        <img
          src={images[currentIndex]}
          alt={`slide-${currentIndex}`}
          className="slideshow-image"
        />
      </div>

      {/* Genre Carousel Section */}
      <div className="genre-section">
        <h2 style={{ textAlign: 'center' }}>Explore Genres</h2>
        <GenreCarousel />
      </div>

      {/* Famous Books Section from Famous.jsx */}
      <div className="genre-section">
        <Famous />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
