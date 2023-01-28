import React, { useState, useEffect } from "react";
import "./CardList.scss";

import Card from "./Card";

interface CardListProps {}

const CardList: React.FC<CardListProps> = ({}) => {
  const [articles, setArticles] = useState<any[]>([]);
  const [category, setCategory] = useState("everything");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getArticles = async () => {
      try {
        const response = await fetch(
          `https://api.nytimes.com/svc/topstories/v2/world.json?api-key=${process.env.REACT_APP_NYTIMES_API_KEY}`
        );

        const fetchedArticles = await response.json();
        setArticles(fetchedArticles.results);
        console.log(fetchedArticles.results);
      } catch (error) {
        console.log(error);
      }
    };

    getArticles();
  }, []);

  return (
    <ul>
      {articles.map((article) => (
        <Card
          key={article.short_url}
          category={article.section}
          title={article.title}
          image={article.multimedia[0].url}
        />
      ))}
    </ul>
  );
};

export default CardList;
