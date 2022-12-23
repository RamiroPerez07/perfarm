import styled from "styled-components";

const StyledHeader = styled.header`
  width: 100%;
  min-height: 60px;
  display: grid;
  align-items: center;
  justify-items: center;
  background-color: ${({theme}) => theme.primary};
  box-shadow: 0px 1px 5px -4px ${(theme) => theme.secondary};
  position: fixed;
  top: 0px;
  z-index: 1;
`;

const StyledHeaderContent = styled.div`
  width: 100%;
  max-width: min(1920px , 100vw);
  padding: 10px 20px;
  display: grid;
  align-items: center;
  justify-items: end;
  grid-auto-flow: column;
  gap: 3em;
  grid-auto-columns: min-content;
  justify-content: end;
`;

export const Header = ({children}) => {
  return (
    <StyledHeader>
      <StyledHeaderContent>
        {children}
      </StyledHeaderContent>
    </StyledHeader>
  )
}