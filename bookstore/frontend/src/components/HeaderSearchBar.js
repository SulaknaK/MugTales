import React from "react";
import "../styles/header-search.css";

function HeaderSearchBar() {
  return (
    <div className="search-container">
      <form action="">
        <input type="text" placeholder="Search Books" name="search" />
        <button type="submit">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </form>
    </div>
  );
}

export default HeaderSearchBar;
