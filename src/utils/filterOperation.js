export const getFilteredProducts = (data, filter) => {
  let products = [...data];
  if (filter.sortBy) {
    if (filter.sortBy === "low-to-high") {
      products.sort((a, b) => a.price - b.price);
    } else if (filter.sortBy === "high-to-low") {
      products.sort((a, b) => b.price - a.price);
    }
  }
  if (filter.ideal.length > 0) {
    products = products.filter((product) =>
      filter.ideal.includes(product.ideal)
    );
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
