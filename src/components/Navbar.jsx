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
  width: 100%;
  z-index: 1000;

  img {
    height: 80px;
    width: 80px;
    margin-right: 20px;

    @media (max-width: 768px) {
      height: 50px;
      width: 50px;
    }
  }

  ul {
    display: flex;
    gap: 20px;
    list-style: none;
    margin: 0;

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
      </ul>
      <div className="menu-icon" onClick={toggleMenu}>
        {isMenuOpen ? '✖' : '☰'}
      </div>
    </NavbarContainer>
  );
};

export default Navbar;
