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
          `https://api.nytimes.com/svc/topstories/v2/world.json?api-key=${process.env.REACT_APP_NYTIMES_API_KEY}`
        );

        setArticles(response.data.results);
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
