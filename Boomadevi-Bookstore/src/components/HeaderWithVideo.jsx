
import React from 'react';
import './HeaderWithVideo.css'; 
import bgVideo from '../assets/bg.mp4';
const HeaderWithVideo = () => {
  return (
    <div className="header-container">
      <video className="background-video" autoPlay loop muted>
         <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <h1 className="heading" class="text-3xl font-extrabold glow-text tracking-wide">&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;  Welcome to BOOMADEVI BOOKSTORE</h1>
    </div>
  );
};

export default HeaderWithVideo;
