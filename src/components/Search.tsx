import React, { useState, useEffect } from "react";
import "./Search.scss";

import axios from "axios";

import CardList from "./CardList";
import Loading from "./Loading";

const Search = () => {
  const [searchedArticles, setSearchedArticles] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [searchQuery, setSearchQuery] = useState<any | null>(null);

  useEffect(() => {
    setIsLoading(true);
    setSearchQuery(localStorage.getItem("searchQuery"));

    const getArticles = async () => {
      try {
        const response = await axios.get(
          `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchQuery}&api-key=${process.env.REACT_APP_NYTIMES_API_KEY}`
        );

        if (searchQuery !== "") {
          setSearchedArticles(response.data.response.docs);
        }
      } catch (error) {
        setErrorMessage(error as string);
      }
    };

    getArticles();
    setIsLoading(false);
  }, [searchQuery]);

  return (
    <>
      <h2 className="search-title">Searched articles</h2>
      {isLoading && <Loading />}
      {!isLoading && searchedArticles.length > 0 && (
        <CardList articles={searchedArticles} />
      )}
      {!isLoading && searchedArticles.length < 0 && <div>{errorMessage}</div>}
    </>
  );
};

export default Search;
