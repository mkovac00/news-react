import React from "react";
import "./CardList.scss";

import Card from "./Card";
import placeholderImage from "../placeholder-image.jpg";

const { v4: uuidv4 } = require("uuid");

interface CardListProps {
  articles: Array<any>;
}

const CardList = (props: CardListProps) => {
  // Using slice below to limit the featured results to only ten articles
  return (
    <ul>
      {props.articles.slice(0, 10).map((article) => (
        <Card
          key={uuidv4()}
          category={article.section || article.section_name}
          title={article.title || article.abstract}
          // article.media[0]["media-metadata"][1].url
          image={placeholderImage}
        />
      ))}
    </ul>
  );
};

export default CardList;
