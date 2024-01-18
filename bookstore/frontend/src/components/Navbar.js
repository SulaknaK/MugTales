import React from "react";
import { Link } from "react-router-dom";
import HeaderDropdown from "./HeaderDropdown";
import HeaderSearchBar from "./HeaderSearchBar";
import logo from '../assets/site-images/logo.png';
import "../styles/navbar.css";
import { CartState } from "../context/Context.js";

function Navbar() {
  const{state:{cart}} = CartState();
  return (
    <div className="header">
      <div className="topnav clearfix">
        <ul className="nav-left-header">
          <li className="nav-list">
            <Link to="/">
              <img
                className="logo"
                src={logo}
                alt="Logo"
              ></img>
            </Link>
          </li>
          <li className="nav-list">
            <Link to="/" className="logo-text">
              MugTales
            </Link>
          </li>
          <li className="nav-list">
            <HeaderDropdown></HeaderDropdown>
          </li>
        </ul>
        <ul className="nav-right-header">
          <li className="nav-list">
            <HeaderSearchBar></HeaderSearchBar>
          </li>
          <li className="nav-list">
            <Link to="/cart">
              <div className="cart-container">
                <i className="fa-solid fa-cart-shopping cart-icon"></i>
                <div className="cart-number">{cart.length}</div>
              </div>
            </Link>
          </li>
          <li className="nav-list">
            <Link to="/">
              <button className="user-button">
                <i className="fa-solid fa-user"></i> Hi Sulakna
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
