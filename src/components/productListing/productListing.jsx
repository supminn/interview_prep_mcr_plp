import { products } from "../../database/products";
import { ProductCard } from "./ProductCard";
import "./productListing.css";

export const ProductListing = () => {
  return (
    <div className="grid-container">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
