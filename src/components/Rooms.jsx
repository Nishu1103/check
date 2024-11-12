// Rooms.jsx
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import roomsData from  "./roomsData.json";
import "./room.css";

const RoomsContainer = styled(motion.section)`
  background-color: #fafafa;
  color: #6E9099;
  padding: 40px 20px;
  text-align: center;

  h2 {
    font-size: 2em;
    margin-bottom: 20px;
    text-align: center;
  }
`;

const Rooms = () => (
  <RoomsContainer
    id="rooms"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
  >
    <h2 style={{ color: '#b55236', fontSize: '2em !important' }}>Our Rooms</h2>
    <div className="rooms-list">
      {roomsData.map((room, index) => (
        <motion.div
          className="room"a
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >

          <div className="check">
          <div className="images">
            
            {room.images.map((image, idx) => (
              <div className="image-box" key={idx}>
                <img src={image} alt={`${room.type} Room ${idx + 1}`} />
              </div>
            ))}
          </div>
          <div className="room-info">
          <div className="room-details">
                <h3>{room.type}</h3>
                <a href="#booking" className="book-now">Book Now</a>
              </div>
              <div className="pricing">
                <p className="price">Map: {room.Map} /-</p>
                <p className="price">CP: {room.cp} /-</p>
              </div>
          </div>

          </div>
        </motion.div>
      ))}
    </div>
  </RoomsContainer>
);

export default Rooms;
