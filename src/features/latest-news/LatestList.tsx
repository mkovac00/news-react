import { useState, useEffect } from "react";
import { AiOutlineDoubleRight } from "react-icons/ai";
import "./LatestList.scss";

import InfiniteScroll from "react-infinite-scroll-component";

import LatestCard from "./LatestCard";
import Loading from "../../components/Loading";
import { infiniteScrollArticles } from "../../assets/infiniteScrollData";

const { v4: uuidv4 } = require("uuid");

const LatestList = () => {
  const [articles, setArticles] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalResults, setTotalResults] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const getArticles = async () => {
      try {
        // const response = await axios.get(
        //   `https://newsapi.org/v2/everything?q=world&sortBy=publishedAt&pageSize=10&page=1&apiKey=${process.env.REACT_APP_NEWSAPI_API_KEY}`
        // );

        // setArticles(response.data.articles);
        // setTotalResults(response.data.totalResults);

        setTotalResults(infiniteScrollArticles.length);

        for (let i = currentPage; i < currentPage + 10; i++) {
          setArticles((current) => [...current, infiniteScrollArticles[i]]);
        }
        incremenetPage(10);
        console.log(articles);
        console.log(currentPage);
      } catch (error) {
        console.log(error);
      }
    };

    getArticles();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchMoreData = () => {
    if (articles.length >= totalResults) {
      setHasMore(false);
      console.log(articles.length);
      console.log(totalResults);
      return;
    }
    const getArticles = async () => {
      try {
        // const response = await axios.get(
        //   `https://newsapi.org/v2/everything?q=world&sortBy=publishedAt&pageSize=10&page=${currentPage}&apiKey=${process.env.REACT_APP_NEWSAPI_API_KEY}`
        // );

        // setArticles(articles.concat(response.data.articles));

        for (let i = currentPage; i < currentPage + 10; i++) {
          setArticles((current) => [...current, infiniteScrollArticles[i]]);
        }
        incremenetPage(10);
        console.log(articles);
        console.log(currentPage);
      } catch (error) {
        console.log(error);
      }
    };

    getArticles();
  };

  const incremenetPage = (amount: number) => {
    setCurrentPage((currPage) => {
      return currPage + amount;
    });
  };

  return (
    <div className="latest-list__container">
      <div className="latest-list__header">
        <div className="live-circle"></div>
        <h3 className="latest-list__title">Latest news</h3>
      </div>
      <InfiniteScroll
        dataLength={currentPage}
        next={fetchMoreData}
        hasMore={hasMore}
        height={535}
        loader={<Loading />}
        endMessage={
          <p
            style={{
              backgroundColor: "#ffffff",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            You've reached the end.
          </p>
        }
      >
        {articles.map((article) => (
          <LatestCard
            key={uuidv4()}
            time={article.publishedAt}
            title={article.title}
          />
        ))}
      </InfiniteScroll>
      <div className="latest-list__footer">
        <p className="latest-list__footer-text">See all news</p>
        <AiOutlineDoubleRight className="latest-list__footer-icon" />
      </div>
    </div>
  );
};

export default LatestList;
