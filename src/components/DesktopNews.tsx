import "./DesktopNews.scss";

import FeaturedList from "./FeaturedList";
import LatestList from "./LatestList";

const DesktopNews = () => {
  return (
    <div className="desktop-news-page">
      <div className="desktop-news-featured">
        <FeaturedList />
      </div>
      <div className="desktop-news-latest">
        <LatestList />
      </div>
    </div>
  );
};

export default DesktopNews;
