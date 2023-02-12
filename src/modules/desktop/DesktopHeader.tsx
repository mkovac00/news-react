import React from "react";
import { useNavigate } from "react-router-dom";
import "./DesktopHeader.scss";

const DesktopHeader = () => {
  let navigate = useNavigate();

  const updateSearchQuery = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      const target = event.target as HTMLInputElement;

      if (target.value === "") {
        return;
      }

      navigate(`/search/${target.value}`);
      target.value = "";
    }
  };

  const updateSearchQueryBtn = () => {
    const inputElement = document.querySelector(
      ".desktop-header-search__input"
    );
    const currentQuery = inputElement as HTMLInputElement;

    if (
      currentQuery.value !== "" &&
      currentQuery.value !== null &&
      currentQuery.value !== undefined
    ) {
      navigate(`/search/${currentQuery.value}`);
      currentQuery.value = "";
    }
  };

  return (
    <div className="desktop-header__container">
      <div className="desktop-header__fixed-to-top">
        <p className="desktop-header__fixed-bold-text">
          Make MyNews your homepage
        </p>
        <p className="desktop-header__fixed-text">
          Every day discover what's treding on the internet!
        </p>
        <button className="desktop-header__btn-confirm">GET</button>
        <button className="desktop-header__btn-deny">No, thanks</button>
      </div>
      <div className="desktop-header__hero">
        <h1 className="desktop-header__title">
          <span className="desktop-header__title-important">My</span>News
        </h1>
        <div className="desktop-header-search__submit">
          <input
            className="desktop-header-search__input"
            placeholder="Search"
            type="text"
            onKeyDown={updateSearchQuery}
          ></input>
          <button
            className="desktop-header-search__button"
            onClick={updateSearchQueryBtn}
          >
            SEARCH
          </button>
        </div>
      </div>
    </div>
  );
};

export default DesktopHeader;
