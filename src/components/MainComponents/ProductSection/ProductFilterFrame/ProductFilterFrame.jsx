import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { sortOptions, priceOptions, stockOptions, shippingOptions } from '../../../../data/filterOptions';
import {filterProducts} from '../../../../redux/actions/productFilterActions.js';
import {RiFilterOffFill} from 'react-icons/ri';
import { resetFilterProducts } from '../../../../redux/actions/productFilterActions.js';
import { ProductFilter } from './ProductFilter.jsx';

const StyledFrame = styled.div`
  width: 90%; 
  display: grid;
  align-items: start;
  justify-items: center;
  align-content: start;
  justify-content: center;
  grid-auto-rows: min-content;
  gap: 5px;
  grid-template-columns: 1fr;
  border-radius: 10px;
  padding: 25px 15px;
  background-color: ${({theme}) => theme.frameColor };
`;

const StyledClearFilterBtn = styled(RiFilterOffFill)`
  justify-self: end;
  cursor: pointer;
  font-size: 1.4rem;

  &:hover{
    color: #ff0000;
  }
`;

const StyledOptionFrame = styled.div`
  width: 90%; 
  display: grid;
  align-items: start;
  justify-items: center;
  align-content: start;
  justify-content: center;
  grid-auto-rows: min-content;
  gap: 15px;
  grid-template-columns: repeat(auto-fit,minmax(250px,1fr));
  padding: 10px;
`;


export const ProductFilterFrame = () => {

  //llamo al estado del carro
  const cartState = useSelector(state => state.cart);
  const {products} = cartState;

  //llamo al estado del filtro
  const filterState = useSelector(state => state.productFilter)
  const dispatch = useDispatch();

  //obtengo todos los nombres de marcas sin duplicar (Esto para crear un filtro)
  const getProductBrands = () => {
    const brands = [...new Set(products.map(product => product.brand))]
    return brands;
  } 

  const handleFilter = (e) => {
    //genero un objeto de filtrado
    const filterParameters = {...filterState.filterValues} //me genero una copia del estado (CONCEPTO DE INMUTABILIDAD DEL ESTADO).
    const shownProducts = [...filterState.products];
    filterParameters[e.target.name] = e.target.value  //en esta funcion actualizo los parametros de busqueda (en el objeto copiado)
    dispatch(filterProducts(filterParameters, shownProducts)); //le paso a la funcion los parametros de filtrado.
  }


  const optionList = [
    {
      label: "Marcas",
      defaultValue: "All",
      name: "brand",
      onChange: handleFilter,
      text: "Seleccioná una marca",
      options: ["Todas",...getProductBrands()],
      currentOption: filterState.filterValues.brand,
    },
    {
      label: "Precio",
      defaultValue: "All",
      name: "price",
      onChange: handleFilter,
      text: "Seleccioná rango de precio",
      options: priceOptions,
      currentOption: filterState.filterValues.price,
    },
    {
      label: "Envío",
      defaultValue: "All",
      name: "shipping",
      onChange: handleFilter,
      text: "Seleccioná una opción",
      options: shippingOptions,
      currentOption: filterState.filterValues.shipping,
    },
    {
      label: "Stock",
      defaultValue: "All",
      name: "stock",
      onChange: handleFilter,
      text: "Seleccioná una opción",
      options: stockOptions,
      currentOption: filterState.filterValues.stock,
    },
    {
      label: "Ordenar por",
      defaultValue: "All",
      name: "sort",
      onChange: handleFilter,
      text: "Seleccioná un criterio",
      options: sortOptions,
      currentOption: filterState.filterValues.sort,
    },
  ]


  return (
    <StyledFrame>
      <StyledClearFilterBtn onClick={()=>dispatch(resetFilterProducts())} />
      <StyledOptionFrame>
        {
          optionList.map(options => {
            return (<ProductFilter key={options.name} {...options} />)
          })
        }
      </StyledOptionFrame>
    </StyledFrame>
  )
}