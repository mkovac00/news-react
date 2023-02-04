import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./CategoryList.scss";

import axios from "axios";

import CardList from "./CardList";
import Loading from "./Loading";

const CategoryList = () => {
  const [articles, setArticles] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { categoryName } = useParams();

  useEffect(() => {
    console.log(categoryName);
    setIsLoading(true);
    const getArticles = async () => {
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=us&category=${categoryName}&pageSize=10&apiKey=${process.env.REACT_APP_NEWSAPI_API_KEY}`
        );

        setArticles(response.data.articles);
        console.log(articles);
      } catch (error) {
        console.log(error);
      }
    };

    getArticles();
    setIsLoading(false);
  }, [categoryName]);

  return (
    <>
      <h2 className="categories-title">
        <span className="categories-title-red">{categoryName}</span> news
      </h2>
      {isLoading && <Loading />}
      {!isLoading && <CardList articles={articles} />}
    </>
  );
};

export default CategoryList;