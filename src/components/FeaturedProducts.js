import products from "../data/products";

function FeaturedProducts() {
  return (
    <section className="featured-products">
      <h2 className="section-title">FEATURED PRODUCTS</h2>

      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />

            <h4>{product.name}</h4>

            <div className="price">
              ₹{product.price}
              <span>₹{product.oldPrice}</span>
            </div>

            <div className="rating">
              ⭐ ⭐ ⭐ ⭐ ☆ <span>(99)</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturedProducts;
