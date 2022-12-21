import React from 'react';
import { StyledNavbar } from './Navbar';

const Navbar = ({children}) => {
  return (
    <StyledNavbar>{children}</StyledNavbar>
  )
}

export default Navbar