// Burger.js
import React from 'react';
import { StyledBurger } from './Burger.js';
import { bool, func } from 'prop-types';

export const Burger = ({openMenu, setOpenMenu}) => {
  return (
    <StyledBurger openMenu={openMenu} onClick={ () => setOpenMenu(!openMenu) }>
      <div />
      <div />
      <div />
    </StyledBurger>
  )
}

Burger.propTypes = {
  openMenu: bool.isRequired,
  setOpenMenu: func.isRequired,
};

