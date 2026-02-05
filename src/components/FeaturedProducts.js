import products from "../data/products";
import ProductCard from "./ProductCard";

function FeaturedProducts() {
  return (
    <section className="featured-products">
      <h2 className="section-title">FEATURED PRODUCTS</h2>

      <div className="products-grid">
        {products.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </section>
  );
}

export default FeaturedProducts;
