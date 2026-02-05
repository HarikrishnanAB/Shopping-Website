import { useLocation, Link } from "react-router-dom";
import "./OrderCancelled.css";

function OrderCancelled() {
  const { state } = useLocation();
  const order = state?.order;

  if (!order) {
    return <h2 style={{ padding: "40px" }}>Order not found</h2>;
  }

  return (
    <div className="order-cancelled">
      <h1>Order Cancelled</h1>
      <p>Your order has been cancelled as requested.</p>

      <div className="cancelled-card">
        <img src={order.image} alt={order.name} />
        <div>
          <h3>{order.name}</h3>
          <p>₹{order.price}</p>
        </div>
      </div>

      <Link to="/shop-detail" className="back-btn">
        Back to Shop Details
      </Link>
    </div>
  );
}

export default OrderCancelled;
