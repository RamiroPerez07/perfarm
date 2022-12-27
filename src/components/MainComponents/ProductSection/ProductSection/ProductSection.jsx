import React from 'react';
import styled from 'styled-components';

const StyledSection = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  justify-items: center;
  align-items: start;
`;

export const ProductSection = ({children}) => {
  return (
    <StyledSection>{children}</StyledSection>
  )
}

