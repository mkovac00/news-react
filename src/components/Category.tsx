import React from "react";
import "./Category.scss";

type CategoryProps = {
  name: string;
};

const Category = (props: CategoryProps) => {
  return (
    <div className="category-container">
      <p className="category-name">{props.name}</p>
    </div>
  );
};

export default Category;
