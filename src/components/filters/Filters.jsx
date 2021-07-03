import React from "react";
import { distinct } from "../../utils/arrayOperations";
import "./filter.css";

export const Filters = ({ filter, dispatch, products }) => {
  const brands = products.map((item) => item.brand).filter(distinct);
  const sizes = ["xs", "s", "m", "l", "xl", "xxl"];
  return (
    <div className="filters">
      <div className="flex-header">
        <h3>Filters</h3>
        <button
          className="btn-clear"
          onClick={() => dispatch({ type: "CLEAR_ALL" })}
        >
          Clear all
        </button>
      </div>
      <div className="flex-filter">
        <p className="filter-desc">Sort by price</p>
        <label>
          <input
            type="radio"
            name="price"
            checked={filter.sortBy === "low-to-high"}
            onChange={() =>
              dispatch({ type: "SORT_BY", payload: "low-to-high" })
            }
          />
          Low to High
        </label>
        <label>
          <input
            type="radio"
            name="price"
            checked={filter.sortBy === "high-to-low"}
            onChange={() =>
              dispatch({ type: "SORT_BY", payload: "high-to-low" })
            }
          />
          High to Low
        </label>
      </div>
      <div className="flex-filter">
        <p className="filter-desc">Brands</p>
        {brands.map((item, idx) => (
          <label key={idx}>
            <input
              type="checkbox"
              checked={filter.brand.some((value) => value === item)}
              onChange={() => dispatch({ type: "TOGGLE_BRAND", payload: item })}
            />
            {item}
          </label>
        ))}
      </div>
      <div className="flex-filter">
        <p className="filter-desc">Size</p>
        {sizes.map((item, idx) => (
          <label key={idx}>
            <input
              type="checkbox"
              checked={filter.size.some((value) => value === item)}
              onChange={() => dispatch({ type: "TOGGLE_SIZE", payload: item })}
            />
            {item}
          </label>
        ))}
      </div>
      <div className="flex-filter">
        <p className="filter-desc">Ideal for</p>
        <label>
          <input
            type="radio"
            name="ideal"
            checked={filter.ideal === "men"}
            onChange={() => dispatch({ type: "IDEAL_FOR", payload: "men" })}
          />
          Men
        </label>
        <label>
          <input
            type="radio"
            name="ideal"
            checked={filter.ideal === "women"}
            onChange={() => dispatch({ type: "IDEAL_FOR", payload: "women" })}
          />
          Women
        </label>
      </div>
    </div>
  );
};
