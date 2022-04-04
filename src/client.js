import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import createStore from "./store";

import App from "./components/App";
import { BrowserRouter } from "react-router-dom";

const preloadedState = window.APP_STATE;
delete window.APP_STATE;

ReactDOM.hydrate(
  <BrowserRouter>
    <Provider store={createStore(preloadedState)}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("app")
);
