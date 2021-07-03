import { useReducer } from "react";
import { Filters } from "./components/filters/Filters";
import { Navigation } from "./components/navigation/Navigation";
import { ProductListing } from "./components/productListing/productListing";
import { products } from "./database/products";
import "./App.css";
const initialState = {
  sortBy: "",
  brand: [],
  size: [],
  ideal: "",
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case "SORT_BY":
      return { ...state, sortBy: payload };
    case "IDEAL_FOR":
      return { ...state, ideal: payload };
    case "TOGGLE_BRAND":
      const isBrandFiltered = state.brand.find((item) => item === payload);
      return isBrandFiltered
        ? { ...state, brand: state.brand.filter((item) => item !== payload) }
        : { ...state, brand: state.brand.concat(payload) };
    case "TOGGLE_SIZE":
      const isSizeFiltered = state.size.find((item) => item === payload);
      return isSizeFiltered
        ? { ...state, size: state.size.filter((item) => item !== payload) }
        : { ...state, size: state.size.concat(payload) };
    case "CLEAR_ALL":
      return initialState;
    default:
      return state;
  }
};

const getFilteredProducts = (data, filter) => {
  let products = [...data];
  if (filter.sortBy) {
    if (filter.sortBy === "low-to-high") {
      products.sort((a, b) => a.price - b.price);
    } else if (filter.sortBy === "high-to-low") {
      products.sort((a, b) => b.price - a.price);
    }
  }
  if (filter.ideal) {
    products = products.filter((product) => product.ideal === filter.ideal);
  }
  if (filter.brand.length > 0) {
    products = products.filter((product) =>
      filter.brand.includes(product.brand)
    );
  }
  if (filter.size.length > 0) {
    products = products.filter((product) => {
      return product.size.some((size) => filter.size.includes(size));
    });
  }
  return products;
};

function App() {
  const [filter, dispatch] = useReducer(reducer, initialState);
  const filteredProducts = getFilteredProducts(products, filter);
  return (
    <div className="layout">
      <div className="nav">
        <Navigation />
      </div>
      <div className="filter">
        <Filters filter={filter} dispatch={dispatch} products={products} />
      </div>
      <div className="products">
        <ProductListing products={filteredProducts} />
      </div>
    </div>
  );
}

export default App;
