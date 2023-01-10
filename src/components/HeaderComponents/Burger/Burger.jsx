// Burger.js
import React from 'react';
import styled from "styled-components";
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { toggleBurgerMenu } from '../../../redux/actions/menuManagerActions';

export const Burger = () => {

  const dispatch = useDispatch();

  //llamo al estado del menu
  const menuManagerState = useSelector(state => state.menuManager);
  const {showBurgerMenu} = menuManagerState;

  return (
    <StyledBurger showBurgerMenu={showBurgerMenu} onClick={()=>dispatch(toggleBurgerMenu())}>
      <div />
      <div />
      <div />
    </StyledBurger>
  )
}


const StyledBurger = styled.button`
  grid-template-columns: 1fr;
  align-content: stretch;
  align-items: center;
  justify-items: center;
  width: 30px;
  height: 2em;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  display: none;
  
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
    transform: ${({showBurgerMenu}) => showBurgerMenu ? 'rotateZ(45deg)' : 'rotateZ(0)' };
  }
  div:nth-child(2){
    opacity: ${({showBurgerMenu}) => showBurgerMenu ? '0' : '1' };
    transform: ${ ({showBurgerMenu}) => showBurgerMenu ? 'translateX(20px)' : 'translateX(0)' };
  }
  div:nth-child(3){
    transform: ${ ({showBurgerMenu}) => showBurgerMenu ? 'rotateZ(-45deg)' : 'rotateZ(0)' };
  }

  @media (max-width: ${({theme})=>theme.mobile}){
    display: grid;
  }
`;