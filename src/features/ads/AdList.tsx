import "./AdList.scss";

import Ad from "./Ad";

const { v4: uuidv4 } = require("uuid");

type AdListProps = {
  ads: Array<any>;
  listLength: number;
};

const AdsList = (props: AdListProps) => {
  return (
    <>
      {console.log(props.listLength)}
      {console.log(props.ads.slice(0, props.listLength))}
      <div className="ads-list__container">
        {props.ads.slice(0, props.listLength).map((ad) => (
          <Ad
            key={uuidv4()}
            category={ad.category}
            title={ad.title}
            image={ad.image}
          />
        ))}
      </div>
    </>
  );
};

export default AdsList;
