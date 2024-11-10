import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// Styled container for a more dynamic, immersive look
const AttractionsContainer = styled(motion.section)`
  padding: 60px;
  background-color: #f5f5f5;
  color: #6E9099;

  h2 {
    margin-bottom: 50px;
    font-size: 2.8em;
    color: #222;
    text-align: center;
  }

  .attractions-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 20px;
  }

  .attraction {
    position: relative;
    overflow: hidden;
    border-radius: 20px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
    cursor: pointer;
    transform: perspective(1px) translateZ(0);
    transition: transform 0.4s ease, box-shadow 0.4s ease;

    &:hover {
      transform: translateY(-8px);
      box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.4s ease;
    }

    &:hover img {
      transform: scale(1.1);
    }

    .overlay {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
      color: #fff;
      padding: 15px;
      text-align: center;
      opacity: 0;
      transition: opacity 0.4s ease;
    }

    &:hover .overlay {
      opacity: 1;
    }

    .overlay p {
      margin: 0;
      font-size: 1.2em;
      font-weight: bold;
    }
  }
`;

// Main component with image data and display logic
const Attractions = () => {
  const attractions = [
    { src: '/assets/cpic1.jpg', caption: 'Breathtaking Landscapes' },
    { src: '/assets/cpic2.png', caption: 'Cultural Wonders' },
    { src: '/assets/cpic3.png', caption: 'Hidden Gems' },
    { src: '/assets/cpic4.jpg', caption: 'Local Adventures' }
  ];

  return (
    <AttractionsContainer
      id="attractions"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2>Attractions</h2>
      <div className="attractions-grid">
        {attractions.map((attraction, index) => (
          <motion.div
            className="attraction"
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <img src={attraction.src} alt={`Attraction ${index + 1}`} />
            <div className="overlay">
              <p>{attraction.caption}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </AttractionsContainer>
  );
};

export default Attractions;
