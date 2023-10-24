import React from 'react';
import './homestandard.css';
import bgVideo from './bg.mp4';

const VideoBackground = () => {
  return (
    <div className="video-background">
      <video autoPlay loop muted>
        <source  src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content">
        <button className="get-started-button">Get Started</button>
      </div>
    </div>
  );
};

export default VideoBackground;
