// import React from 'react';
// import styled from 'styled-components';
// import { motion } from 'framer-motion';

// const DiningContainer = styled(motion.section)`
//   padding: 60px;
//   background-color: #fff8f0;
//   color: #6E9099;

//   h2 {
//     margin-bottom: 20px;
//     font-size: 2.8em;
//     color: #b55236;
//   }

//   .dining-content {
//     display: flex;
//     flex-direction: column;
//     align-items: center;

//     @media (min-width: 1000px) {
//       flex-direction: row;
//       justify-content: space-between;
//     }
//   }

//   .menu {
//     flex: 2;
//     margin: 20px;
//     line-height: 1.8;
//     font-size: 1.1em;
//   }

//   .image {
//     flex: 1;
//     margin: 20px;
//     border-radius: 15px;
//     overflow: hidden;
//     box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);

//     img {
//       width: 100%;
//       height: auto;
//       object-fit: cover;
//       border-radius: 15px;
//     }
//   }
// `;

// const Dining = () => (
//   <DiningContainer
//     id="dining"
//     initial={{ opacity: 0, y: 50 }}
//     whileInView={{ opacity: 1, y: 0 }}
//     viewport={{ once: true }}
//     transition={{ duration: 0.8 }}
//   >
//     <h2>Dining Experience</h2>
//     <div className="dining-content">
//       <div className="menu">
//         <h3>Menu</h3>
//         <p>The above rates include Breakfast and Dinner.</p>
//         <h4>Breakfast</h4>
//         <p>Cornflakes with milk, Parantha, Curd, Egg, bread, pickle, jam, Poha, and Tea.</p>
//         <h4>Dinner</h4>
//         <p>Paneer Dish, Chicken Dish, Seasonal Vegetables, Dal, Roti, Rice, Salad, and Sweet Dish.</p>
//       </div>
//       <div className="image">
//         <img src="/assets/a2.jpg" alt="Dining Experience" />
//       </div>
//     </div>
//   </DiningContainer>
// );

// export default Dining;
import React from 'react';
import styled from 'styled-components';

const DiningContainer = styled.section`
  padding: 60px;
  background-color: #fff8f0;
  color: #6E9099;

  h2 {
    margin-bottom: 20px;
    font-size: 2.8em;
    color: #b55236;
    text-align: center;
  }

  .dining-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 40px;
  }

  .food-types {
    font-size: 1.2em;
    color: #6E9099;
     

    h3 {
      color: #b55236;
      font-size: 2em;
      text-align: center;
    }

    ul {
      list-style-type: none;
      padding: 0;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 2px;
    }

    li {
      margin: 10px 0;
    }
  }

  .carousel-container {
    margin: 20px;
    perspective: 1200px; /* Adds 3D perspective */
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    overflow-x: auto; /* Enables horizontal scrolling */
    padding-bottom: 20px;
  }

  .carousel {
    display: flex;
    flex-direction: row;
    gap: 15px; /* Space between images */
  }

  .image-wrapper {
    width: 300px;
    height: 300px;
    transition: transform 1s ease;
    transform: rotateY(0deg);
    cursor: pointer;
  }

  .image-wrapper:hover {
    transform: rotateY(20deg);
  }

  .image-wrapper img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 15px;
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
  }

  /* Responsive design */
  @media (max-width: 1000px) {
    .carousel {
      flex-direction: row; /* Keep images horizontally aligned on tablet */
    }

    .image-wrapper {
      width: 250px;
      height: 250px;
    }

    h2 {
      font-size: 2.4em;
    }
  }

  @media (max-width: 600px) {
    .carousel {
      flex-direction: row; /* Keep images horizontally aligned on mobile */
    }

    .carousel-container {
      overflow-x: auto; /* Enable horizontal scrolling on mobile */
      -webkit-overflow-scrolling: touch; /* For smoother scrolling on iOS devices */
    }

    .image-wrapper {
      width: 200px;
      height: 200px;
    }

    h2 {
      font-size: 2em;
    }

    .food-types h3 {
      font-size: 1.5em;
    }

    .food-types ul {
      flex-direction: column;
      align-items: center;
    }
  }
`;

const Dining = () => {
  return (
    <DiningContainer id="dining">
      <h2>Dining Experience</h2>
      <div className="dining-content">
        <div className="food-types">
          <h3>Our Food Options</h3>
          <ul>
            <li>North Indian Cuisine</li>
            <li>South Indian Delights</li>
             
          </ul>
        </div>
        <div className="carousel-container">
          <div className="carousel">
            <div className="image-wrapper">
              <img src="/assets/d1.jpg" alt="Dining Option 1" />
            </div>
            <div className="image-wrapper">
              <img src="/assets/d22.jpg" alt="Dining Option 2" />
            </div>
            <div className="image-wrapper">
              <img src="/assets/d3.jpg" alt="Dining Option 3" />
            </div>
            <div className="image-wrapper">
              <img src="/assets/d4.jpg" alt="Dining Option 4" />
            </div>
          </div>
        </div>
      </div>
    </DiningContainer>
  );
};

export default Dining;
