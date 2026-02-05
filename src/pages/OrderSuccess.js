import { useLocation, useNavigate } from "react-router-dom";
import "./OrderSuccess.css";

function OrderSuccess() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const order = state?.order;

  if (!order) {
    return (
      <div className="order-empty">
        <h2>No order found</h2>
        <button onClick={() => navigate("/shop")}>Go to Shop</button>
      </div>
    );
  }

  return (
    <div className="order-success-wrapper">
      <div className="order-success-card">
        <h1>Order Placed Successfully</h1>

        <p className="order-msg">
          Thank you for shopping with AIDA. Your order has been placed
          successfully and is being processed.
        </p>

        <div className="order-product">
          <img src={order.image} alt={order.name} />

          <div className="order-info">
            <h4>{order.name}</h4>
            <p>₹{order.price}</p>
            <span className="order-status">
              Status: Yet to Deliver
            </span>
          </div>
        </div>

        <div className="order-actions">
          <button
            className="btn-primary"
            onClick={() => navigate("/shop-detail")}
          >
            View Orders
          </button>

          <button
            className="btn-secondary"
            onClick={() => navigate("/shop")}
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
}

export default OrderSuccess;
