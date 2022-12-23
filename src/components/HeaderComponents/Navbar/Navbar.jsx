import React from 'react';
import styled from 'styled-components';

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
    box-shadow: 0px 1px 5px -4px ${(theme) => theme.secondary};
    transform: ${({ openBurgerMenu }) => openBurgerMenu ? 'translateX(0)' : 'translateX(-100%)'};
    background-color: ${(theme) => theme.secondary};
    z-index: 2;
  }
`;

const StyledLink = styled.a`
  color: ${({theme}) => theme.secondary };
  font-weight: 500;
  font-size: 1.1rem;

  &:hover{
    color: ${({theme}) => theme.terciary };
  }
`;

export const Navbar = ({openBurgerMenu}) => {


  return (
    <>
      <StyledNavbar openBurgerMenu={openBurgerMenu}>
        <StyledLink href="#">Home</StyledLink>
        <StyledLink href="#">Products</StyledLink>
        <StyledLink href="#">Contact</StyledLink>
      </StyledNavbar>
    </>
  )
}
