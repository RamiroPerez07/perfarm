import React, {useContext} from 'react';
import { Header } from '../../components/HeaderComponents/Header/Header';
import { Hero } from '../../components/MainComponents/Hero/Hero';
import { Modal } from '../../components/Modals/Modal';
import { DarkModeContext } from '../../contexts/darkModeContext';

export const Home = () => {

  //me traigo toda la data del contexto dark mode, con esto accedo a las variables de estado
  const data = useContext(DarkModeContext);
  //desestructuro
  const {theme, toggleTheme} = data

  return (
    <>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
      </main>
      <Modal />{/* Por si a futuro se llegara a necesitar algun mensaje */}
    </>
  )
}

