import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";

import Navigation from "./Navigation";

const Header = () => {
  let activeStyle = {
    backgroundColor: "rgba(187, 30, 30, 0.15)",
    color: "#BB1E1E",
  };

  const updateSearchQuery = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      const target = event.target as HTMLInputElement;
      localStorage.setItem("searchQuery", target.value);

      window.location.href = "/search";
      target.value = "";
    }
  };

  return (
    <div className="header">
      <Navigation />
      <input
        className="search-button"
        placeholder="Search"
        type="text"
        onKeyDown={updateSearchQuery}
      ></input>

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
