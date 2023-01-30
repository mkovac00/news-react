import React, { useState } from "react";
import "./Navigation.scss";

import MobileNav from "./MobileNav";

const Navigation = () => {
  return (
    <header>
      <h1 className="header-title">
        <span className="header-title-red">My</span>News
      </h1>
      <MobileNav />
    </header>
  );
};

export default Navigation;
