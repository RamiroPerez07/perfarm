import styled from "styled-components";

export const StyledSearchContainer = styled.div`
  width: 90%;
  max-width: 700px;
  display:grid;
  grid-auto-flow: column;
  gap: 0.5rem;
  align-items: center;
  justify-content: stretch;
  grid-auto-columns: 1fr auto;
`;

export const StyledInput = styled.input.attrs({ type: 'text', placeholder: "Buscar Producto" })`
  width: 100%;
  padding: 15px 20px;
  font-size: ${({fontProps}) => fontProps.fsMedium0 };
  font-weight: ${({fontProps}) => fontProps.fwNormal};
  border-radius: 8px;
  position: relative;
  overflow: visible;
  color: ${({theme}) => theme.primaryDark};

  &:focus{
    outline: none;
  }

  &::after{
    content:"";
    height: 4px;
    width: 4px;
    position: absolute;
    left: 12px;
    top: 12px;
    background-color: red;
  }

`;

export const SearchBtn = styled.button`
  width: fit-content;
  padding: 15px 10px;
  font-size: ${({fontProps}) => fontProps.fsMedium0 };
  font-weight: ${({fontProps}) => fontProps.fwNormal};
  cursor: pointer;
  background-color: ${({theme}) => theme.primaryDark};
  color: ${({theme}) => theme.primaryLight};
  border: 1px solid ${({theme}) => theme.primaryLight};
  transition: all 0.3s;
  border-radius: 8px;

  &:hover{
    background-color: ${({theme}) => theme.primaryLight};
    color: ${({theme}) => theme.primaryDark};
    border: 1px solid ${({theme}) => theme.primaryDark};
    transition: all 0.3s;
  }
`;