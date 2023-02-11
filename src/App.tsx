import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Media from "react-media";
import "./App.scss";

import MobileHeader from "./components/mobile/MobileHeader";
import LatestList from "./components/shared/LatestList";
import FeaturedList from "./components/shared/FeaturedList";
import CategoryList from "./components/shared/CategoryList";
import FavoritesList from "./components/shared/FavoritesList";
import Search from "./components/shared/Search";
import DesktopHeader from "./components/desktop/DesktopHeader";
import DesktopNav from "./components/desktop/DesktopNav";
import DesktopNews from "./components/desktop/DesktopNews";

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
                  <MobileHeader />
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
    </>
  );
};

export default App;
