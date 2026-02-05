// src/components/ProductCard.js
import { Link } from "react-router-dom";
import "./ProductCard.css";

function ProductCard({ product }) {
  return (
    <Link to={`/product/${product.id}`} className="product-link">
      <div className="product-card">
        <img src={product.image} alt={product.name} />

        <h4>{product.name}</h4>

        <p className="price">
          ₹{product.price}
          <span> ₹{product.oldPrice}</span>
        </p>

        <div className="stars">⭐⭐⭐⭐☆ (99)</div>
      </div>
    </Link>
  );
}

export default ProductCard;
