// Burger.js
import React from 'react';
import { bool, func } from 'prop-types';
import styled from "styled-components";

export const Burger = ({openBurgerMenu, setOpenBurgerMenu}) => {
  return (
    <StyledBurger openBurgerMenu={openBurgerMenu} onClick={()=>setOpenBurgerMenu(!openBurgerMenu)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  )
}

Burger.propTypes = {
  openBurgerMenu: bool.isRequired,
  setOpenBurgerMenu: func.isRequired,
};

const StyledBurger = styled.button`
  display: grid;
  grid-template-columns: 1fr;
  align-content: stretch;
  align-items: center;
  width: 1.5em;
  height: 2em;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  
  &:focus {
    outline: none;
  }
  
  div {
    width: 2em;
    height: 0.3em;
    background: ${({ theme }) => theme.secondary};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
  }
  div:first-child{
    transform: ${({openBurgerMenu}) => openBurgerMenu ? 'rotateZ(45deg)' : 'rotateZ(0)' };
  }
  div:nth-child(2){
    opacity: ${({openBurgerMenu}) => openBurgerMenu ? '0' : '1' };
    transform: ${ ({openBurgerMenu}) => openBurgerMenu ? 'translateX(20px)' : 'translateX(0)' };
  }
  div:nth-child(3){
    transform: ${ ({openBurgerMenu}) => openBurgerMenu ? 'rotateZ(-45deg)' : 'rotateZ(0)' };
  }
`;