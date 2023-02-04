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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const getArticles = async () => {
      try {
        const response = await axios.get(
          `https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${process.env.REACT_APP_NYTIMES_API_KEY}`
        );

        setArticles(response.data.results);
      } catch (error) {
        console.log(error);
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
