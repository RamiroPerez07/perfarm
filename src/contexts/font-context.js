import { createContext, useState } from "react";

export const FontContext = createContext();

export const FontContextProvider = ({children}) => {
  
  const fontSetup = {
    fsXSmall0: '0.6rem',
    fsXSmall1: '0.7rem',
    fsSmall0: '0.8rem',
    fsSmall1: '0.9rem',
    fsMedium0: '1rem',
    fsMedium1: '1.2rem',
    fsMedium2: '1.4rem',
    fsLarge0: '2rem',
    fsLarge1: '2.5rem',
    fsLarge2: '3rem',
    fsXLarge0: '3.5rem',
    fsXLarge1: '4rem',
    fwLight: '300',
    fwNormal: '500',
    fwBold: '800',
  }

  const [fontData,setFontData] = useState(fontSetup)

  const fonts = {fontData, setFontData}

  return <FontContext.Provider value={fonts}>{children}</FontContext.Provider>

}