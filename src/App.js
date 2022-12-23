import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme , darkTheme } from './themes/themes.js';
import { GlobalStyle } from './globalStyles/globalStyle.js';
import { Header } from './components/headerComponents/Header/Header.jsx';
import { ThemeToggleBtn } from './components/headerComponents/ThemeToggleBtn/ThemeToggleBtn.jsx';
import { useDarkMode } from './customHooks/useDarkMode.js';
import {Navbar} from './components/headerComponents/Navbar/Navbar.jsx';
import { BurgerContainer } from './components/headerComponents/Burger/BurgerContainer.jsx';
import { Burger } from './components/headerComponents/Burger/Burger.jsx';
import {Hero} from './components/mainComponents/Hero/Hero.jsx';

function App() {

  const [openBurgerMenu, setOpenBurgerMenu] = useState(false);
  //temas 
  const [theme, toggleTheme, mountedComponent] = useDarkMode();
  const themeMode = () => theme === "light" ? lightTheme : darkTheme;
  if(!mountedComponent) {return <div/>};




  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyle />
      <div className="App">
        <Header>
          <Navbar openBurgerMenu={openBurgerMenu} />
          <ThemeToggleBtn theme={theme} toggleTheme={toggleTheme} />
          <BurgerContainer>
            <Burger openBurgerMenu={openBurgerMenu} setOpenBurgerMenu={setOpenBurgerMenu} />
          </BurgerContainer>
        </Header>
        <main>
          <Hero />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
