import React, { useContext } from 'react';
import { FontContext } from '../../../contexts/font-context';
import { StyledH1, StyledSection, StyledButton, StyledHeroImage } from './Hero';

export const Hero = () => {

  const {fontData} = useContext(FontContext)

  return (
    <>
      <StyledSection>
        <StyledHeroImage />
        <StyledH1 fontProps={fontData}>Perfarm</StyledH1>
        <StyledButton fontProps={fontData}>Productos</StyledButton>
      </StyledSection>
    </>
  )
}

