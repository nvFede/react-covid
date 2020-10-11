import { render } from "@testing-library/react";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.jpg";

const Menu = (props) => (
  <header className="Header__menu">
    <div className="Header__menu--container">
      <img src={logo} alt="covid logo" className="Header__menu--logo" />
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
    </div>
  </header>
);

export default Menu;
