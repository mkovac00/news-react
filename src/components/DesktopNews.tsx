import "./DesktopNews.scss";

import FeaturedList from "./FeaturedList";
import LatestList from "./LatestList";

const DesktopNews = () => {
  return (
    <div className="desktop-news__container">
      <div className="desktop-news__featured">
        <FeaturedList />
      </div>
      <div className="desktop-news__latest">
        <LatestList />
      </div>
    </div>
  );
};

export default DesktopNews;
