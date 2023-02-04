import React from "react";
import { Link } from "react-router-dom";
import "./MobileNav.scss";

import Category from "./Category";
import Search from "./Search";

const categories = [
  {
    name: "Home",
    id: 0,
  },
  {
    name: "Sport",
    id: 1,
  },
  {
    name: "World",
    id: 2,
  },
  {
    name: "Politics",
    id: 3,
  },
  {
    name: "Health",
    id: 4,
  },
  {
    name: "Celebrities",
    id: 5,
  },
];

const toggleMobileMenu = () => {
  const mobileMenu = document.querySelector(".wrapper");
  mobileMenu?.classList.toggle("active");
};

const MobileNav = () => {
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
          <Link to="/search">
            <button className="search-button">Search</button>
          </Link>
          <div className="category-list">
            {categories.map((category) => (
              <Category key={category.id} name={category.name} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
