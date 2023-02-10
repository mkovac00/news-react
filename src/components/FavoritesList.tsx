import "./FavoritesList.scss";

import CardList from "./CardList";

const FavoritesList = () => {
  const favoriteArticles = JSON.parse(
    localStorage.getItem("favorites") || "[]"
  );

  return (
    <>
      <h2 className="favorites-list__section-title">
        Your
        <span className="favorites-list__section-name"> saved </span> articles
      </h2>
      <CardList articles={favoriteArticles} />
    </>
  );
};

export default FavoritesList;
