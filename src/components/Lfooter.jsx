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
          <p>Get more information</p>
        </IconSection>
      </FooterContent>

      {/* Modal for Terms and Conditions */}
      {modalOpen && (
        <Modal>
          <ModalContent>
            <h3>Terms and Conditions</h3>
            <p>Terms And Condition

Booking and Confirmation
Upon successful booking, you will receive a confirmation email with reservation details. Booking is only confirmed once payment is processed. Please present valid identification upon check-in.

Cancellation and Refund Policy
Cancellations must be made 7 days before check-in for a full refund. Depending on the rate plan chosen at the time of booking, cancellations after this period may incur a fee or result in no refund.

Check-In/Check-Out
Check-in time is 11 AM IST, and check-out is 10:30 AM IST. Early check-ins and late check-outs are subject to availability and may incur additional charges.

Privacy Policy
Your personal information is handled according to our Privacy Policy, ensuring the protection of your data.
.</p>
            <button onClick={toggleModal}>Close</button>
          </ModalContent>
        </Modal>
      )}
    </FooterContainer>
  );
};

// Styled Components for Footer
const FooterContainer = styled.footer`
  padding: 40px 20px;
  background-color: #6E9099;
  color: #fff;
  font-family: 'Arial', sans-serif;
  text-align: center;

  h3 {
    font-size: 1.5em;
    margin-bottom: 15px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  p, li, a {
    font-size: 1em;
    line-height: 1.5;
    color: #ccc;
    margin: 5px 0;
  }

  a {
    text-decoration: none;
    color: #ffa07a;
    transition: color 0.3s ease;

    &:hover {
      color: #ff6347;
    }
  }
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
    text-align: left;
  }
`;

const ContactInfo = styled.div`
  max-width: 300px;
  align-items: center;
`;

const Navigation = styled.nav`
  max-width: 300px;

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin-bottom: 8px;
  }
`;

const IconSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 300px;

  p {
    margin-top: 10px;
    color: #ccc;
    font-size: 1em;
  }
`;

const IconButton = styled.button`
  background-color: #ff6347;
  color: #fff;
  font-size: 1.5em;
  font-weight: bold;
  width: 50px;
  height: 50px;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ffa07a;
  }
`;

// Modal Styles
const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: #fff;
  padding: 20px;
  max-width: 400px;
  width: 100%;
  color: #333;
  text-align: center;

  h3 {
    margin-bottom: 20px;
  }

  button {
    background-color: #ff6347;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1em;
    margin-top: 20px;

    &:hover {
      background-color: #ffa07a;
    }
  }
`;

export default Lfooter;
