import styled from "styled-components";
import React, {useContext} from "react";
import { Navbar } from "../Navbar/Navbar";
import { ThemeToggleBtn } from "../ThemeToggleBtn/ThemeToggleBtn";
import { CartIcon } from "../Cart/CartIcon/CartIcon";
import { Cart } from "../Cart/CartFrame/Cart";
import { Burger } from "../Burger/Burger";
import { Link } from "react-router-dom";
import {IoArrowBackOutline} from 'react-icons/io5';
import { ReturnArrowContext } from "../../../contexts/productArrowBack";

const StyledHeader = styled.header`
  width: 100%;
  min-height: 60px;
  display: grid;
  align-items: center;
  justify-items: center;
  background-color: ${({theme}) => theme.primary};
  box-shadow: 0px 1px 5px -4px ${({theme}) => theme.secondary};
  position: fixed;
  top: 0px;
  z-index: 1;
`;

const StyledHeaderContent = styled.div`
  width: 100%;
  max-width: 1920px;
  padding: 10px 20px;
  display: grid;
  align-items: center;
  justify-items: end;
  align-content: center;
  grid-auto-flow: column;
  gap: 10px;
  grid-auto-columns: min-content;
  justify-content: space-between;
`;

const StyledHeaderContainer = styled.div`
  padding: 0px 10px;
  display: grid;
  align-items: center;
  justify-items: center;
  align-content: center;
  gap: 3em;
  grid-auto-flow: column;
  grid-auto-columns: min-content;
`;

const StyledLink = styled(Link)`
  justify-self: start;
  display: grid;
  place-items:center;
`;

const StyledArrow = styled(IoArrowBackOutline)`
  font-size: 2rem;
  font-weight: 800;
  color: ${({theme}) => theme.secondary};
`;

export const Header = (props) => {
  const {
    theme,
    toggleTheme,
  } = props

  //me traigo la data del contexto de flecha de retorno
  const arrowData = useContext(ReturnArrowContext);
  const {showReturnArrow,setShowReturnArrow} = arrowData;


  return (
    <StyledHeader>
      <StyledHeaderContent>
        <StyledHeaderContainer>
          {showReturnArrow && <StyledLink to={"/productos"} onClick={()=>{setShowReturnArrow(false)}}><StyledArrow /></StyledLink>}
        </StyledHeaderContainer>
        <StyledHeaderContainer>
          <Navbar />
          <ThemeToggleBtn theme={theme} toggleTheme={toggleTheme} />
          <CartIcon />
          <Cart />
          <Burger />
        </StyledHeaderContainer>
      </StyledHeaderContent>
    </StyledHeader>
  )
}