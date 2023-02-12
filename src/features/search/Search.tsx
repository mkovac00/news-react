import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Search.scss";

import axios from "axios";

import CardList from "../../components/CardList";
import Loading from "../../components/Loading";

const Search = () => {
  const [searchedArticles, setSearchedArticles] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const { searchInput } = useParams();

  useEffect(() => {
    setIsLoading(true);

    const getArticles = async () => {
      try {
        const response = await axios.get(
          `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchInput}&api-key=${process.env.REACT_APP_NYTIMES_API_KEY}`
        );

        if (searchInput !== "") {
          setSearchedArticles(response.data.response.docs);
        }
      } catch (error) {
        setErrorMessage(error as string);
      }
    };

    getArticles();
    setIsLoading(false);
  }, [searchInput]);

  return (
    <>
      <h2 className="search__section-title">Searched articles</h2>
      {isLoading && <Loading />}
      {!isLoading && searchedArticles.length > 0 && (
        <CardList articles={searchedArticles} listLength={12} />
      )}
      {!isLoading && searchedArticles.length < 0 && <div>{errorMessage}</div>}
    </>
  );
};

export default Search;
