import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

  *{
    padding: 0px;
    margin: 0px;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }
  
  body{
    width: 100%;
    display: grid;
    align-items: start;
    justify-items: center;
    grid-auto-rows: min-content;
    background-color: ${({theme}) => theme.primary};
    color: ${({theme}) => theme.secondary}; 
    transition: all 0.2s linear;
  }

  #root{
    width: 100%;
    display: grid;
    align-items: start;
    justify-items: center;
    grid-auto-rows: min-content;
    position: relative;
    z-index: 0;
  } 

  .App{
    width: 100%;
    display: grid;
    align-items: start;
    justify-items: center;
    grid-auto-rows: min-content;
  }

  a{
    text-decoration: none;
  }

  main{
    width: 100%;
    max-width: 1980px;
    display: grid;
    align-items: start;
    justify-items: center;
    grid-auto-rows: min-content;
    position: relative;
    z-index: 0;
  }

  .btn-style1{
    background-color: ${({theme}) => theme.buttonColor};
    color: #ffffff; 
    border: 0;
    cursor: pointer;
    transition: all 0.2s linear;

    &:hover{
      background-color: ${({theme}) => theme.buttonHover};
    }
  }

  .btn-style2{
    background-color: ${({theme}) => theme.primary};
    color: ${({theme}) => theme.secondary};
    border: 1px solid ${({theme}) => theme.secondary};
    cursor: pointer;
    transition: all 0.2s linear;

    &:hover{
      background-color: ${({theme}) => theme.secondary};
      color: ${({theme}) => theme.primary};
      border: 1px solid ${({theme}) => theme.secondary};
    }
  }

`;