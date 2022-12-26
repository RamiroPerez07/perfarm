import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { sortOptions, priceOptions, stockOptions, shippingOptions } from '../../../../data/filterOptions';
import {filterProducts, resetFilterProducts} from '../../../../redux/actions/productFilterActions.js';


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

  //llamo al estado del carro
  const cartState = useSelector(state => state.cart);
  const {products} = cartState;

  //llamo al estado del filtro
  const filterState = useSelector(state => state.productFilter)
  const dispatch = useDispatch();

  const getProductBrands = () => {
    const brands = [...new Set(products.map(product => product.brand))]
    return brands;
  } 

  const handleFilter = (e) => {
    //en el objeto de filtro del estado, busco la propiedad de filtro y la asigno al valor del select
    filterState.filterValues[e.target.name] = e.target.value
    dispatch(filterProducts());
    dispatch(resetFilterProducts());
  }

  return (
    <StyledFrame>
      <StyledFilterGroup>
        <StyledLabel>Marcas</StyledLabel>
        <StyledSelect name="brand" onChange={handleFilter}>
          <optgroup label="Marcas">
            <option value="" defaultValue={true} disabled hidden>Seleccioná una marca</option>
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
        <StyledSelect name="price" onChange={handleFilter}>
          <optgroup label="Precio">
            <option value="" defaultValue='true' disabled hidden>Seleccioná rango de precio</option>
            {
              priceOptions.map(priceOption =>{
                return (
                  <option value={priceOption} key={priceOption}>{priceOption}</option>
                );
              })
            }
          </optgroup>
        </StyledSelect>
      </StyledFilterGroup>
      <StyledFilterGroup>
        <StyledLabel>Envío</StyledLabel>
        <StyledSelect name="shipping" onChange={handleFilter}>
          <optgroup label="Envío">
            <option value="" defaultValue='true' disabled hidden>Selecciona opción</option>
            {
              shippingOptions.map(shippingOption => {
                return(
                  <option value={shippingOption} key={shippingOption}>{shippingOption}</option>
                )
              })
            }
          </optgroup>
        </StyledSelect>
      </StyledFilterGroup>
      <StyledFilterGroup>
        <StyledLabel>Stock</StyledLabel>
        <StyledSelect name="stock" onChange={handleFilter}>
          <optgroup label="Stock">
            <option value="" defaultValue='true' disabled hidden>Selecciona opción</option>
            {
              stockOptions.map(stockOption => {
                return(
                  <option value={stockOption} key={stockOption}>{stockOption}</option>
                )
              })
            }
          </optgroup>
        </StyledSelect>
      </StyledFilterGroup>
      <StyledFilterGroup>
        <StyledLabel>Ordenar por</StyledLabel>
        <StyledSelect name="sort" onChange={handleFilter}>
          <optgroup label="Criterio">
            <option value="" defaultValue='true' disabled hidden>Selecciona opción</option>
            {
              sortOptions.map(sortOption =>{
                return (
                  <option value={sortOption} key={sortOption}>{sortOption}</option>
                )
              })
            }
          </optgroup>
        </StyledSelect>
      </StyledFilterGroup>
    </StyledFrame>
  )
}