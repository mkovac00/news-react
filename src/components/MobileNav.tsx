import React from "react";
import "./MobileNav.scss";

import Category from "./Category";

const categories = [
  {
    name: "science",
    id: 0,
  },
  {
    name: "business",
    id: 1,
  },
  {
    name: "entertainment",
    id: 2,
  },
  {
    name: "health",
    id: 3,
  },
  {
    name: "sports",
    id: 4,
  },
  {
    name: "technology",
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
          <div className="category-list">
            {categories.map((category) => (
              <Category
                key={category.id}
                name={
                  category.name.charAt(0).toUpperCase() + category.name.slice(1)
                }
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
