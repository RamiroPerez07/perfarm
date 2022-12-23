import React from 'react';
import styled from 'styled-components';

const StyledSection = styled.section`
  width: 100%;
  max-width: 1920px;
  margin-top: 60px;
  min-height: min(1020px, calc(100vh - 60px));
  display: grid;
  place-content: center;
  place-items: center;
  gap: 3em;
`;

const StyledH1 = styled.h1`
  font-size: 3.3rem;
  font-weight: 800;
  text-align: center;
  color: ${({theme}) => theme.secondary }
`;

const StyledBtn = styled.button.attrs({type:"submit"})`
  padding: 15px 25px;
  background-color: ${({theme}) => theme.secondary };
  color: ${({theme}) => theme.primary };
  border-radius: 8px;
  font-size: 1.2rem;
  cursor: pointer;
  border: none;
  outline: none;
  font-weight: 600;
  transition: all 0.2s linear;

  &:hover{
    background-color: ${({theme}) => theme.terciary };
  }
`;

const StyledImg = styled.div`
  width: 90%;
  max-width: 150px;
  height: 150px;
  background-image: url('./img/bg_abstract.png');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
`;

export const Hero = () => {
  return (
    <StyledSection>
      <StyledImg />
      <StyledH1>Perfarm</StyledH1>
      <StyledBtn>Productos</StyledBtn>
    </StyledSection>
  )
};

