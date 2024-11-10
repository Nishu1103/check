// HeroVideo.jsx
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import casbaVideo from './accets/casba.mp4';

const VideoContainer = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 100vh; /* Full height for all screen sizes */
  overflow: hidden;

  video {
    width: 100vw; /* Full viewport width */
    height: 100vh; /* Full viewport height */
    object-fit: cover; /* Crop the video to fit */
  }

  h1 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    font-size: 3em;
    text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.7);
    text-align: center;
    padding: 0 10px; /* Add padding for mobile view */

    /* Responsive font sizing */
    @media (max-width: 768px) {
      font-size: 2em; /* Smaller font for tablets */
    }

    @media (max-width: 480px) {
      font-size: 1.5em; /* Smaller font for mobile */
    }
  }
`;

const HeroVideo = () => {
  const [showText, setShowText] = useState(true);

  useEffect(() => {
    // Set a timer to hide the text after 5 seconds
    const timer = setTimeout(() => {
      setShowText(false);
    }, 3000); // 5000 milliseconds = 5 seconds

    // Clean up the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <VideoContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      <video autoPlay loop muted src={casbaVideo} />
      {showText && <h1>Welcome to Camp Kasbah</h1>}
    </VideoContainer>
  );
};

export default HeroVideo;
