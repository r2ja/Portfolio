import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '../assets/raja.svg';

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #ffffff;
`;

const Logo = styled.img`
  height: 40px;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
`;

const NavLink = styled(Link)`
  font-size: 1rem;
  font-weight: 500;
  color: #666666;
  transition: color 0.3s ease;

  &:hover, &.active {
    color: #000000;
  }

  &.active {
    font-weight: 600;
  }
`;

const NavNumber = styled.span`
  font-size: 0.75rem;
  color: #999999;
  margin-right: 0.5rem;
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <Logo src={logo} alt="Logo" />
      <NavLinks>
        <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>
          <NavNumber>01</NavNumber>Home
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>
          <NavNumber>02</NavNumber>About me
        </NavLink>
        <NavLink to="/portfolio" className={({ isActive }) => isActive ? 'active' : ''}>
          <NavNumber>03</NavNumber>Works
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>
          <NavNumber>04</NavNumber>Contact
        </NavLink>
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;