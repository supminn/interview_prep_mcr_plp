import React from "react";
import logo from "../../assets/logo.png";
import "./navigation.css";

export const Navigation = () => {
  return (
    <nav className="nav-container">
      <div className="flex-container">
        <img className="logo" src={logo} alt="flipkart logo" />
        <div className="search-container">
          <input
            type="text"
            className="text-input"
            placeholder="Search for products, brands and more"
          />
          <i className="fas fa-search text-blue"></i>
        </div>
        <button className="btn-login">Login</button>
        <span className="btn-secondary">More</span>
        <span className="btn-secondary">
          <i className="fa fa-shopping-cart"></i>Cart
        </span>
      </div>
    </nav>
  );
};
