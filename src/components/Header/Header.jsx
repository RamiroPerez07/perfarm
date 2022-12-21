import React from 'react'
import { StyledHeader } from './Header.js'

const Header = ({children}) => {
  return (
    <StyledHeader>{children}</StyledHeader>
  )
}

export default Header;