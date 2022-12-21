import './App.css';
import { ThemeProvider } from 'styled-components';
import {theme} from './theme.js';
import {GlobalStyles} from './global.js';
import Burger from './components/BurgerModule/Burger/Burger.jsx';
import Menu from './components/BurgerModule/Menu/Menu.jsx';
import { useState, useRef } from 'react';
import { useOnClickOutsideMenu } from './hooks/hooks';
import Header from './components/Header/Header.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import NavLink from './components/NavLink/NavLink.jsx';
import { FontContextProvider } from './contexts/font-context';
import BurgerContainer from './components/BurgerModule/BurgerContainer/BurgerContainer.jsx';
import Hero from './components/Hero/Hero.jsx';

function App() {

  const [openMenu, setOpenMenu] = useState(false);

  const node = useRef();
  useOnClickOutsideMenu(node, () => setOpenMenu(false) );



  return (
    <ThemeProvider theme={theme}>
      <FontContextProvider>
        <>
          <GlobalStyles />
          <Header>
            <BurgerContainer ref={node} >
              <Burger openMenu={openMenu} setOpenMenu={setOpenMenu} />
              <Menu openMenu={openMenu} setOpenMenu={setOpenMenu} />
            </BurgerContainer>
            <Navbar>
              <NavLink>Home</NavLink>
              <NavLink>Products</NavLink>
              <NavLink>Contact</NavLink>
            </Navbar>
          </Header>
          <main>
            <Hero></Hero>
          </main>

        </>
      </FontContextProvider>
    </ThemeProvider>
  );
}

export default App;
