import { NavLink } from "react-router-dom";
import "./DesktopNav.scss";

import Category from "../../components/Category";
import { categories } from "../../assets/categories";

const activeStyle = {
  backgroundColor: "white",
  boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
  color: "#BB1E1E",
};

const DesktopNav = () => {
  return (
    <div className="desktop-nav__category-list">
      {categories.map((category) => (
        <NavLink
          to={`/category/${category.name}`}
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          key={category.id}
        >
          <Category
            key={category.id}
            name={
              category.name.charAt(0).toUpperCase() + category.name.slice(1)
            }
            size={30}
          />
        </NavLink>
      ))}
    </div>
  );
};

export default DesktopNav;
