import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';

const Lfooter = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <FooterContainer>
      <FooterContent>
        {/* Contact Info Section */}
        <ContactInfo>
          <h3>Contact Us</h3>
          <p>+91 8448320407</p>
          <p>Email: peaktrail.hotels@gmail.com</p>
        </ContactInfo>

        <Navigation>
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="about-us" smooth duration={500}>About Us</Link></li>
            <li><Link to="rooms" smooth duration={500}>Rooms</Link></li>
            <li><Link to="attractions" smooth duration={500}>Attractions</Link></li>
            <li><Link to="dining" smooth duration={500}>Dining</Link></li>
          </ul>
        </Navigation>

        {/* Icon Button Section */}
        <IconSection>
          <IconButton onClick={toggleModal}>
            I
          </IconButton>
        </IconSection>
      </FooterContent>

      {/* Modal for Terms and Conditions */}
      {modalOpen && (
        <Modal>
          <ModalContent>
            <h3>Terms and Conditions</h3>
            <p>
              Booking and Confirmation: Upon successful booking, you will receive a confirmation email with reservation details. Booking is only confirmed once payment is processed. Please present valid identification upon check-in.
              <br /><br />
              Cancellation and Refund Policy: Cancellations must be made 7 days before check-in for a full refund. Depending on the rate plan chosen at the time of booking, cancellations after this period may incur a fee or result in no refund.
              <br /><br />
              Check-In/Check-Out: Check-in time is 11 AM IST, and check-out is 10:30 AM IST. Early check-ins and late check-outs are subject to availability and may incur additional charges.
              <br /><br />
              Privacy Policy: Your personal information is handled according to our Privacy Policy, ensuring the protection of your data.
            </p>
            <button onClick={toggleModal}>Close</button>
          </ModalContent>
        </Modal>
      )}

      {/* Copyright Section */}
      <Copyright>
        &copy; {new Date().getFullYear()}  All Rights Reserved.
      </Copyright>
    </FooterContainer>
  );
};

// Styled Components for Footer
const FooterContainer = styled.footer`
  position: relative;
  padding: 40px 20px;
  background-color: #6E9099;
  color: #fff;
  font-family: 'Arial', sans-serif;
  text-align: center;
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ContactInfo = styled.div`
  h3 {
    font-size: 1.5em;
    margin-bottom: 15px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  p {
    font-size: 1em;
    line-height: 1.5;
    color: #ccc;
    margin: 5px 0;
  }
`;

const Navigation = styled.nav`
  h3 {
    font-size: 1.5em;
    margin-bottom: 15px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      margin: 5px 0;
      a {
        color: #ccc;
        text-decoration: none;
      }
    }
  }
`;

const IconSection = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
`;

const IconButton = styled.button`
  background-color: #ff6347;
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  cursor: pointer;
  font-size: 1.5em;
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  max-width: 500px;
  text-align: left;

  h3 {
    margin-top: 0;
  }

  button {
    margin-top: 20px;
    background-color: #ff6347;
    color: #fff;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    border-radius: 5px;
  }
`;

const Copyright = styled.div`
  margin-top: 20px;
  font-size: 0.9em;
  color: #ccc;
`;

export default Lfooter;
