import express from "express";

import React from "react";
import ReactDomServer from "react-dom/server";
import { StaticRouter } from "react-router";
import { HelmetProvider } from "react-helmet-async";

import App from "./App";
import Html from "./html";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("build/public"));

app.get("*", (req, res) => {
  const staticRouterContext = {};
  const helmetContext = {};

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

  // TODO
  // Route based code splitting
  // Code splitting at all
  // Calling API
  // Authorization and authorization
  // Fetch basic data
  // Refactor package.json scripts
  // Refactor 2 webpacks config into 1
  // Add streams

  res.send(`<!doctype html>${html}`);
});

app.listen(PORT, () => {
  console.log(`App running at ${PORT}`);
});
