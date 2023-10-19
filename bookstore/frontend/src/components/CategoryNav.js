import React from "react";
import { Link } from "react-router-dom";
import { CategoryList } from "../Data/categories.js";
import { useParams } from "react-router-dom";
import "../styles/category-side-nav.css";

function CategoryNav() {
    const { name } = useParams();

    return (
        <div className="sidebar">
        <ul className="sidebar-list">
            {CategoryList.categories.map((category) => (
            <li key={category.categoryId}>
                <Link
                to={`/category/${category.name}`}
                className={name === category.name? "sidebar-buttons sidebar-active-button": "sidebar-buttons"}
                >
                {category.name}
                </Link>
            </li>
            ))}
        </ul>
        </div>
    );
}

export default CategoryNav;
