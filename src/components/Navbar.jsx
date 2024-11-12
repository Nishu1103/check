// Navbar.jsx
import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #6E9099;
  color: #fff;
  position: fixed;
  height: 100px;
  width: 100%;
  z-index: 1000;

 img {
  height: 200px;
  width: auto;  
  max-width: 100%;  
  object-fit: contain;  
  margin-right: 20px;

  @media (max-width: 768px) {
    height: 180px;
    width: auto;
  }
}


  ul {
    display: flex;
    gap: 50px;
    list-style: none;
    margin: 0;
    align-items: center;

    li {
      cursor: pointer;
      color: black;
      font-size: 1.2em;
      &:hover {
        color: #ff6347;
      }
    }

    @media (max-width: 768px) {
      display: ${({ isMenuOpen }) => (isMenuOpen ? 'flex' : 'none')};
      flex-direction: column;
      gap: 15px;
      position: absolute;
      top: 80px;
      right: 0px;
      background-color: #6E9099;
      width: 200px;
      padding: 20px;
      border-radius: 5px;
    }
  }

  .bookbtn {
    display: block;
  display: inline-block;
    padding: 12px 25px;
    background-color: #a98f3c; /* Gold-like color */
    color: #fff;
    text-decoration: none;
    border-radius: 8px;
    font-weight: bold;
    transition: background-color 0.3s;
   
  }



  .menu-icon {
    display: none;
    cursor: pointer;
    font-size: 2em;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prevState) => !prevState);

  return (
    <NavbarContainer isMenuOpen={isMenuOpen}>
      <img src="/assets/logo.png" alt="Hotel Logo" />
      <ul>
        <li>
          <Link to="about-us" smooth duration={500}>
            About Us
          </Link>
        </li>
        <li>
          <Link to="rooms" smooth duration={500}>
            Rooms
          </Link>
        </li>
        <li>
          <Link to="attractions" smooth duration={500}>
            Attractions
          </Link>
        </li>
        <li>
          <Link to="dining" smooth duration={500}>
            Dining
          </Link>
        </li>
      <div className="bookbtn">
        <a type="button">Book Now</a>
      </div>
      </ul>
      <div className="menu-icon" onClick={toggleMenu}>
        {isMenuOpen ? '✖' : '☰'}
      </div>
    </NavbarContainer>
  );
};

export default Navbar;
