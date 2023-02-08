import React from 'react';
import styled from 'styled-components';
import { CheckoutForm } from './CheckoutForm';

const StyledSection = styled.section`
  width: 100%;
  max-width: 1920px;
  margin-top: 80px;
  margin-bottom: 50px;
  min-height: min(1020px, calc(100vh - 60px));
  display: grid;
  justify-items: center;
  align-items: start;
  gap: 10px;
  grid-auto-rows: min-content;
`;

const StyledSubtitle = styled.h2`
  font-size: 1.6rem;
  font-weight: 700;
  color: ${({theme})=> theme.secondary};
  justify-self: center;
  padding: 10px;
  text-align: center;
`;


export const CheckoutFrame = () => {
  return (
    <>
      <StyledSection>
        <StyledSubtitle>Tu pedido</StyledSubtitle>
        <CheckoutForm />
      </StyledSection>
    </>
  )
}

