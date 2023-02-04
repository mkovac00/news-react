import React from "react";
import { Link } from "react-router-dom";
import "./Category.scss";

type CategoryProps = {
  name: string;
};

const toggleMobileMenu = () => {
  const mobileMenu = document.querySelector(".wrapper");
  const newsOptionContainer = document.querySelector(".news-option");

  mobileMenu?.classList.toggle("active");
  newsOptionContainer?.classList.remove("news-option-active");
};

const Category = (props: CategoryProps) => {
  return (
    <Link to={`/category/${props.name}`} onClick={toggleMobileMenu}>
      <div className="category-container">
        <p className="category-name">{props.name}</p>
      </div>
    </Link>
  );
};

export default Category;
