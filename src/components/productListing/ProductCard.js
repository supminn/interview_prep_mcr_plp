import React from "react";
import "./productCard.css";

export const ProductCard = ({ product }) => {
  return (
    <div className="card">
      <img src={product.image} alt={product.name} className="image" />
      <div className="description">
        <em>{product.brand}</em>
        <span>{product.name}</span>
        <b>₹{product.price}</b>
        <span> Size: {product.size.join(", ")}</span>
      </div>
    </div>
  );
};
