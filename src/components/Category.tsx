import React from "react";
import "./Category.scss";

import { AiFillHome, AiFillStar } from "react-icons/ai"; // home, favorites
import { GiDramaMasks } from "react-icons/gi"; // entertainment
import { BsBriefcaseFill } from "react-icons/bs"; // business
import {
  MdScience,
  MdHealthAndSafety,
  MdSportsBasketball,
} from "react-icons/md"; // science, health, sports
import { RiComputerLine } from "react-icons/ri"; // technology

type CategoryProps = {
  name: string;
  size: number;
};

const Category = (props: CategoryProps) => {
  let categoryIcon;
  switch (props.name) {
    case "Home":
      categoryIcon = <AiFillHome size={props.size} className="category-icon" />;
      break;
    case "Entertainment":
      categoryIcon = (
        <GiDramaMasks size={props.size} className="category-icon" />
      );
      break;
    case "Business":
      categoryIcon = (
        <BsBriefcaseFill size={props.size} className="category-icon" />
      );
      break;
    case "Science":
      categoryIcon = <MdScience size={props.size} className="category-icon" />;
      break;
    case "Health":
      categoryIcon = (
        <MdHealthAndSafety size={props.size} className="category-icon" />
      );
      break;
    case "Sports":
      categoryIcon = (
        <MdSportsBasketball size={props.size} className="category-icon" />
      );
      break;
    case "Technology":
      categoryIcon = (
        <RiComputerLine size={props.size} className="category-icon" />
      );
      break;
    case "Favorites":
      categoryIcon = <AiFillStar size={props.size} className="category-icon" />;
      break;
  }

  return (
    <div className="category-container">
      {categoryIcon}
      {props.name}
    </div>
  );
};

export default Category;
