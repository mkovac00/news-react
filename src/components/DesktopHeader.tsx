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

  return (
    <div className="desktop-header-container">
      <h1 className="desktop-header-title">
        <span className="desktop-header-title-red">My</span>News
      </h1>
      <input
        className="search-button"
        placeholder="Search"
        type="text"
        onKeyDown={updateSearchQuery}
      ></input>
    </div>
  );
};

export default DesktopHeader;
