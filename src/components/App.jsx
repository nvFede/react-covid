import { render } from "@testing-library/react";
import React, { Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Menu from "./Menu";

import Usuarios from "../Pages/Home";

import "../assets/styles/main.scss";

const About = () => <h1>About!</h1>;

const App = () => (
  <Fragment>
    <BrowserRouter>
      <Menu />
      <Switch>
        <Route exact path="/" component={Usuarios} />
        <Route exact path="/about" component={About} />
      </Switch>
    </BrowserRouter>
  </Fragment>
);

export default App;
