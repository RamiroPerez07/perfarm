import React, {useContext} from 'react';
import { useEffect } from 'react';
import { Header } from '../../components/HeaderComponents/Header/Header';
import { ProductDetail } from '../../components/MainComponents/ProductSection/ProductDetail/ProductDetail.jsx';
import { Modal } from '../../components/Modals/Modal';
import { DarkModeContext } from '../../contexts/darkModeContext';
import { ReturnArrowContext } from '../../contexts/productArrowBack';

export const ProductDescription = () => {

  //me traigo toda la data del contexto dark mode, con esto accedo a las variables de estado
  const data = useContext(DarkModeContext);
  //desestructuro
  const {theme, toggleTheme} = data;

  //me traigo la data del contexto de flecha de retorno
  const arrowData = useContext(ReturnArrowContext);
  const {setShowReturnArrow} = arrowData;

  useEffect(()=>{
    //cada vez que se monta el componente, ejecuto la funcion que setea la visibilidad del componente
    setShowReturnArrow(true);
    return (() => setShowReturnArrow(false)); //se retorna una funcion que desactiva la visibilidad del componente. Simula ComponentWillUnmounted.
  },[setShowReturnArrow]) //pasamos el array para que solo se ejecute al montarse el componente y cambiar la funcion del actualizacion

  return (
    <>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <ProductDetail />
      <Modal />
    </>
  )
}