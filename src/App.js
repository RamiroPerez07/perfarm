import React from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme , darkTheme } from './themes/themes.js';
import { GlobalStyle } from './globalStyles/globalStyle.js';
import { Header } from './components/HeaderComponents/Header/Header.jsx';
import { useDarkMode } from './customHooks/useDarkMode.js';
import {Hero} from './components/MainComponents/Hero/Hero.jsx';
import {ProductSection} from './components/MainComponents/ProductSection/ProductSection/ProductSection.jsx';
import {Modal} from './components/Modals/Modal.jsx';

function App() {




  //gestion de temas. Lo manejo con una variable de estado
  const [theme, toggleTheme, mountedComponent] = useDarkMode();
  const themeMode = () => theme === "light" ? lightTheme : darkTheme;
  if(!mountedComponent) {return <div/>};




  return (
    <ThemeProvider theme={themeMode}>
        <GlobalStyle />
        <div className="App">
          <Header 
            theme={theme}
            toggleTheme={toggleTheme}
          />
          <main>
            <Hero />
            <ProductSection />
          </main>
          <Modal />
        </div>
    </ThemeProvider>
  );
}

export default App;
