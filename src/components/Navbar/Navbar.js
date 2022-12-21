import styled from "styled-components";

export const StyledNavbar = styled.nav`
  width: 100%;
  max-width: 400px;
  display: grid;
  grid-auto-flow: column;
  gap: 20px;
  align-items: center;
  justify-items: center;

  @media (max-width: ${({theme}) => theme.mobile }){
    display: none;
  }


`;