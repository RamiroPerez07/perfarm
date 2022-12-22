import { createGlobalStyle } from "styled-components";
import {theme} from '../themes/theme.js';

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 24px;
    font-family: 'Montserrat', sans-serif;
  }

  body{
    width: 100%;
    min-height: 100vh;
    display: grid;
    align-items: start;
    justify-items: center;
    grid-auto-rows: min-content;
    background-color: ${({theme})=>theme.primaryDark} ;
    color: ${({theme})=>theme.primaryLight} ;
  }

  main{
    display: grid;
    grid-auto-rows: min-content;
    max-width: 1980px;
  }

  #root{
    width: 100%;
  }

  @media (max-width: ${theme.desktopM}){
    *{
      font-size: 20px;
    }
  }

  @media (max-width: ${theme.desktopS}){
    *{
      font-size: 18px;
    }
  }

  @media (max-width: ${theme.laptopL}){
    *{
      font-size: 17px;
    }
  }

  @media (max-width: ${theme.laptopM}){
    *{
      font-size: 16px;
    }
  }

  @media (max-width: ${theme.tablet}){
    *{
      font-size: 14px;
    }
  }

`