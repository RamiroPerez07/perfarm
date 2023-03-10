import React from 'react';
import styled from 'styled-components';

const StyledFilterGroup = styled.div`
  width: 95%;
  max-width: 250px;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  align-items: start;
  justify-items: center;
  gap: 7px;
`;

const StyledSelect = styled.select`
  width: 100%;
  max-width: 250px;
  min-height: 45px;
  color: ${({theme}) => theme.secondary};
  background-color: ${({theme}) => theme.primary};
  border-radius: 8px;
  cursor: pointer;
  outline: none;
  padding: 10px 15px;
  font-size: 0.8rem;
`;

const StyledLabel = styled.label`
  font-size: 0.9rem;
  color: ${({theme}) => theme.secondary};
  font-weight: 600;
  justify-self: start;
`;

export const ProductFilter = (props) => {
  const {label,defaultValue,name,onChange,text,options, currentOption} = props
  return (
    <StyledFilterGroup>
      <StyledLabel>{label}</StyledLabel>
      <StyledSelect value={currentOption} defaultValue={defaultValue} name={name} onChange={onChange}>
        <option value={defaultValue} disabled hidden>{text}</option>
        <option value={defaultValue}>{options[0]}</option>
        {
          options.slice(1).map( option => <option value={option} key={option}>{option}</option>)
        }
      </StyledSelect>
  </StyledFilterGroup>
  )
}
