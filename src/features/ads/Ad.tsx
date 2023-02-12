import "./Ad.scss";

type AdProps = {
  category: string;
  title: string;
  image: string;
};

const Ad = (props: AdProps) => {
  return (
    <div className="ad-card__container">
      <div className="ad-card__flag">AD</div>
      <img className="ad-card__img" src={props.image} alt="Advertisement" />
      <div className="ad-card__info">
        <h3 className="ad-card__category">{props.category}</h3>
        <p className="ad-card__title">{props.title}</p>
      </div>
    </div>
  );
};

export default Ad;
