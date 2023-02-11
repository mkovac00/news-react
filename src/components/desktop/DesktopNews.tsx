import "./DesktopNews.scss";

import FeaturedList from "../shared/FeaturedList";
import LatestList from "../shared/LatestList";

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
