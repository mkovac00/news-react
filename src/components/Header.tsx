import React, { useState } from "react";
import { BrowserRouter as Router, Link, NavLink } from "react-router-dom";
import "./Header.scss";

import Navigation from "./Navigation";

const Header = () => {
  let activeStyle = {
    backgroundColor: "rgba(187, 30, 30, 0.15)",
    color: "#BB1E1E",
  };

  return (
    <div className="header">
      <Navigation />
      <NavLink to="/search">
        <button className="search-button">Search</button>
      </NavLink>

      <div className="news-option-container">
        <NavLink
          to="/category/home"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Featured
        </NavLink>
        <NavLink
          to="/latest"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Latest
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
