import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const DiningContainer = styled(motion.section)`
  padding: 60px;
  background-color: #fff8f0;
  color: #6E9099;

  h2 {
    margin-bottom: 20px;
    font-size: 2.8em;
    color: #b55236;
  }

  .dining-content {
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 1000px) {
      flex-direction: row;
      justify-content: space-between;
    }
  }

  .menu {
    flex: 2;
    margin: 20px;
    line-height: 1.8;
    font-size: 1.1em;
  }

  .image {
    flex: 1;
    margin: 20px;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);

    img {
      width: 100%;
      height: auto;
      object-fit: cover;
      border-radius: 15px;
    }
  }
`;

const Dining = () => (
  <DiningContainer
    id="dining"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
  >
    <h2>Dining Experience</h2>
    <div className="dining-content">
      <div className="menu">
        <h3>Menu</h3>
        <p>The above rates include Breakfast and Dinner.</p>
        <h4>Breakfast</h4>
        <p>Cornflakes with milk, Parantha, Curd, Egg, bread, pickle, jam, Poha, and Tea.</p>
        <h4>Dinner</h4>
        <p>Paneer Dish, Chicken Dish, Seasonal Vegetables, Dal, Roti, Rice, Salad, and Sweet Dish.</p>
      </div>
      <div className="image">
        <img src="/assets/a2.jpg" alt="Dining Experience" />
      </div>
    </div>
  </DiningContainer>
);

export default Dining;
