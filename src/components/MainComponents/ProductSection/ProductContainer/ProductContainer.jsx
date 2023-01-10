import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';


const StyledSection = styled.section`
  width: 95%;
  min-height: min(1020px , calc(60px - 100vh));
  display: grid;
  align-items: start;
  justify-items: center;
  align-content: start;
  justify-content: center;
  grid-auto-rows: min-content;
  grid-template-columns: repeat(auto-fit,minmax(250px,1fr));
  padding: 10px;
  gap: 1em;
`;

const StyledMessage = styled.p`
  font-size: 1rem;
  font-weight: 500;
  color: ${({theme}) => theme.secondary};
  text-align: center;
`;

export const ProductContainer = ({children}) => {
  //llamo al estado del filtro
  const filterState = useSelector(state => state.productFilter)
  //de este estado, a mi solo me interesa lo que se muestra, por eso:
  const {shownProducts} = filterState;

  return (
    <StyledSection>
      {children}
      {!shownProducts.length && <StyledMessage>No existen resultados que coincidan con la búsqueda.</StyledMessage>}
    </StyledSection>
  )
}

