import React from 'react';
import { useContext } from 'react';
import { DarkModeContext } from '../../contexts/darkModeContext';
import { Header } from '../../components/HeaderComponents/Header/Header';
import { ContactForm } from '../../components/MainComponents/ContactForm/ContactForm';

export const Contact = () => {

  //me traigo toda la data del contexto dark mode, con esto accedo a las variables de estado
  const data = useContext(DarkModeContext);
  //desestructuro
  const {theme, toggleTheme} = data

  return (
    <>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main>
        <ContactForm />
      </main>
    </>
  )
}
