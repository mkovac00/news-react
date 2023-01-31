import React, { useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./Header.scss";

import Navigation from "./Navigation";
import Search from "./Search";

const Header = () => {
  const [isFeaturedActive, setIsFeaturedActive] = useState(true);
  const [isLatestActive, setIsLatestActive] = useState(false);

  const handleFeaturedActivation = () => {
    if (isFeaturedActive && !isLatestActive) {
      setIsFeaturedActive(true);
    } else {
      setIsFeaturedActive((current) => !current);
      setIsLatestActive((current) => !current);
    }
  };

  const handleLatestActivation = () => {
    if (isLatestActive && !isFeaturedActive) {
      setIsLatestActive(true);
    } else {
      setIsLatestActive((current) => !current);
      setIsFeaturedActive((current) => !current);
    }
  };

  return (
    <div className="header">
      <Navigation />
      <Search />
      <div className="news-option-container">
        <Link
          to="/featured"
          style={{ textDecoration: "none", color: "#000000" }}
        >
          <h3
            onClick={handleFeaturedActivation}
            className={`news-option ${
              isFeaturedActive ? "news-option-active" : ""
            }`}
          >
            Featured
          </h3>
        </Link>
        <Link to="/latest" style={{ textDecoration: "none", color: "#000000" }}>
          <h3
            onClick={handleLatestActivation}
            className={`news-option ${
              isLatestActive ? "news-option-active" : ""
            }`}
          >
            Latest
          </h3>
        </Link>
      </div>
    </div>
  );
};

export default Header;
