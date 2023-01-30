import React from "react";
import "./App.scss";

import Header from "./components/Header";
import CardList from "./components/CardList";
import LatestList from "./components/LatestList";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <LatestList />
      {/* <CardList /> */}
    </div>
  );
};

export default App;
