import express from "express";

import React from "react";
import ReactDomServer from "react-dom/server";
import { StaticRouter } from "react-router";
import { HelmetProvider } from "react-helmet-async";

import App from "./src/App";
import Html from "./src/components/ssr/Html";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("build/public"));

const staticRouterContext = {};
const helmetContext = {};

app.get("*", (req, res) => {
  const scripts = ["vendor.js", "main.js"];
  const stylesheets = ["main.css"];

  const appMarkup = ReactDomServer.renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={req.url} context={staticRouterContext}>
        <App />
      </StaticRouter>
    </HelmetProvider>
  );

  const html = ReactDomServer.renderToStaticMarkup(
    <Html children={appMarkup} scripts={scripts} stylesheets={stylesheets} />
  );

  res.send(`<!doctype html>${html}`);
});

app.listen(PORT, () => {
  console.log(`App running at ${PORT}`);
});
