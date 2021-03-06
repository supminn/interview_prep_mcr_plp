import React from "react";
import { useFilter } from "../../context/filterProvider";
import { distinct } from "../../utils/arrayOperations";
import "./filter.css";

export const Filters = ({ products }) => {
  const { filter, dispatch } = useFilter();
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
              checked={filter.brand.includes(item)}
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
              checked={filter.size.includes(item)}
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
            type="checkbox"
            name="ideal"
            checked={filter.ideal.includes("men")}
            onChange={() => dispatch({ type: "IDEAL_FOR", payload: "men" })}
          />
          Men
        </label>
        <label>
          <input
            type="checkbox"
            name="ideal"
            checked={filter.ideal.includes("women")}
            onChange={() => dispatch({ type: "IDEAL_FOR", payload: "women" })}
          />
          Women
        </label>
      </div>
    </div>
  );
};
