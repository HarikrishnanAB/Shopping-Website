import ProductCard from "./ProductCard";
import products from "../data/products";

function ProductList() {
  return (
    <section className="product-section">
      <h2>Featured Products</h2>
      <div className="product-grid">
        {products.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </section>
  );
}

export default ProductList;

