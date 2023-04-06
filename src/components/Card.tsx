import { useEffect, useState } from "react";
import "./Card.scss";

import { AiOutlineStar, AiFillStar } from "react-icons/ai";

type CardProps = {
  category: string;
  title: string;
  image: string;
  link: string;
};

const Card = (props: CardProps) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const addToFavorites = () => {
    let favoriteArticles = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );

    if (!isFavorite) {
      let article = {
        category: props.category,
        title: props.title,
        urlToImage: props.image,
        linkToArticle: props.link,
      };

      favoriteArticles.push(article);
      setIsFavorite(true);
    } else {
      favoriteArticles.forEach((article: any) => {
        if (article.title === props.title) {
          let articleIndex = favoriteArticles.indexOf(article);
          if (articleIndex > -1) {
            favoriteArticles.splice(articleIndex, 1);
          }
        }
      });
      setIsFavorite(false);
    }

    localStorage.setItem("favorites", JSON.stringify(favoriteArticles));
  };

  useEffect(() => {
    let favoriteArticles = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );

    favoriteArticles.forEach((article: any) => {
      if (article.title === props.title) {
        setIsFavorite(true);
      }
    });
  }, [props.title]);

  return (
    <div className="card">
      <img className="card-img" src={props.image} alt="Article" />
      <div className="card-info">
        {isFavorite && (
          <AiFillStar
            className="favorites-icon favorites-icon__filled"
            onClick={addToFavorites}
          />
        )}
        {!isFavorite && (
          <AiOutlineStar
            className="favorites-icon favorites-icon__empty"
            onClick={addToFavorites}
          />
        )}
        <h3 className="card-category">{props.category}</h3>
        <a
          href={props.link}
          target="_blank"
          rel="noreferrer"
          className="card-title-link"
        >
          <p className="card-title">{props.title}</p>
        </a>
      </div>
    </div>
  );
};

export default Card;
