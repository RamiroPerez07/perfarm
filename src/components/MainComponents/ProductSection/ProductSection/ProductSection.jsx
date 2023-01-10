import React from 'react';
import styled from 'styled-components';
import { ProductFilterFrame } from '../ProductFilterFrame/ProductFilterFrame';
import { ProductContainer } from '../ProductContainer/ProductContainer';
import { useSelector } from 'react-redux';
import { ProductCard } from '../ProductCard/ProductCard';
import { ProductSearch } from '../ProductSearch/ProductSearch.jsx';


const StyledSection = styled.section`
  width: 100%;
  margin-top: 100px;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  justify-items: center;
  align-items: start;
  gap: 2em;
`;

const StyledTitle = styled.h2`
  width: 90%;
  font-size: 1.6rem;
  font-weight: 700;
  color: ${({theme})=>theme.secondary};
  margin-bottom: 25px;
  text-align: center;
`;

export const ProductSection = () => {
  const productFilterState = useSelector(state => state.productFilter);
  const {shownProducts} = productFilterState

  const menuManagerState = useSelector(state => state.menuManager);
  const {showProductFilterMenu} = menuManagerState;


  return (
    <StyledSection>
      <StyledTitle>¡Conocé nuestra amplia gama de productos!</StyledTitle>
      <ProductSearch />
      {showProductFilterMenu && <ProductFilterFrame />}
      <ProductContainer>
        {
          shownProducts.map( (product) => {
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
    </StyledSection>
  )
}

