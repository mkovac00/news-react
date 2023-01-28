import React, { useState } from "react";
import "./Navigation.scss";

import MobileNav from "./MobileNav";
import Category from "./Category";

const Navigation = () => {
  const [isMobileMenuActive, setIsMobileMenuActive] = useState(false);

  function showMobileMenu() {
    setIsMobileMenuActive(true);
  }

  function hideMobileMenu() {
    setIsMobileMenuActive(false);
  }

  return (
    <header>
      <h1 className="header-title">
        <span className="header-title-red">My</span>News
      </h1>
      <p
        onClick={isMobileMenuActive ? hideMobileMenu : showMobileMenu}
        className="header-menu-icon"
      >
        E
      </p>
      {isMobileMenuActive && <MobileNav />}
    </header>
  );
};

export default Navigation;
