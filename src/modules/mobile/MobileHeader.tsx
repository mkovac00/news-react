import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./MobileHeader.scss";

import MobileNav from "./MobileNav";

const activeStyle = {
  backgroundColor: "rgba(187, 30, 30, 0.15)",
  color: "#BB1E1E",
};

const MobileHeader = () => {
  let navigate = useNavigate();

  const updateSearchQuery = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      const target = event.target as HTMLInputElement;
      localStorage.setItem("searchQuery", target.value);

      navigate("/search");
      target.value = "";
    }
  };

  return (
    <div className="mobile-header__container">
      <MobileNav />
      <input
        className="mobile-header__search-input"
        placeholder="Search"
        type="text"
        onKeyDown={updateSearchQuery}
      ></input>

      <div className="mobile-header__news-option">
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
