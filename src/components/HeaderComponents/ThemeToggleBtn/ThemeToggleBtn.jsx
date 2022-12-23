import React from 'react';
import {MdDarkMode} from 'react-icons/md';
import {CiLight} from 'react-icons/ci';
import styled from 'styled-components';

const StyledBtn = styled.button.attrs({type:"submit"})`
  padding: 10px;
  border: 0.2px solid ${({theme}) => theme.secondary};
  border-radius: 8px;
  cursor: pointer;
  display: grid;
  place-items: center;
  background-color: ${({theme}) => theme.primary};
  color: ${({theme}) => theme.secondary};
`;

export const ThemeToggleBtn = ({theme,toggleTheme}) => {
  return (
    <StyledBtn onClick={toggleTheme} themeMode={theme}>
      {theme === "light" ? <MdDarkMode /> : <CiLight /> }    
    </StyledBtn>
  )
}