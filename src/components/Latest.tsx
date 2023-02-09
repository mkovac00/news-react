import "./Latest.scss";

type LatestProps = {
  time: string;
  title: string;
};

const Latest = (props: LatestProps) => {
  return (
    <div className="latest-card">
      <p className="latest-card-time">{props.time}</p>
      <p className="latest-card-title">{props.title}</p>
    </div>
  );
};

export default Latest;
