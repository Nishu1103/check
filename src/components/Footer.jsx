// Footer.jsx
import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  padding: 40px 20px;
  background-color: #f5f5f5;
  color: #fff;
  font-family: 'Arial', sans-serif;

  h2 {
    font-size: 2em;
    margin-bottom: 10px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    color: #222;
  }

  p {
    font-size: 1.1em;
    line-height: 1.5;
    margin-bottom: 10px;
    color: #ccc;
  }

  .map-link {
    color: #ff6347;
    text-decoration: none;
    font-size: 1.2em;
    font-weight: 500;
    transition: color 0.3s ease-in-out;
    position: relative;
    margin-bottom: 10px;

    &:hover {
      color: #ffa07a;
    }

    &:hover::after {
      width: 100%;
      opacity: 1;
    }

    &::after {
      content: '';
      display: block;
      width: 0;
      height: 2px;
      background: #ffa07a;
      position: absolute;
      bottom: -4px;
      left: 0;
      transition: width 0.3s ease, opacity 0.3s ease;
      opacity: 0;
    }
  }

  .footer-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px; /* Adds space between items */

    @media (min-width: 768px) {
      flex-direction: row;
      justify-content: space-around;
      gap: 40px; /* Adjusts space on desktop */
    }
  }

  .text-container {
    max-width: 500px;
    text-align: center;
    margin-right: 0; /* Adjust or remove margin */

    @media (min-width: 768px) {
      text-align: left;
      margin-right: 20px; /* Adds a small gap on desktop */
    }
  }

  .map-container {
    border: 2px solid #444;
    overflow: hidden;
    border-radius: 8px;
    width: 100%;
    max-width: 500px;

    iframe {
      width: 100%;
      height: 300px;
      border: none;
    }
  }
`;


const Footer = () => (
  <FooterContainer>
    <div className="footer-content">
      <div className="text-container">
        <h2>LOCATION & DIRECTIONS</h2>
        <p>V. P. O. Kasol Tehsil District KULLU Himachal Pradesh 175105</p>
        <a
          href="https://www.google.com/maps/place/Camp+Kasbah+Bir/@32.0464894,76.7107864,17z/data=!4m9!3m8!1s0x3904b92fa6f8e709:0x64f162f73a067763!5m2!4m1!1i2!8m2!3d32.0464894!4d76.7133613!16s%2Fg%2F11ff4_mv54?entry=ttu&g_ep=EgoyMDI0MTAyMy4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          className="map-link"
        >
          View on Google Maps
        </a>
      </div>
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3421.7862215558974!2d76.7107864!3d32.0464894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3904b92fa6f8e709%3A0x64f162f73a067763!2sCamp%20Kasbah%20Bir!5e0!3m2!1sen!2sin!4v1698747390132!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  </FooterContainer>
);

export default Footer;
