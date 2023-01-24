import {createContext} from 'react';
import { useState } from 'react';

export const ReturnArrowContext = createContext();

export const ReturnArrowContextProvider = ({children}) =>{
  const [showReturnArrow,setShowReturnArrow] = useState(false);
  const arrowData = {showReturnArrow,setShowReturnArrow}
  return(
    <ReturnArrowContext.Provider value={arrowData}>{children}</ReturnArrowContext.Provider>
  )
}