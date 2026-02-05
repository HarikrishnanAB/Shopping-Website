import { useParams, useNavigate } from "react-router-dom";
import products from "../data/products";
import "./ProductDetail.css";

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate(); // ✅ HERE

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <h2 style={{ padding: "40px" }}>Product not found</h2>;
  }

  const handleBuyNow = () => {
    navigate("/checkout", { state: { product } }); // ✅ HERE
  };

  return (
    <div className="product-detail">
      <div className="detail-image">
        <img src={product.image} alt={product.name} />
      </div>

      <div className="detail-info">
        <h1>{product.name}</h1>

        <p className="detail-price">
          ₹{product.price}
          <span> ₹{product.oldPrice}</span>
        </p>

        <div className="detail-actions">
          <button className="btn-cart">Add to Cart</button>

          {/* ✅ Buy Now */}
          <button className="btn-buy" onClick={handleBuyNow}>
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
