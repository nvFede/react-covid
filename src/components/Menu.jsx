import { render } from "@testing-library/react";
import React from "react";
import { Link } from "react-router-dom";
const Menu = (props) => (
  <header className="Header__menu">
    <h1> COVID 19 </h1>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </nav>
  </header>
);

export default Menu;
