import React from 'react';
import { StyledBurgerContainer } from './BurgerContainer';

const BurgerContainer = ({children}) => {
  return (
    <StyledBurgerContainer>{children}</StyledBurgerContainer>
  )
}

export default BurgerContainer;