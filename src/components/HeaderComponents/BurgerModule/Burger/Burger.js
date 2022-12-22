import styled from "styled-components";

export const StyledBurger = styled.button`
  display: grid;
  grid-template-columns: 1fr;
  align-content: stretch;
  align-items: center;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  
  &:focus {
    outline: none;
  }
  
  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ theme }) => theme.primaryDark};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
  }

  div:first-child{
    transform: ${({openMenu}) => openMenu ? 'rotateZ(45deg)' : 'rotateZ(0)' };
  }

  div:nth-child(2){
    opacity: ${({openMenu}) => openMenu ? '0' : '1' };
    transform: ${ ({openMenu}) => openMenu ? 'translateX(20px)' : 'translateX(0)' };
  }

  div:nth-child(3){
    transform: ${ ({openMenu}) => openMenu ? 'rotateZ(-45deg)' : 'rotateZ(0)' };
  }

`;