import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";

import Header from "./components/Header";
import CardList from "./components/CardList";
import LatestList from "./components/LatestList";

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/latest" element={<LatestList />}></Route>
          <Route path="/featured" element={<CardList />}></Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
