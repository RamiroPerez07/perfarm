import React from 'react'
import { StyledHeader, StyledHeaderContent } from './Header.js'

export const Header = ({children}) => {
  return (
    <StyledHeader>
      <StyledHeaderContent>
        {children}
      </StyledHeaderContent>
    </StyledHeader>
  )
}

