import "./DesktopNews.scss";

import FeaturedList from "../shared/FeaturedList";
import LatestList from "../shared/LatestList";
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
