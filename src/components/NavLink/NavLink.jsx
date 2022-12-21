import React from 'react';
import { StyledNavLink } from './NavLink';
import { useContext } from 'react';
import { FontContext } from '../../contexts/font-context';

const NavLink = ({children}) => {

  const fonts = useContext(FontContext);
  const {fontData} = fonts;

  return (
    <StyledNavLink fontProps={fontData}>{children}</StyledNavLink>
  )
}

export default NavLink