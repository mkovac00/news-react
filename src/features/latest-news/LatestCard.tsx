import "./LatestCard.scss";

type LatestProps = {
  time: string;
  title: string;
};

const Latest = (props: LatestProps) => {
  return (
    <div className="latest-card">
      <p className="latest-card__time">{props.time}</p>
      <p className="latest-card__title">{props.title}</p>
    </div>
  );
};

export default Latest;
