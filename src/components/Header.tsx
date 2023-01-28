import React, { useState } from "react";
import "./Header.scss";

import Navigation from "./Navigation";

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
      <input placeholder="Search news"></input>
      <div className="news-option-container">
        <h3
          onClick={handleFeaturedActivation}
          className={`news-option ${
            isFeaturedActive ? "news-option-active" : ""
          }`}
        >
          Featured
        </h3>
        <h3
          onClick={handleLatestActivation}
          className={`news-option ${
            isLatestActive ? "news-option-active" : ""
          }`}
        >
          Latest
        </h3>
      </div>
    </div>
  );
};

export default Header;
