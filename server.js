import express from "express";
import bodyParser from "body-parser";

import React from "react";
import ReactDomServer from "react-dom/server";
import { StaticRouter } from "react-router";
import { HelmetProvider } from "react-helmet-async";

import App from "./src/app";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static("build/public"));

const staticRouterContext = {};
const helmetContext = {};

app.get("*", (req, res) => {
  const content = ReactDomServer.renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={req.url} context={staticRouterContext}>
        <App />
      </StaticRouter>
    </HelmetProvider>
  );

  const { helmet } = helmetContext;

  const html = `
    <html>
      <head>
        ${helmet.meta.toString()}
        ${helmet.title.toString()}
      </head>
      <body>
        <div id="root">${content}</div>
        <script src="client_bundle.js"></script>
      </body>
    </html>
  `;

  res.send(html);
});

app.listen(PORT, () => {
  console.log(`App running at ${PORT}`);
});
