import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.scss";

import Header from "./components/Header";
import LatestList from "./components/LatestList";
import FeaturedList from "./components/FeaturedList";
import CategoryList from "./components/CategoryList";
import FavoritesList from "./components/FavoritesList";
import Search from "./components/Search";

const categories = [
  {
    name: "home",
    id: 0,
  },
  {
    name: "entertainment",
    id: 1,
  },
  {
    name: "business",
    id: 2,
  },
  {
    name: "science",
    id: 3,
  },
  {
    name: "health",
    id: 4,
  },
  {
    name: "sports",
    id: 5,
  },
  {
    name: "technology",
    id: 6,
  },
  {
    name: "favorites",
    id: 7,
  },
];

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/category/home" />}></Route>
          <Route path="/latest" element={<LatestList />}></Route>
          <Route path="/search" element={<Search />}></Route>
          <Route
            path="/favorites"
            element={<Navigate to="/category/favorites" />}
          ></Route>
          <Route path="/category/home" element={<FeaturedList />}></Route>
          <Route path="/category/favorites" element={<FavoritesList />}></Route>
          <Route
            path="/category/:categoryName"
            element={<CategoryList />}
          ></Route>
        </Routes>
      </div>
    </Router>
    // <Router>
    //   <div className="App">
    //     <div className="grid-header">
    //       <Header />
    //     </div>
    //     <div className="grid-navigation">
    //     <div className="category-list">
    //         {categories.map((category) => (
    //           <NavLink
    //             to={`/category/${category.name}`}
    //             onClick={toggleMobileMenu}
    //             style={({ isActive }) => (isActive ? activeStyle : undefined)}
    //           >
    //             <Category
    //               key={category.id}
    //               name={
    //                 category.name.charAt(0).toUpperCase() +
    //                 category.name.slice(1)
    //               }
    //             />
    //           </NavLink>
    //         ))}
    //       </div>
    //     </div>
    //     <Routes>
    //       <Route path="/" element={<Navigate to="/category/home" />}></Route>
    //       <Route path="/latest" element={<LatestList />}></Route>
    //       <Route path="/search" element={<Search />}></Route>
    //       <Route
    //         path="/favorites"
    //         element={<Navigate to="/category/favorites" />}
    //       ></Route>
    //       <Route path="/category/home" element={<FeaturedList />}></Route>
    //       <Route path="/category/favorites" element={<FavoritesList />}></Route>
    //       <Route
    //         path="/category/:categoryName"
    //         element={<CategoryList />}
    //       ></Route>
    //     </Routes>
    //   </div>
    // </Router>
  );
};

export default App;
