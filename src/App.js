import {Burger} from './components/HeaderComponents/BurgerModule/Burger/Burger.jsx';
import {Menu} from './components/HeaderComponents/BurgerModule/Menu/Menu.jsx';
import { useState, useRef } from 'react';
import { useOnClickOutsideMenu } from './hooks/hooks';
import {Header} from './components/HeaderComponents/Header/Header.jsx';
import {Navbar} from './components/HeaderComponents/Navbar/Navbar.jsx';
import {NavLink} from './components/HeaderComponents/NavLink/NavLink.jsx';
import {BurgerContainer} from './components/HeaderComponents/BurgerModule/BurgerContainer/BurgerContainer.jsx';
import {Hero} from './components/MainComponents/Hero/Hero.jsx'
import { ProductCatalogSection } from './components/MainComponents/ProductCatalogSection/ProductCatalogSection.jsx';

function App() {

  //variables de estado
  const [openMenu, setOpenMenu] = useState(false);

  //hooks
  const node = useRef();
  useOnClickOutsideMenu(node, () => setOpenMenu(false) );



  return (
    <>
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
        <ProductCatalogSection />
      </main>

    </>
  );
}

export default App;
