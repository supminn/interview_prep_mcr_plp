import { Filters } from "./components/filters/Filters";
import { Navigation } from "./components/navigation/Navigation";
import { ProductListing } from "./components/productListing/productListing";
import { products } from "./database/products";
import "./App.css";

function App() {
  return (
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
