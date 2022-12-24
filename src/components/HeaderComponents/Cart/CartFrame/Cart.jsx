import React from 'react';
import styled from 'styled-components';

const StyledCart = styled.div`
  width: 100%;
  max-width: 400px;
  height: 100%;
  right: 0px;
  top: 60px;
  position: fixed;
  z-index: 1;
  background-color: ${({theme}) => theme.primary};
  box-shadow: 0px 0px 5px -2px ${({theme}) => theme.secondary};
  padding: 3em 1.5em;
  display: grid;
  align-content: start;
  align-items: start;
  justify-items: center;
  gap: 1em;
`;

const StyledH2 = styled.h2`
  text-align: left;
  font-weight: 700;
  font-size: 1.4rem;
  justify-self:start;
`;

const StyledProductContainer = styled.div`
  width: 95%;
  min-height: 300px;
  background-color: ${({theme}) => theme.frameColor };
  display: grid;
  align-items: start;
  justify-items: center;
  padding: 1em;
  gap: 1em;
  grid-auto-rows: min-content;
  border-radius: 5px;
`;

export const Cart = () => {
  return (
    <StyledCart>
      <StyledH2>Tus productos</StyledH2>
      <StyledProductContainer>
      
      </StyledProductContainer>
    </StyledCart>
  )
}

