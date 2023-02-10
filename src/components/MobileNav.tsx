import React from "react";
import "./MobileNav.scss";
import { NavLink, useNavigate } from "react-router-dom";

import Category from "./Category";
import { categories } from "../categories";

const MobileNav = () => {
  let navigate = useNavigate();

  let activeStyle = {
    backgroundColor: "white",
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
    color: "#BB1E1E",
  };

  const updateSearchQuery = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      const target = event.target as HTMLInputElement;
      localStorage.setItem("searchQuery", target.value);

      navigate("/search");
      target.value = "";
      toggleMobileMenu();
    }
  };

  const toggleMobileMenu = () => {
    const mobileMenu = document.querySelector(".mobile-menu__container");
    const mobileMenuIcon1 = document.querySelector(".menu-icon__top-bar");
    const mobileMenuIcon2 = document.querySelector(".menu-icon__middle-bar");
    const mobileMenuIcon3 = document.querySelector(".menu-icon__bottom-bar");

    mobileMenu?.classList.toggle("mobile-menu__active");
    mobileMenuIcon1?.classList.toggle("change-top");
    mobileMenuIcon2?.classList.toggle("change-middle");
    mobileMenuIcon3?.classList.toggle("change-bottom");
  };

  return (
    <header>
      <h1 className="mobile-nav__header-title">
        <span className="mobile-nav__header-title-important">My</span>News
      </h1>
      <div onClick={toggleMobileMenu} className="mobile-menu__btn">
        <div className="menu-icon__top-bar"></div>
        <div className="menu-icon__middle-bar"></div>
        <div className="menu-icon__bottom-bar"></div>
      </div>
      <div className="mobile-menu__container">
        <div className="mobile-menu__content">
          <h1 className="mobile-menu__title">
            <span className="mobile-menu__title-important">My</span>News
          </h1>
          <input
            className="mobile-menu__search-input"
            placeholder="Search"
            type="text"
            onKeyDown={updateSearchQuery}
          ></input>
          <div className="mobile-menu__category-list">
            {categories.map((category) => (
              <NavLink
                key={category.id}
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
                  size={35}
                />
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default MobileNav;
