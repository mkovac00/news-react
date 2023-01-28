import React from "react";
import "./Card.scss";

type CardProps = {
  category: string;
  title: string;
  image: string;
};

const Card = (props: CardProps) => {
  return (
    <div className="card">
      <img className="card-img" src={props.image} alt="article-image" />
      <div className="card-info">
        <h3 className="card-category">{props.category}</h3>
        <p className="card-title">{props.title}</p>
      </div>
    </div>
  );
};

export default Card;
