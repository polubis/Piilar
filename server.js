import express from 'express';
import bodyParser from 'body-parser';

import React from 'react';
import ReactDomServer from 'react-dom/server';
import { StaticRouter } from 'react-router';

import App from './src/app';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static('build/public'));

app.get('*', (req, res) => {
  const context = {};

  const content = ReactDomServer.renderToString(
    <StaticRouter location={req.url} context={content}>
      <App />
    </StaticRouter>
  );

  const html = `
    <html>
      <head>
      </head>
      <body>
        <div id="root">
          ${content}
        </div>
        <script src="client_bundle.js"></script>
      </body>
    </html>
  `;

  res.send(html);
});

app.listen(PORT, () => {
  console.log(`App running at ${PORT}`);
});