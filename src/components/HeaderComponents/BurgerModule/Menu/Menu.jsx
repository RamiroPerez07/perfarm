import React from 'react';
import { StyledMenu } from './Menu.js';
import  { bool } from 'prop-types';

export const Menu = ({openMenu}) => {
  return (
    <StyledMenu openMenu={openMenu}>
      <a href="/">
        <span role="img" aria-label="home">&#x1f481;&#x1f3fb;&#x200d;&#x2642;&#xfe0f;</span>
        Home
      </a>
      <a href="/">
        <span role="img" aria-label="price">&#x1f4b8;</span>
        Products
        </a>
      <a href="/">
        <span role="img" aria-label="contact">&#x1f4e9;</span>
        Contact
        </a>
    </StyledMenu>
  )
}

Menu.propTypes = {
  openMenu: bool.isRequired,
}
