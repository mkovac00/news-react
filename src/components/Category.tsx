import "./Category.scss";

import { AiFillHome, AiFillStar } from "react-icons/ai";
import { GiDramaMasks } from "react-icons/gi";
import { BsBriefcaseFill } from "react-icons/bs";
import {
  MdScience,
  MdHealthAndSafety,
  MdSportsBasketball,
} from "react-icons/md";
import { RiComputerLine } from "react-icons/ri";

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
