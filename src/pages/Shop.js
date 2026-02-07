import { useState } from "react";
import products from "../data/products";
import ProductCard from "../components/ProductCard";

function Shop() {
  const PRODUCTS_PER_PAGE = 8; // ✅ FIXED
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(
    products.length / PRODUCTS_PER_PAGE
  );

  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const currentProducts = products.slice(
    startIndex,
    startIndex + PRODUCTS_PER_PAGE
  );

  return (
    <div className="shop-page">
      <h2 style={{ padding: "20px" }}>Shop</h2>

      <div className="products-grid">
        {currentProducts.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>

      <div className="pagination">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((p) => p - 1)}
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
          onClick={() => setCurrentPage((p) => p + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Shop;
