import React from 'react';
import styled from 'styled-components';
import { ProductFilterFrame } from '../ProductFilterFrame/ProductFilterFrame';
import { ProductContainer } from '../ProductContainer/ProductContainer';
import { useSelector } from 'react-redux';
import { ProductCard } from '../ProductCard/ProductCard';


const StyledSection = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  justify-items: center;
  align-items: start;
`;

export const ProductSection = () => {
  const productFilterState = useSelector(state => state.productFilter)
  const {shownProducts} = productFilterState
  return (
    <StyledSection>
      <ProductFilterFrame />
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

