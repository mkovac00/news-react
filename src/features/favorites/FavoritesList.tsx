import "./FavoritesList.scss";

import CardList from "../../components/CardList";

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
      {favoriteArticles.length <= 0 && (
        <div className="favorites-list__is-empty-text">
          <p>You don't have any saved articles yet!</p>
          <p>Click on a little star inside an article to save it.</p>
        </div>
      )}
      {favoriteArticles.length !== 0 && (
        <CardList
          articles={favoriteArticles}
          listLength={favoriteArticles.length}
        />
      )}
    </>
  );
};

export default FavoritesList;
