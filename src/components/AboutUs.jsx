// AboutUs.jsx
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import dummyImage from './accets/cpic4.jpg'; 

const AboutUsContainer = styled(motion.section)`
  background-color: #f8f8f8;
  color: #6E9099;
  padding: 60px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h2 {
    font-size: 2em;
    margin-bottom: 20px;
    text-align: center;
  }

  .content {
    display: flex;
    align-items: center;
    max-width: 1000px;
    margin: 0 auto;
    flex-wrap: wrap;
  }

  .text {
    flex: 1;
    padding: 20px;
    max-width: 500px;

    p {
      line-height: 1.6;
      margin-bottom: 20px;
    }
  }

  .image {
    flex: 1;
    padding: 20px;
    max-width: 500px;
    text-align: center;

    img {
      width: 100%;
      max-width: 400px;
      height: auto;
      border-radius: 10px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
  }

  /* Responsive adjustments */
  @media (max-width: 768px) {
    .content {
      flex-direction: column;
    }
    .image, .text {
      max-width: 100%;
      padding: 10px;
    }
  }
`;

const AboutUs = () => (
  <AboutUsContainer
    id="about-us"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
  >
    <h2>About Us</h2>
    <div className="content">
      <div className="text">
        <p>
        Welcome to Camp Kasbah, your ultimate escape into nature's beauty.
         Nestled beside a serene river with breathtaking scenic views, our property offers a 
         unique blend of camping, glamping, and outdoor adventure. Enjoy the peace and tranquillity of riverside 
         camping combined with the comforts of our luxurious glamping accommodations.
        </p>
        <p>
        At Camp Kasbah , reconnect with nature as you breathe in the fresh mountain air, 
        dip your toes in the cool, natural water streams, and let the sounds of the river soothe you. 
        Thrill-seekers can experience the excitement of river crossing or explore the pristine surroundings. 
        Our team is here to make sure your stay is as comfortable and memorable as possible, with amenities designed for relaxation and adventure.

        </p>
      </div>
      <div className="image">
        <img src={dummyImage} alt="About Us" />
      </div>
      
    </div>
  </AboutUsContainer>
);

export default AboutUs;
