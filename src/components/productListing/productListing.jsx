import { ProductCard } from "./ProductCard";
import "./productListing.css";

export const ProductListing = ({ products }) => {
  return (
    <div className="grid-container">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
