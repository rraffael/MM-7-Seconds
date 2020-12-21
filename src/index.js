import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route } from "react-router-dom";
import "assets/scss/material-kit-react.scss?v=1.9.0";
import LandingPage from "views/LandingPage.js";

var hist = createBrowserHistory();
ReactDOM.render(
  <Router history={hist}>
      <Route path="/" component={LandingPage} />
  </Router>,
  document.getElementById("root")
);