import React from "react";
import "./style.scss";
import Logo from "./img/logo.png";

const Header = () => {
  return (
    <nav className="header">
      <img src={Logo} alt="Logo" />
      <h3>React Facts</h3>
      <h4>React Course - Project 1</h4>
    </nav>
  );
};

export default Header;
