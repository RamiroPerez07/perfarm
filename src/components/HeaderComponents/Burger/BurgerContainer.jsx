import React from 'react';
import styled from "styled-components";

export const BurgerContainer = ({children}) => {
  return (
    <>
      <StyledBurgerContainer>
        {children}
      </StyledBurgerContainer>
    </>
  )
}


export const StyledBurgerContainer = styled.div`
  display: none;
  @media (max-width: ${({theme}) => theme.mobile}){
    display: grid;
    place-items: center;
  }
`;