import React from "react";
import "./Category.scss";

type CategoryProps = {
  name: string;
};

const Category = (props: CategoryProps) => {
  return <div className="category-container">{props.name}</div>;
};

export default Category;
