import React from "react";
import "./FavoritesList.scss";

import CardList from "./CardList";

const FavoritesList = () => {
  const favoriteArticles = JSON.parse(
    localStorage.getItem("favorites") || "[]"
  );

  return (
    <>
      <h2 className="favorites-title">
        Your
        <span className="favorites-title-red"> saved </span> articles
      </h2>
      <CardList articles={favoriteArticles} />
    </>
  );
};

export default FavoritesList;
