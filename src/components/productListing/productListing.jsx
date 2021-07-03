import { useFilter } from "../../context/filterProvider";
import { getFilteredProducts } from "../../utils/filterOperation";
import { ProductCard } from "./ProductCard";
import "./productListing.css";

export const ProductListing = ({ products }) => {
  const { filter } = useFilter();
  const filteredProducts = getFilteredProducts(products, filter);
  return (
    <div className="grid-container">
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
