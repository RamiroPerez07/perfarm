import React, { useState } from 'react';
import styled from 'styled-components';
import {RxMagnifyingGlass} from 'react-icons/rx';
import {VscFilter} from 'react-icons/vsc';
import { useDispatch } from 'react-redux';
import { toggleFilterProductMenu } from '../../../../redux/actions/menuManagerActions';
import { useSelector } from 'react-redux';
import { filterProducts } from '../../../../redux/actions/productFilterActions';

const StyledFrame = styled.form`
  background-color: ${({theme})=> theme.frameColor};
  border-radius: 8px;
  display: grid;
  align-items: start;
  justify-items: center;
  place-content: center;
  gap: 5px;
  grid-auto-flow: column;
  grid-auto-columns: min-content;
  padding: 15px 20px;
  max-width: 90%;
`;

const StyledInput = styled.input`
  width: 50vw;
  max-width: 500px;
  padding: 10px 15px;
  font-size: 1.1rem;
  border-radius: 8px;
  border: none;
  background-color: ${({theme})=> theme.inputColor};
  color: ${({theme})=> theme.secondary};

  &:focus{
    outline: none;
  }
`;

const StyledBtn = styled.button`
  padding: 10px;
  border-radius: 8px;
  font-size: 1.1rem;
`;


export const ProductSearch = () => {

  //llamo al estado del filtro
  const filterState = useSelector(state => state.productFilter)

  const dispatch = useDispatch();

  const [searchInput, setSearchInput] = useState("");


  const handleFilter = (e) => {
    e.preventDefault();
    console.log(e);
    //genero un objeto de filtrado
    const filterParameters = {...filterState.filterValues} //me genero una copia del estado (CONCEPTO DE INMUTABILIDAD DEL ESTADO).
    const shownProducts = [...filterState.products];
    filterParameters["name"] = searchInput  //en esta funcion actualizo los parametros de busqueda.
    dispatch(filterProducts(filterParameters, shownProducts)); //le paso a la funcion los parametros de filtrado.
  }

  return (
    <StyledFrame onSubmit={handleFilter}>
      <StyledInput placeholder='Ingresa tu búsqueda' onChange={(e)=>setSearchInput(e.target.value)} />
      <StyledBtn className='btn-style1' type="submit">
        <RxMagnifyingGlass />
      </StyledBtn>
      <StyledBtn className='btn-style2' type="button" onClick={()=>dispatch(toggleFilterProductMenu())}>
        <VscFilter />
      </StyledBtn>
    </StyledFrame>
  )
}
