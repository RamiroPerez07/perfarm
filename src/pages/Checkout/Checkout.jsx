import React from 'react';
import { useContext } from 'react';
import { DarkModeContext } from '../../contexts/darkModeContext';
import { Header } from '../../components/HeaderComponents/Header/Header';
import { CheckoutFrame } from '../../components/MainComponents/Checkout/CheckoutFrame';
import { Modal } from '../../components/Modals/Modal';


export const Checkout = () => {
  //me traigo toda la data del contexto dark mode, con esto accedo a las variables de estado
  const data = useContext(DarkModeContext);
  //desestructuro
  const {theme, toggleTheme} = data

  return (
    <>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main>
        <CheckoutFrame />
      </main>
      <Modal />{/* Por si a futuro se llegara a necesitar algun mensaje */}
    </>
  )
}
