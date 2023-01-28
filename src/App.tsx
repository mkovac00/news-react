import React from "react";
import "./App.scss";

import Header from "./components/Header";
import CardList from "./components/CardList";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <CardList />
    </div>
  );
};

export default App;
