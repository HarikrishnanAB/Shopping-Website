import { useState } from "react";
import { useLocation } from "react-router-dom";
import products from "../data/products";
import ProductCard from "../components/ProductCard";

function Shop() {
  const PRODUCTS_PER_PAGE = 8;
  const [currentPage, setCurrentPage] = useState(1);

  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get("search");

  // 🔍 FILTER PRODUCTS
  const filteredProducts = searchQuery
    ? products.filter((product) =>
        `${product.name} ${product.category} ${product.brand}`
          .toLowerCase()
          .includes(searchQuery.toLowerCase())
      )
    : products;

  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);

  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const currentProducts = filteredProducts.slice(
    startIndex,
    startIndex + PRODUCTS_PER_PAGE
  );

  return (
    <div className="shop-page">
      <h2 style={{ padding: "20px" }}>
        {searchQuery
          ? `Search results for "${searchQuery}"`
          : "Shop"}
      </h2>

      {currentProducts.length === 0 ? (
        <p style={{ padding: "20px" }}>No products found.</p>
      ) : (
        <>
          <div className="products-grid">
            {currentProducts.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>

          {/* PAGINATION */}
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
        </>
      )}
    </div>
  );
}

export default Shop;

