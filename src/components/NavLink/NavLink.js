import styled from "styled-components";

export const StyledNavLink = styled.a`
  text-decoration: none;
  color: ${({theme}) => theme.primaryDark };
  cursor: pointer;
  font-size: ${({fontProps}) => fontProps.fsMedium0};
  font-weight: ${({fontProps}) => fontProps.fwNormal};


  &:hover{
    color: ${({theme}) => theme.primaryHover };
  }


`;

  /*font-size: ${({fontProps}) => fontProps.fsMedium0};*/