import styled from "styled-components";

export const StyledBurgerContainer = styled.div`
  display: none;
  @media (max-width: ${({theme}) => theme.mobile}){
    width: 2rem;
    height: 2rem;
    display: grid;
    place-items: center;
  }
`;