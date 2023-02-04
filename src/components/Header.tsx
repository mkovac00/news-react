import React, { useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./Header.scss";

import Navigation from "./Navigation";

const Header = () => {
  const [isFeaturedActive, setIsFeaturedActive] = useState(true);
  const [isLatestActive, setIsLatestActive] = useState(false);

  const handleFeaturedActivation = () => {
    if (isFeaturedActive && !isLatestActive) {
      setIsFeaturedActive(true);
    } else if (!isFeaturedActive && !isLatestActive) {
      setIsFeaturedActive((current) => !current);
    } else {
      setIsFeaturedActive((current) => !current);
      setIsLatestActive((current) => !current);
    }
  };

  const handleLatestActivation = () => {
    if (isLatestActive && !isFeaturedActive) {
      setIsLatestActive(true);
    } else if (!isLatestActive && !isFeaturedActive) {
      setIsLatestActive((current) => !current);
    } else {
      setIsLatestActive((current) => !current);
      setIsFeaturedActive((current) => !current);
    }
  };

  const handleSearchActivation = () => {
    setIsLatestActive(false);
    setIsFeaturedActive(false);
  };

  return (
    <div className="header">
      <Navigation />
      <Link to="/search" onClick={handleSearchActivation}>
        <button className="search-button">Search</button>
      </Link>

      <div className="news-option-container">
        <Link to="/" style={{ textDecoration: "none", color: "#000000" }}>
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
