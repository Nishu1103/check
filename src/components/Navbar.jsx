// Navbar.jsx
import React from 'react';
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
    height: 70px;
    margin-right: 20px;
    width: 70px;
  }

  ul {
    display: flex;
    gap: 20px;
    list-style: none;

    li {
      cursor: pointer;
      color: black;
      font-size: 1.2em;
      &:hover {
        color: #ff6347;
      }
    }
  }
`;

const Navbar = () => (
  <NavbarContainer>
    <img   src="/assets/logo.png" alt="Hotel Logo" />
    <ul>
      <li><Link to="about-us" smooth duration={500}>About Us</Link></li>
      <li><Link to="rooms" smooth duration={500}>Rooms</Link></li>
      <li><Link to="attractions" smooth duration={500}>Attractions</Link></li>
      <li><Link to="dining" smooth duration={500}>Dining</Link></li>
    </ul>
  </NavbarContainer>
);

export default Navbar;
