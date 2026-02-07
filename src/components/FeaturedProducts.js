import products from "../data/products";
import ProductCard from "./ProductCard";

function FeaturedProducts() {
  const featured = products.slice(0, 8);

  return (
    <section className="featured-products">
      <h2 className="section-title">FEATURED PRODUCTS</h2>

      <div className="products-grid">
        {featured.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </section>
  );
}

export default FeaturedProducts;
