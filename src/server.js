import express from "express";
import path from "path";
import React from "react";
import ReactDOMServer from "react-dom/server";
import createStore from "./store";
import { Provider } from "react-redux";

import Html from "./components/Html";
import App, { routeList } from "./components/App";
import { StaticRouter } from "react-router-dom";

const app = express();

app.use(express.static(path.join(__dirname)));

app.get("*", async (req, res) => {
  const scripts = ["vendor.js", "client.js"];

  const store = createStore();
  const { dispatch, getState } = store;

  const matchedRoutes = routeList.filter((route) => route.path === req.path);
  const promises = matchedRoutes.map(({ component }) => {
    return component?.fetchData ? component?.fetchData({ dispatch }) : null;
  });

  Promise.all(promises).then(() => {
    const appMarkup = ReactDOMServer.renderToString(
      <StaticRouter location={req.path} context={{}}>
        <Provider store={store}>
          <App />
        </Provider>
      </StaticRouter>
    );
    const html = ReactDOMServer.renderToStaticMarkup(
      <Html children={appMarkup} scripts={scripts} initialState={getState()} />
    );
    res.send(`<!doctype html>${html}`);
  });
});

app.listen(3006, () => console.log("Listening on localhost:3006"));
