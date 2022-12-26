import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';


const StyledFrame = styled.div`
  width: 95%; 
  display: grid;
  gap: 2em;
  align-items: start;
  justify-items: center;
  grid-template-columns: repeat(auto-fit,minmax(280px,1fr));
  background-color: ${({theme}) => theme.frameColor };
  border-radius: 10px;
  padding: 25px 15px;
`;

const StyledFilterGroup = styled.div`
  width: 95%;
  max-width: 280px;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  align-items: start;
  justify-items: center;
  gap: 1em;
`;

const StyledSelect = styled.select`
  width: 95%;
  max-width: 250px;
  min-height: 45px;
  color: ${({theme}) => theme.secondary};
  background-color: ${({theme}) => theme.primary};
  border-radius: 8px;
  cursor: pointer;
  outline: none;
  padding: 10px 15px;
`;

const StyledLabel = styled.label`
  font-size: 1.1rem;
  color: ${({theme}) => theme.secondary};
  font-weight: 600;
`;

export const ProductFilterFrame = () => {

  const state = useSelector(state => state.cart);
  const {products} = state;

  const getProductBrands = () => {
    const brands = [...new Set(products.map(product => product.brand))]
    return brands;
  } 

  return (
    <StyledFrame>
      <StyledFilterGroup>
        <StyledLabel>Marcas</StyledLabel>
        <StyledSelect>
          <optgroup label="Marcas">
            <option value="" defaultValue='true' disabled hidden>Seleccioná una marca</option>
            {
              getProductBrands().map( brand => {
                return (
                  <option value={brand} key={brand}>{brand}</option>
                )
              })
            }
          </optgroup>
        </StyledSelect>
      </StyledFilterGroup>
      <StyledFilterGroup>
        <StyledLabel>Precio</StyledLabel>
        <StyledSelect>
          <optgroup label="Precio">
            <option value="" defaultValue='true' disabled hidden>Seleccioná rango de precio</option>
            <option value="1000">Menor a 2000</option>
            <option value="2000-5000">Entre 2000 y 5000</option>
            <option value="5000-10000">Entre 5000 y 10000</option>
            <option value="10000-20000">Entre 10000 y 20000</option>
            <option value="20000">Mayor a 20000</option>
          </optgroup>
        </StyledSelect>
      </StyledFilterGroup>
      <StyledFilterGroup>
        <StyledLabel>Envío</StyledLabel>
        <StyledSelect>
          <optgroup label="Envío">
            <option value="" defaultValue='true' disabled hidden>Selecciona opción</option>
            <option value="true">Gratuito</option>
            <option value="false">Con cargo</option>
          </optgroup>
        </StyledSelect>
      </StyledFilterGroup>
      <StyledFilterGroup>
        <StyledLabel>Stock</StyledLabel>
        <StyledSelect>
          <optgroup label="Stock">
            <option value="" defaultValue='true' disabled hidden>Selecciona opción</option>
            <option value="true">En stock</option>
            <option value="false">Sin stock</option>
          </optgroup>
        </StyledSelect>
      </StyledFilterGroup>
      <StyledFilterGroup>
        <StyledLabel>Ordenar por</StyledLabel>
        <StyledSelect>
          <optgroup label="Criterio">
            <option value="" defaultValue='true' disabled hidden>Selecciona opción</option>
            <option value="precio-desc">Precio mayor a menor</option>
            <option value="precio-asc">Precio menor a mayor</option>
            <option value="nombre-asc">Nombre ascendente</option>
            <option value="nombre-desc">Nombre descendente</option>
          </optgroup>
        </StyledSelect>
      </StyledFilterGroup>
    </StyledFrame>
  )
}