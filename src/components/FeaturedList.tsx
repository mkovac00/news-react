import React, { useState, useEffect } from "react";
import "./FeaturedList.scss";

import axios from "axios";

import CardList from "./CardList";
import Loading from "./Loading";

type FeaturedListProps = {
  isActive: boolean;
};

const FeaturedList = () => {
  const [articles, setArticles] = useState<any[]>([]);
  const [category, setCategory] = useState("everything");
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    setIsLoading(true);
    const getArticles = async () => {
      try {
        const response = await axios.get(
          `https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${process.env.REACT_APP_NYTIMES_API_KEY}`
        );

        setArticles(response.data.results);
      } catch (error) {
        setErrorMessage(error as string);
      }
    };

    getArticles();
    setIsLoading(false);
  }, []);

  return (
    <>
      {isLoading && <Loading />}
      {!isLoading && <CardList articles={articles} />}
    </>
  );
};

export default FeaturedList;
