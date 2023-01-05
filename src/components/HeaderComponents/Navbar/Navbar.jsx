import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const StyledNavbar = styled.nav`
  display: grid;
  grid-auto-flow: column;
  gap: 2em;



  @media (max-width: ${({theme}) => theme.mobile}){
    width: 100vw;
    height: 40vh;
    position: absolute;
    top: 60px;
    left: 0px;
    grid-auto-flow: row;
    place-content: center;
    transition: transform 0.3s ease-in-out;
    box-shadow: 0px 1px 5px -4px ${({theme}) => theme.secondary};
    transform: ${({ openBurgerMenu }) => openBurgerMenu ? 'translateX(0)' : 'translateX(-100%)'};
    background-color:  ${({theme}) => theme.primary};
    z-index: 2;
  }
`;

const StyledLink = styled(NavLink)`
  color: ${({theme}) => theme.secondary };
  font-weight: 500;
  font-size: 1.1rem;
  text-align: center;

  &.active{
    color: ${({theme}) => theme.terciary };
  }

  &:hover{
    color: ${({theme}) => theme.terciary };
  }

`;

export const Navbar = ({openBurgerMenu}) => {


  return (
    <>
      <StyledNavbar openBurgerMenu={openBurgerMenu}>
        <StyledLink className={({ isActive }) => (isActive ? "active" : "")} to={'/'}>Home</StyledLink>
        <StyledLink className={({ isActive }) => (isActive ? "active" : "")} to={'/productos'}>Products</StyledLink>
        <StyledLink className={({ isActive }) => (isActive ? "active" : "")} to={'/contacto'}>Contact</StyledLink>
      </StyledNavbar>
    </>
  )
}
