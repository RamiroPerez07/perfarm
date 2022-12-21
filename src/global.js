import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    width: 100%;
    max-width: 1980px;
    min-height: 100vh;
    display: grid;
    align-items: start;
    justify-items: center;
    grid-auto-rows: min-content;
    background-color: ${({theme})=>theme.primaryDark} ;
    color: ${({theme})=>theme.primaryLight} ;
  }

  #root{
    width: 100%;
  }

`