import React from "react";

import { NavLink } from "react-router-dom";

import "./NavBar.css";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar">
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/counter"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Counter
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/counter_r"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Counter_r
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/form"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Form
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
