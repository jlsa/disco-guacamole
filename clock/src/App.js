import React, { useState, useEffect } from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
// import WebFont from 'webfontloader';
// import { GlobalStyles } from './theme/GlobalStyles';
// import { useTheme } from './theme/useTheme';
// import ThemeSelector from './ThemeSelector';
import theme from './theme/theme';
import Clock from './Components/Clock/Clock';

const Style = createGlobalStyle`
  * { box-sizing: border-box; }
  body{
    margin:0;
    background-color: ${theme.colors.bg}
  }
`

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Style />
      <Clock />
    </ThemeProvider>
  )
};

export default App;
