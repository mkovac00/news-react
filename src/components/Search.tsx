import React, { useState, useEffect } from "react";
import "./Search.scss";

import axios from "axios";

import CardList from "./CardList";
import Loading from "./Loading";

type SearchProps = {
  isActive: boolean;
};

const Search = () => {
  const [searchedArticles, setSearchedArticles] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    setIsLoading(true);
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

  const updateSearchQuery = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      const target = event.target as HTMLInputElement;

      setSearchQuery(target.value);
      target.value = "";
    }
  };

  return (
    <>
      <input
        type="text"
        onKeyDown={updateSearchQuery}
        placeholder="Search news"
      ></input>
      {isLoading && <Loading />}
      {!isLoading && searchedArticles.length > 0 && (
        <CardList articles={searchedArticles} />
      )}
      {!isLoading && searchedArticles.length < 0 && <div>{errorMessage}</div>}
    </>
  );
};

export default Search;
