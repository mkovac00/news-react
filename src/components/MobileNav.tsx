import React from "react";
import "./MobileNav.scss";

import Category from "./Category";
import Search from "./Search";

const categories = [
  "Home",
  "Sport",
  "World",
  "Politics",
  "Health",
  "Celebrities",
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
          <Search />
          <div className="category-list">
            {categories.map((category) => (
              <Category name={category} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
