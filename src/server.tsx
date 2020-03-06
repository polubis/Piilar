import express, { Request, Response, NextFunction } from 'express';

import React from 'react';
import ReactDomServer from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { HelmetProvider } from 'react-helmet-async';
import { ServerStyleSheets, ThemeProvider } from '@material-ui/core/styles';

import App from './App';
import Html from './html';
import theme from './theme';

const PORT = process.env.PORT || 3000;

const app = express();

app.get('*.js', (req, res, next) => {
  if (req.header('Accept-Encoding').includes('br')) {
    req.url = req.url + '.br';
    res.set('Content-Encoding', 'br');
    res.set('Content-Type', 'application/javascript; charset=UTF-8');

    next();
  }
});

app.use(express.static('build/public'));

app.get('*', (req, res) => {
  const sheets = new ServerStyleSheets();
  const staticRouterContext = {};
  const helmetContext = {};

  const scripts = ['vendor.js', 'main.js'];
  const stylesheets = ['main.css'];

  const appMarkup = ReactDomServer.renderToString(
    sheets.collect(
      <HelmetProvider context={helmetContext}>
        <StaticRouter location={req.url} context={staticRouterContext}>
          <ThemeProvider theme={theme}>
            <App />
          </ThemeProvider>
        </StaticRouter>
      </HelmetProvider>
    )
  );

  const css = sheets.toString();

  const html = ReactDomServer.renderToStaticMarkup(
    <Html children={appMarkup} scripts={scripts} stylesheets={stylesheets} css={css} />
  );

  res.send(`<!doctype html>${html}`);
});

app.listen(PORT, () => {
  console.log(`App running at ${PORT}`);
});
