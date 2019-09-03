import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <ul className="menu">
      <li className="menu-item">
        <NavLink to="/" exact>
          Home
        </NavLink>
      </li>
      <li className="menu-item">
        <NavLink to="/projects">Projects</NavLink>
      </li>
      <li className="menu-item">
        <NavLink to="/contact">Contact</NavLink>
      </li>
    </ul>
  );
};

export default Menu;
