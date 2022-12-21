import styled from "styled-components";

export const StyledSection = styled.section`
  min-height: min( 100vh , 1980px );
  width: 100%;
  display: grid;
  gap: 2rem;
  align-items: center;
  justify-items: center;
  align-content: center;
  justify-content: center;
  grid-auto-rows: min-content;
`

export const StyledH1 = styled.h1`
  font-size: ${({fontProps}) => fontProps.fsLarge1 };
  font-weight: ${({fontProps}) => fontProps.fwBold };
  text-align: center;
`
