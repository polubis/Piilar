import express from 'express';

import React from 'react';
import ReactDomServer from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { HelmetProvider } from 'react-helmet-async';
import { ServerStyleSheets } from '@material-ui/core/styles';

import App from './App';
import Html from './html';

const app = express();
const PORT = process.env.PORT || 3000;

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
          <App />
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
