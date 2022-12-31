import styled from "styled-components";
import React, {useState} from "react";
import { Navbar } from "../Navbar/Navbar";
import { ThemeToggleBtn } from "../ThemeToggleBtn/ThemeToggleBtn";
import { CartIcon } from "../Cart/CartIcon/CartIcon";
import { Cart } from "../Cart/CartFrame/Cart";
import { BurgerContainer } from "../Burger/BurgerContainer";
import { Burger } from "../Burger/Burger";

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
  max-width: min(1920px , 100vw);
  padding: 10px 20px;
  display: grid;
  align-items: center;
  justify-items: end;
  grid-auto-flow: column;
  gap: 3em;
  grid-auto-columns: min-content;
  justify-content: end;
`;

export const Header = (props) => {
  const {
    theme,
    toggleTheme,
  } = props

  //estado del carrito, uso variables de estado
  const [openCart, setOpenCart] = useState(false); 
  const [openBurgerMenu, setOpenBurgerMenu] = useState(false);

  return (
    <StyledHeader>
      <StyledHeaderContent>
        <Navbar openBurgerMenu={openBurgerMenu} />
        <ThemeToggleBtn theme={theme} toggleTheme={toggleTheme} />
        <CartIcon openCart={openCart} setOpenCart={setOpenCart} />
        <Cart openCart={openCart} setOpenCart={setOpenCart} />
        <BurgerContainer>
          <Burger openBurgerMenu={openBurgerMenu} setOpenBurgerMenu={setOpenBurgerMenu} />
        </BurgerContainer>
      </StyledHeaderContent>
    </StyledHeader>
  )
}