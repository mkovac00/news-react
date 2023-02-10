import React from "react";
import { NavLink } from "react-router-dom";
import "./MobileHeader.scss";

import MobileNav from "./MobileNav";

const MobileHeader = () => {
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
    <div className="mobile-header">
      <MobileNav />
      <input
        className="search-input"
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

export default MobileHeader;
