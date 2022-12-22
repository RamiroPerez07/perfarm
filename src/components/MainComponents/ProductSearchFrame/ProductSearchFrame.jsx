import React, { useContext } from 'react';
import { FontContext } from '../../../contexts/font-context';
import {StyledInput, SearchBtn, StyledSearchContainer} from './ProductSearchFrame.js';



export const ProductSearchFrame = () => {
  const {fontData} = useContext(FontContext);

  return (
    <>
      <StyledSearchContainer>
        <StyledInput fontProps={fontData} />
        <SearchBtn fontProps={fontData}>Buscar</SearchBtn>
      </StyledSearchContainer>
    </>
  )
}

