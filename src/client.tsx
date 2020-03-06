import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider, StylesProvider } from '@material-ui/core';

import { generateClassName } from 'generateClassName';
import theme from './theme';

import App from 'App';

import './styles/index.scss';

const Main = () => {
  return (
    <StylesProvider generateClassName={generateClassName}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </StylesProvider>
  );
};

hydrate(
  <HelmetProvider>
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  </HelmetProvider>,
  document.getElementById('root')
);
