import styled from "styled-components";

export const StyledHeader = styled.header`
  width : 100%;
  background: ${({theme}) => theme.primaryLight };
  display: grid;
  align-items: center;
  justify-items: center;
  position: fixed;
  top: 0px;
`;

export const StyledHeaderContent = styled.div`
  width: 100%;
  max-width: min(1980px , 100vw);
  min-height: 60px;
  display: grid;
  align-items: center;
  justify-items: end;
  padding: 10px 20px;
`
