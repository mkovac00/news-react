import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Media from "react-media";
import "./App.scss";

import MobileHeader from "./modules/mobile/MobileHeader";
import LatestList from "./features/latest-news/LatestList";
import FeaturedList from "./features/featured-news/FeaturedList";
import CategoryList from "./components/CategoryList";
import FavoritesList from "./features/favorites/FavoritesList";
import Search from "./features/search/Search";
import DesktopHeader from "./modules/desktop/DesktopHeader";
import DesktopNav from "./modules/desktop/DesktopNav";
import DesktopNews from "./modules/desktop/DesktopNews";

const App: React.FC = () => {
  return (
    <>
      <Media
        queries={{
          small: "(max-width: 1023px)",
          medium: "(min-width: 1024px) and (max-width: 1449px)",
          large: "(min-width: 1450px)",
        }}
      >
        {(matches) => (
          <>
            {matches.small && (
              <Router>
                <div className="App-mobile">
                  <MobileHeader />
                  <Routes>
                    <Route
                      path="/"
                      element={<Navigate to="/category/home" />}
                    ></Route>
                    <Route path="/latest" element={<LatestList />}></Route>
                    <Route
                      path="/search/:searchInput"
                      element={<Search />}
                    ></Route>
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
            {matches.medium && (
              <Router>
                <div className="App-desktop tablettttt">
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
                      <Route
                        path="/search/:searchInput"
                        element={<Search />}
                      ></Route>
                      <Route
                        path="/favorites"
                        element={<Navigate to="/category/favorites" />}
                      ></Route>
                      <Route
                        path="/category/home"
                        element={<DesktopNews isTabletSize={true} />}
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
            {matches.large && (
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
                      <Route
                        path="/search/:searchInput"
                        element={<Search />}
                      ></Route>
                      <Route
                        path="/favorites"
                        element={<Navigate to="/category/favorites" />}
                      ></Route>
                      <Route
                        path="/category/home"
                        element={<DesktopNews isTabletSize={false} />}
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
