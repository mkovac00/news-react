import React, { useState, useEffect } from "react";
import "./CardList.scss";

import Card from "./Card";
import axios from "axios";

interface CardListProps {}

const CardList: React.FC<CardListProps> = ({}) => {
  const [articles, setArticles] = useState<any[]>([]);
  const [category, setCategory] = useState("everything");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getArticles = async () => {
      try {
        const response = await axios.get(
          `https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${process.env.REACT_APP_NYTIMES_API_KEY}`
        );

        // console.log(response);
        setArticles(response.data.results);
      } catch (error) {
        console.log(error);
      }
    };

    getArticles();
  }, []);

  // Using slice below to limit the featured results to only ten articles
  return (
    <ul>
      {articles.slice(0, 10).map((article) => (
        <Card
          key={article.id}
          category={article.section}
          title={article.title}
          image={article.media[0]["media-metadata"][1].url}
        />
      ))}
    </ul>
  );
};

export default CardList;
