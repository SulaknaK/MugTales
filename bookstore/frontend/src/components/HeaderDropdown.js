import React from "react";
import { Link } from "react-router-dom";
import { CategoryList } from "../Data/categories.js";
import "../styles/header-dropdown.css";

function HeaderDropdown() {
  return (
    <div className="dropdown">
      <button className="dropbtnarrow">
        Categories
        <i className="fa fa-caret-down"></i>
      </button>
      <div className="dropdown-content">
        <ul className="dropdown-list">
          {CategoryList.categories.map((category) => (
            <li key={category.categoryId}>
              <Link to={`/category/${category.name}`} className="dropdown-btn">
                {category.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default HeaderDropdown;
