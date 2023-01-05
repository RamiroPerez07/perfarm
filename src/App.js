import React, {useContext} from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme , darkTheme } from './themes/themes.js';
import { GlobalStyle } from './globalStyles/globalStyle.js';
import { Routes } from './routes/Routes.jsx';
import { DarkModeContext } from './contexts/darkModeContext.js';

function App() {

  //me traigo toda la data del contexto dark mode, con esto accedo a las variables de estado
  const data = useContext(DarkModeContext);
  //desestructuro
  const {theme, mountedComponent} = data
  const themeMode = () => theme === "light" ? lightTheme : darkTheme;
  if(!mountedComponent) {return <div/>};

  return (
    <ThemeProvider theme={themeMode}>
        <GlobalStyle />
        <div className="App">
          <Routes />
        </div>
    </ThemeProvider>
  );
}

export default App;
