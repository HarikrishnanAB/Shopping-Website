import { useNavigate } from "react-router-dom";

function ProductCard({ product }) {
  const navigate = useNavigate();

  return (
    <div
      className="product-card"
      onClick={() => navigate(`/product/${product.id}`)}
    >
      <img src={product.image} alt={product.name} />

      <h4>{product.name}</h4>

      <div className="price">
        ₹{product.price}
        <span> ₹{product.oldPrice}</span>
      </div>

      <div className="rating">
        ⭐ ⭐ ⭐ ⭐ ☆ <span>(99)</span>
      </div>
    </div>
  );
}

export default ProductCard;
