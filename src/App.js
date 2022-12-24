import React,{ useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme , darkTheme } from './themes/themes.js';
import { GlobalStyle } from './globalStyles/globalStyle.js';
import { Header } from './components/HeaderComponents/Header/Header.jsx';
import { ThemeToggleBtn } from './components/HeaderComponents/ThemeToggleBtn/ThemeToggleBtn.jsx';
import { useDarkMode } from './customHooks/useDarkMode.js';
import {Navbar} from './components/HeaderComponents/Navbar/Navbar.jsx';
import { BurgerContainer } from './components/HeaderComponents/Burger/BurgerContainer.jsx';
import { Burger } from './components/HeaderComponents/Burger/Burger.jsx';
import {Hero} from './components/MainComponents/Hero/Hero.jsx';
import { ProductContainer } from './components/MainComponents/ProductSection/ProductContainer/ProductContainer.jsx';
import { Products } from './data/products.js';
import { ProductCard } from './components/MainComponents/ProductSection/ProductCard/ProductCard.jsx';
import { CartIcon } from './components/HeaderComponents/Cart/CartIcon/CartIcon.jsx';
import { Cart } from './components/HeaderComponents/Cart/CartFrame/Cart.jsx';

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
          <CartIcon />
          <Cart />
          <BurgerContainer>
            <Burger openBurgerMenu={openBurgerMenu} setOpenBurgerMenu={setOpenBurgerMenu} />
          </BurgerContainer>
        </Header>
        <main>
          <Hero />
          <ProductContainer>
            {
              Products.map( (product) => {
                return (<ProductCard 
                          productId = {product.id}
                          productName = {product.name}
                          productBrand = {product.brand}
                          productDescription = {product.description}
                          productPrice = {product.price}
                          productStock = {product.stock}
                          productImg = {product.img_url}
                        />)
              })
            }
          </ProductContainer>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
