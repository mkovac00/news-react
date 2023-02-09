import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./MobileNav.scss";

import Category from "./Category";
import { categories } from "../categories";

const toggleMobileMenu = () => {
  const mobileMenu = document.querySelector(".wrapper");
  mobileMenu?.classList.toggle("menu-active");
};

const MobileNav = () => {
  let activeStyle = {
    backgroundColor: "white",
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
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
    <>
      <div onClick={toggleMobileMenu} className="menu-btn">
        <div className="menuicon-bar1"></div>
        <div className="menuicon-bar2"></div>
        <div className="menuicon-bar3"></div>
      </div>
      <div className="wrapper">
        <div onClick={toggleMobileMenu} className="menu-btn">
          <div className="menuicon-bar1"></div>
          <div className="menuicon-bar2"></div>
          <div className="menuicon-bar3"></div>
        </div>
        <div className="mobilenav-content">
          <h1 className="mobilenav-title">
            <span className="mobilenav-title-red">My</span>News
          </h1>
          <input
            className="search-button"
            placeholder="Search"
            type="text"
            onKeyDown={updateSearchQuery}
          ></input>
          <div className="category-list">
            {categories.map((category) => (
              <NavLink
                to={`/category/${category.name}`}
                onClick={toggleMobileMenu}
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                <Category
                  key={category.id}
                  name={
                    category.name.charAt(0).toUpperCase() +
                    category.name.slice(1)
                  }
                  size={40}
                />
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
