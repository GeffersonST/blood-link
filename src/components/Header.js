import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

//const fadeOut = keyframes`
  //from {
   // opacity: 1;
 // }
  //to {
  //  opacity: 0;
 // }
//`;

const HeaderContainer = styled.header`
  background-color: #171717;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  animation: ${fadeIn} 0.3s;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Logo = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: #fff;
  margin: 0;
  animation: ${fadeIn} 0.5s;

  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
`;

const Nav = styled.nav`
  @media (max-width: 768px) {
    margin-top: 20px;
    display: ${props => (props.isMenuOpen ? 'block' : 'none')};
  }
`;

const NavLink = styled(Link)`
  margin-left: 20px;
  text-decoration: none;
  color: #fff;
  font-size: 16px;
  position: relative;

  &:hover {
    color: #ffd700;

    &::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 100%;
      height: 3px;
      background-color: #ffd700;
      animation: ${fadeIn} 0.3s;
    }
  }

  @media (max-width: 768px) {
    display: block;
    margin: 10px 0;
  }
`;
const MenuButton = styled.button`
display: none;
border: none;
background-color: transparent;
cursor: pointer;
padding: 0;
font-size: 24px;
color: #fff;
animation: ${fadeIn} 0.5s;

@media (max-width: 768px) {
  display: block;
}
`;

const Header = () => {
const [isMenuOpen, setIsMenuOpen] = useState(false);

const toggleMenu = () => {
  setIsMenuOpen(!isMenuOpen);
};

return (
  <HeaderContainer>
    <Logo>BloodLink</Logo>
    <Nav isMenuOpen={isMenuOpen}>
      <NavLink to="/" onClick={() => setIsMenuOpen(false)}>
        Home
      </NavLink>
      <NavLink to="/information" onClick={() => setIsMenuOpen(false)}>
        Informações
      </NavLink>
      <NavLink to="/bloodtypes" onClick={() => setIsMenuOpen(false)}>
        Tipos Sanguíneos
      </NavLink>
      <NavLink to="/locations" onClick={() => setIsMenuOpen(false)}>
        Locais de Coleta
      </NavLink>
    </Nav>
    <MenuButton onClick={toggleMenu}>
      {isMenuOpen ? 'X' : '\u2630'}
    </MenuButton>
  </HeaderContainer>
);
};

export default Header;
