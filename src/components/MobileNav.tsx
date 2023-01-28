import React from "react";
import "./MobileNav.scss";

import Category from "./Category";

const categories = [
  "Home",
  "Sport",
  "World",
  "Politics",
  "Health",
  "Celebrities",
];

const MobileNav = () => {
  return (
    <div className="mobile-menu">
      {categories.map((category) => (
        <Category name={category} />
      ))}
    </div>
  );
};

export default MobileNav;
