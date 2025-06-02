import React from "react";

import { NavLink } from "react-router-dom";

import "./NavBar.css";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar">
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
            to="/User/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            User
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Sign Up"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Form
          </NavLink>
        </li>
      </nav>
    </div>
  );
};

export default NavBar;
