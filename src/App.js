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
import { ProductCard } from './components/MainComponents/ProductSection/ProductCard/ProductCard.jsx';
import { CartIcon } from './components/HeaderComponents/Cart/CartIcon/CartIcon.jsx';
import { Cart } from './components/HeaderComponents/Cart/CartFrame/Cart.jsx';
import { useSelector} from 'react-redux';
import { ProductFilterFrame } from './components/MainComponents/ProductSection/ProductFilterFrame/ProductFilterFrame.jsx';
import ProductSection from './components/MainComponents/ProductSection/ProductSection/ProductSection.jsx';

function App() {

  const productFilterState = useSelector(state => state.productFilter)
  const {shownProducts} = productFilterState

  const [openCart, setOpenCart] = useState(false); 
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
            <CartIcon openCart={openCart} setOpenCart={setOpenCart} />
            <Cart openCart={openCart} setOpenCart={setOpenCart} />
            <BurgerContainer>
              <Burger openBurgerMenu={openBurgerMenu} setOpenBurgerMenu={setOpenBurgerMenu} />
            </BurgerContainer>
          </Header>
          <main>
            <Hero />
            <ProductSection>
              <ProductFilterFrame />
              <ProductContainer>
                {
                  shownProducts.map( (product) => {
                    console.log(product)
                    return (<ProductCard 
                              productId = {product.id}
                              productName = {product.name}
                              productBrand = {product.brand}
                              productDescription = {product.description}
                              productPrice = {product.price}
                              productStock = {product.stock}
                              productImg = {product.img_url}
                              productFreeShipping = {product.free_shipping}
                              key = {product.id}
                            />)
                  })
                }
              </ProductContainer>
            </ProductSection>
          </main>
        </div>
    </ThemeProvider>
  );
}

export default App;
