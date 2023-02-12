import { useState, useEffect } from "react";
import "./FeaturedList.scss";

import axios from "axios";

import CardList from "../../components/CardList";
import Loading from "../../components/Loading";

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
      <h2 className="featured-list__title">News</h2>
      {isLoading && <Loading />}
      {!isLoading && <CardList articles={articles} listLength={12} />}
    </>
  );
};

export default FeaturedList;
