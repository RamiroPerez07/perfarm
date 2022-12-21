import React, { useContext } from 'react';
import { FontContext } from '../../contexts/font-context';
import { StyledH1, StyledSection } from './Hero';

const Hero = () => {

  const {fontData} = useContext(FontContext)

  return (
    <>
      <StyledSection>
        <StyledH1 fontProps={fontData}>Perfarm</StyledH1>
      </StyledSection>
    </>
  )
}

export default Hero