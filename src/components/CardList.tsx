import "./CardList.scss";

import Card from "./Card";
import placeholderImage from "../assets/images/placeholder-image.jpg";
import placeholderImage2 from "../assets/images/placeholder-image-2.jpg";
import placeholderImage3 from "../assets/images/placeholder-image-3.jpg";

const { v4: uuidv4 } = require("uuid");

type CardListProps = {
  articles: Array<any>;
  listLength: number;
};

const images = [placeholderImage, placeholderImage2, placeholderImage3];

const getRandomPlaceholderImage = (randomIndex: number) => {
  return images[randomIndex];
};

const CardList = (props: CardListProps) => {
  // Using slice below to limit the featured results to a desired listLength
  return (
    <ul className="card-list">
      {props.articles.slice(0, props.listLength).map((article) => (
        <Card
          key={uuidv4()}
          category={article.section || article.section_name}
          title={article.title || article.abstract}
          image={
            article.urlToImage !== null && article.urlToImage !== undefined
              ? article.urlToImage
              : getRandomPlaceholderImage(
                  Math.floor(Math.random() * images.length)
                )
          }
        />
      ))}
    </ul>
  );
};

export default CardList;
