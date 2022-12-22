import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { FontContextProvider } from './contexts/font-context';
import { GlobalStyles } from './globalStyles/global.js';
import { ThemeProvider } from 'styled-components';
import {theme} from './themes/theme.js'
//import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <FontContextProvider>
        <GlobalStyles />
        <App />
      </FontContextProvider>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
