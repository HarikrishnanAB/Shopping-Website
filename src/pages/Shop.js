import products from "../data/products";
import ProductCard from "../components/ProductCard";

function Shop() {
  return (
    <div className="shop-page">
      <h2 className="section-title">SHOP</h2>

      <div className="products-grid">
        {products.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
}

export default Shop;
