import styled from "styled-components";

export const StyledSection = styled.section`
  min-height: min( 100vh , 1980px );
  width: 100%;
  display: grid;
  gap: 3rem;
  align-items: center;
  justify-items: center;
  align-content: center;
  justify-content: center;
  grid-auto-rows: min-content;
  padding-top: 60px;

`

export const StyledHeroImage = styled.div`
  width: 85%;
  max-width: 200px;
  height: 200px;
  background-image: url("./img/bg_abstract.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
`;

export const StyledH1 = styled.h1`
  font-size: ${({fontProps}) => fontProps.fsLarge2 };
  font-weight: ${({fontProps}) => fontProps.fwBold };
  text-align: center;
`

export const StyledButton = styled.button`
  padding: 20px 40px;
  background-color: ${({theme}) => theme.primaryDark};
  border: 1px solid ${({theme}) => theme.primaryLight};
  color: ${({theme}) => theme.primaryLight};
  cursor: pointer;
  font-size: ${({fontProps}) => fontProps.fsMedium1 };
  font-weight: ${({fontProps}) => fontProps.fwNormal };
  border-radius: 8px;
  transition: all 0.2s;

  &:hover{
    background-color: ${({theme}) => theme.primaryLight};
    border: 1px solid ${({theme}) => theme.primaryLight};
    color: ${({theme}) => theme.primaryDark};
    transition: all 0.2s;
  }

`;
