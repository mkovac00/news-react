import "./DesktopNews.scss";

import FeaturedList from "../../features/featured-news/FeaturedList";
import LatestList from "../../features/latest-news/LatestList";
import AdList from "../../features/ads/AdList";

import { adList } from "../../assets/adList";

type DesktopNewsProps = {
  isTabletSize: boolean;
};

const DesktopNews = (props: DesktopNewsProps) => {
  return (
    <div className="desktop-news__container">
      <div className="desktop-news__featured">
        <FeaturedList />
      </div>
      <div className="desktop-news__latest">
        <LatestList />
        {props.isTabletSize && <AdList ads={adList} listLength={10} />}
        {!props.isTabletSize && <AdList ads={adList} listLength={4} />}
        {/* <AdList ads={adList} listLength={adList.length} /> */}
      </div>
    </div>
  );
};

export default DesktopNews;
