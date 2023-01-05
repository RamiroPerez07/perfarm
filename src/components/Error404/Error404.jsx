import React from 'react';
import styled from 'styled-components';

const StyledMessage = styled.p`
  font-size: 1.5rem;
  font-weight: 500;
  text-align: center;
  color: ${({theme}) => theme.secondary};
`;

const StyledErrorSection = styled.div`
  width: 100%;
  padding: 20px;
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  place-items: center;
  place-content: center;
  gap: 2em;
`;

const StyledImg404 = styled.div`
  width: 90%;
  max-width: 400px;
  height: 200px;
  background-image: url('./img/utils/404.png');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
`;

export const Error404 = () => {
  return (
    <main>
      <StyledErrorSection>
        <StyledMessage>¡Ups! Parece que no se pudo encontrar la página que buscás...</StyledMessage>
        <StyledImg404 />
      </StyledErrorSection>
    </main>
  )
}

