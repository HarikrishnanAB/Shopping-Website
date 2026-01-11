import { useState } from "react";
import products from "../data/products";

const PRODUCTS_PER_PAGE = 6;

function Shop() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(products.length / PRODUCTS_PER_PAGE);

  const start = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const currentProducts = products.slice(start, start + PRODUCTS_PER_PAGE);

  return (
    <div className="shop-page">
      <h2 className="section-title">SHOP PRODUCTS</h2>

      <div className="products-grid">
        {currentProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h4>{product.name}</h4>

            <div className="price">
              ₹{product.price}
              <span>₹{product.oldPrice}</span>
            </div>

            <div className="rating">⭐ ⭐ ⭐ ⭐ ☆ (99)</div>
          </div>
        ))}
      </div>

      {/* PAGINATION */}
      <div className="pagination">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          Previous
        </button>

        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            className={currentPage === i + 1 ? "active" : ""}
            onClick={() => setCurrentPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}

        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Shop;
