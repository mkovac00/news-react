import React from "react";
import "./DesktopHeader.scss";

const DesktopHeader = () => {
  const updateSearchQuery = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      const target = event.target as HTMLInputElement;
      localStorage.setItem("searchQuery", target.value);

      window.location.href = "/search";
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
      localStorage.setItem("searchQuery", currentQuery.value);
      window.location.href = "/search";
      currentQuery.value = "";
    }
  };

  return (
    <div className="desktop-header-container">
      <h1 className="desktop-header-title">
        <span className="desktop-header-title-red">My</span>News
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
  );
};

export default DesktopHeader;
