import "./DesktopNews.scss";

import FeaturedList from "../../features/featured-news/FeaturedList";
import LatestList from "../../features/latest-news/LatestList";
import AdsList from "../../features/ads/AdsList";

import { adList } from "../../assets/adList";

const DesktopNews = () => {
  return (
    <div className="desktop-news__container">
      <div className="desktop-news__featured">
        <FeaturedList />
      </div>
      <div className="desktop-news__latest">
        <LatestList />
        <AdsList ads={adList} listLength={adList.length} />
      </div>
    </div>
  );
};

export default DesktopNews;
