import products from "../data/products";
import ProductCard from "./ProductCard";

function ProductGrid() {
  return (
    <section className="products">
      <h2>Recent Products</h2>
      <div className="product-grid">
        {products.map(p => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}

export default ProductGrid;
