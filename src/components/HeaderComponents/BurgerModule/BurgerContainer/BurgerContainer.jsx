import React from 'react';
import { StyledBurgerContainer } from './BurgerContainer';

export const BurgerContainer = ({children}) => {
  return (
    <StyledBurgerContainer>{children}</StyledBurgerContainer>
  )
}

