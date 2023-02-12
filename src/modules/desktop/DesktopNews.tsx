import "./DesktopNews.scss";

import FeaturedList from "../../features/featured-news/FeaturedList";
import LatestList from "../../features/latest-news/LatestList";
import AdList from "../../features/ads/AdList";

import { adList } from "../../assets/adList";

const DesktopNews = () => {
  return (
    <div className="desktop-news__container">
      <div className="desktop-news__featured">
        <FeaturedList />
      </div>
      <div className="desktop-news__latest">
        <LatestList />
        <AdList ads={adList} listLength={adList.length} />
      </div>
    </div>
  );
};

export default DesktopNews;
