import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";

import Header from "./components/Header";
import LatestList from "./components/LatestList";
import FeaturedList from "./components/FeaturedList";
import CategoryList from "./components/CategoryList";
import Search from "./components/Search";

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<FeaturedList />}></Route>
          <Route path="/latest" element={<LatestList />}></Route>
          <Route path="/search" element={<Search />}></Route>
          <Route
            path="/category/:categoryName"
            element={<CategoryList />}
          ></Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
