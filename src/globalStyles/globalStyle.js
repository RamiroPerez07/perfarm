import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

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

  a{
    text-decoration: none;
  }

  main{
    width: 100%;
    max-width: 1400px;
    min-height: 100vh;
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
    border: 1px solid ${({theme}) => theme.buttonColor};
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