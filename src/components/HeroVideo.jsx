// // HeroVideo.jsx
// import React, { useState, useEffect } from 'react';
// import styled from 'styled-components';
// import { motion } from 'framer-motion';
// import casbaVideo from './accets/casba.mp4';

// const VideoContainer = styled(motion.div)`
//   position: relative;
//   width: 100%;
//   height: 100vh; /* Full height for all screen sizes */
//   overflow: hidden;

//   video {
//     width: 100vw; /* Full viewport width */
//     height: 100vh; /* Full viewport height */
//     object-fit: cover; /* Crop the video to fit */
//   }

//   h1 {
//     position: absolute;
//     top: 50%;
//     left: 50%;
//     transform: translate(-50%, -50%);
//     color: #fff;
//     font-size: 3em;
//     text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.7);
//     text-align: center;
//     padding: 0 10px; /* Add padding for mobile view */

//     /* Responsive font sizing */
//     @media (max-width: 768px) {
//       font-size: 2em; /* Smaller font for tablets */
//     }

//     @media (max-width: 480px) {
//       font-size: 1.5em; /* Smaller font for mobile */
//     }
//   }
// `;

// const HeroVideo = () => {
//   const [showText, setShowText] = useState(true);

//   useEffect(() => {
//     // Set a timer to hide the text after 5 seconds
//     const timer = setTimeout(() => {
//       setShowText(false);
//     }, 3000); // 5000 milliseconds = 5 seconds

//     // Clean up the timer when the component unmounts
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <VideoContainer
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 1.2 }}
//     >
//       <video autoPlay loop muted src={casbaVideo} />
//       {showText && <h1>Welcome to Camp Kasbah</h1>}
//     </VideoContainer>
//   );
// };

// export default HeroVideo;
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import casbaVideo from './accets/casba.mp4';

// Import CSS for react-slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const VideoContainer = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;

  video {
    width: 100vw;
    height: 100vh;
    object-fit: cover;
  }

  .carousel {
    width: 100vw;
    height: 100vh;

    img {
       width: 100vw;
    height: 100vh;
      object-fit: cover;
    }
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
    padding: 0 10px;

    @media (max-width: 768px) {
      font-size: 2em;
    }

    @media (max-width: 480px) {
      font-size: 1.5em;
    }
  }
`;

const HeroVideo = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Initial check
    handleResize();

    // Add event listener for resizing
    window.addEventListener('resize', handleResize);

    // Clean up event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Settings for the carousel
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
  };

  return (
    <VideoContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      {isMobile ? (
        <Slider className="carousel" {...carouselSettings}>
          <img src="/assets/bb.avif" alt="Scenic view 1" />
          <img src="/assets/cc.avif" alt="Scenic view 2" />
          <img src="/assets/nn.avif" alt="Scenic view 3" />
          <img src="/assets/cc.jpg" alt="Scenic view 4" />
          
        </Slider>
      ) : (
        <video autoPlay loop muted src={casbaVideo} />
      )}
      <h1>Welcome to Camp Kasbah</h1>
    </VideoContainer>
  );
};

export default HeroVideo;
