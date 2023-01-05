import React, {useContext} from 'react';
import { Header } from '../../components/HeaderComponents/Header/Header';
import {ProductSection} from '../../components/MainComponents/ProductSection/ProductSection/ProductSection.jsx';
import { Modal } from '../../components/Modals/Modal';
import { DarkModeContext } from '../../contexts/darkModeContext';

export const Products = () => {

  //me traigo toda la data del contexto dark mode, con esto accedo a las variables de estado
  const data = useContext(DarkModeContext);
  //desestructuro
  const {theme, toggleTheme} = data

  return (
    <>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main>
        <ProductSection />
      </main>
      <Modal />
    </>
  )
}

