import { render } from "@testing-library/react";
import React, { Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Menu from "./Menu";

import Home from "../Pages/Home";
import Country from "../Pages/Country";
import About from "../Pages/About";

import "../assets/styles/main.scss";
import NotFound from "./NotFound";

const App = () => (
  <Fragment>
    <BrowserRouter>
      <Menu />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/countries/:slug" component={Country} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  </Fragment>
);

export default App;
