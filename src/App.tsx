import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Media from "react-media";
import "./App.scss";

import Header from "./components/Header";
import LatestList from "./components/LatestList";
import FeaturedList from "./components/FeaturedList";
import CategoryList from "./components/CategoryList";
import FavoritesList from "./components/FavoritesList";
import Search from "./components/Search";
import DesktopFixed from "./components/DesktopFixed";
import DesktopHeader from "./components/DesktopHeader";
import DesktopNav from "./components/DesktopNav";
import DesktopNews from "./components/DesktopNews";

const App: React.FC = () => {
  return (
    <>
      <Media
        queries={{
          mobile: "(max-width: 480px)",
          tablet: "(max-width: 1024px)",
          desktop: "(min-width: 1025px)",
        }}
      >
        {(matches) => (
          <>
            {(matches.tablet || matches.mobile) && (
              <Router>
                <div className="App-mobile">
                  <Header />
                  <Routes>
                    <Route
                      path="/"
                      element={<Navigate to="/category/home" />}
                    ></Route>
                    <Route path="/latest" element={<LatestList />}></Route>
                    <Route path="/search" element={<Search />}></Route>
                    <Route
                      path="/favorites"
                      element={<Navigate to="/category/favorites" />}
                    ></Route>
                    <Route
                      path="/category/home"
                      element={<FeaturedList />}
                    ></Route>
                    <Route
                      path="/category/favorites"
                      element={<FavoritesList />}
                    ></Route>
                    <Route
                      path="/category/:categoryName"
                      element={<CategoryList />}
                    ></Route>
                  </Routes>
                </div>
              </Router>
            )}
            {matches.desktop && (
              <Router>
                <div className="App-desktop">
                  <div className="desktop-header">
                    <DesktopFixed />
                    <DesktopHeader />
                  </div>
                  <div className="desktop-navigation">
                    <DesktopNav />
                  </div>
                  <div className="desktop-news">
                    <Routes>
                      <Route
                        path="/"
                        element={<Navigate to="/category/home" />}
                      ></Route>
                      <Route path="/latest" element={<LatestList />}></Route>
                      <Route path="/search" element={<Search />}></Route>
                      <Route
                        path="/favorites"
                        element={<Navigate to="/category/favorites" />}
                      ></Route>
                      <Route
                        path="/category/home"
                        element={<DesktopNews />}
                      ></Route>
                      <Route
                        path="/category/favorites"
                        element={<FavoritesList />}
                      ></Route>
                      <Route
                        path="/category/:categoryName"
                        element={<CategoryList />}
                      ></Route>
                    </Routes>
                  </div>
                </div>
              </Router>
            )}
          </>
        )}
      </Media>

      {/* <Router>
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
    </Router> */}
    </>
  );
};

export default App;
