import {createContext} from 'react'
import { useDarkMode } from '../customHooks/useDarkMode';

export const DarkModeContext = createContext();

export const DarkModeContextProvider = ({children}) =>{
  const [theme, toggleTheme, mountedComponent] = useDarkMode();
  const darkModeData = {theme, toggleTheme,mountedComponent}
  return(
    <DarkModeContext.Provider value={darkModeData}>{children}</DarkModeContext.Provider>
  )
}