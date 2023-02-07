import React from "react";
import { NavLink } from "react-router-dom";
import "./DesktopHeader.scss";

const DesktopHeader = () => {
  return (
    <div className="desktop-header">
      <h1 className="desktop-header-title">
        <span className="desktop-header-title-red">My</span>News
      </h1>
      <NavLink to="/search">
        <button className="search-button">Search</button>
      </NavLink>
    </div>
  );
};

export default DesktopHeader;
