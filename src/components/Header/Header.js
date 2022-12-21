import styled from "styled-components";

export const StyledHeader = styled.header`
  width : 100%;
  min-height: 60px;
  background: ${({theme}) => theme.primaryLight };
  display: grid;
  align-items: center;
  justify-items: end;
  padding: 10px 20px;
`;
