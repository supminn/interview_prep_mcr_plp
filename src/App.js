import { Filters } from "./components/filters/Filters";
import { Navigation } from "./components/navigation/Navigation";
import { ProductListing } from "./components/productListing/productListing";
// import { products } from "./database/products";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";

function App() {
  let [products, setProducts] = useState(null);
  let [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get("products.json");
        setProducts(data.products);
      } catch (err) {
        console.error(err);
      } finally {
        setShowLoader(false);
      }
    })();
  }, []);
  return showLoader ? (
    <div className="position-center">
      <Loader type="Oval" color="#2874f0" height={80} width={80} />
    </div>
  ) : (
    <div className="layout">
      <div className="nav">
        <Navigation />
      </div>
      <div className="filter">
        <Filters products={products} />
      </div>
      <div className="products">
        <ProductListing products={products} />
      </div>
    </div>
  );
}

export default App;
