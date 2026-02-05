import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ConfirmModal from "../components/ConfirmModal";
import "./ShopDetail.css";



function ShopDetail() {
  const [orders, setOrders] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const navigate = useNavigate();

  // Load orders from localStorage
  useEffect(() => {
    const storedOrders =
      JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(storedOrders);
  }, []);

  // DELETE only one order
  const handleDelete = (orderId) => {
    const updatedOrders = orders.filter(
      (order) => order.orderId !== orderId
    );

    setOrders(updatedOrders);
    localStorage.setItem("orders", JSON.stringify(updatedOrders));
  };

  // Open confirmation modal
  const openCancelModal = (order) => {
    setSelectedOrder(order);
    setShowModal(true);
  };

  // Confirm cancel → redirect to cancelled page
 const confirmCancel = () => {
  // Remove cancelled order from list
  const updatedOrders = orders.filter(
    (order) => order.orderId !== selectedOrder.orderId
  );

  // Update state + localStorage
  setOrders(updatedOrders);
  localStorage.setItem("orders", JSON.stringify(updatedOrders));

  // Close modal
  setShowModal(false);

  // Navigate to cancelled page
  navigate("/order-cancelled", { state: { order: selectedOrder } });
};

  return (
    <div className="shop-detail">
      <h2>My Orders</h2>

      {orders.length === 0 ? (
        <p className="no-orders">No orders yet</p>
      ) : (
        orders.map((order) => (
          <div className="order-card" key={order.orderId}>
            <img src={order.image} alt={order.name} />

            <div className="order-info">
              <h4>{order.name}</h4>
              <p className="order-price">₹{order.price}</p>
              <p className="order-status">
                Status: <strong>{order.status}</strong>
              </p>
              <p className="order-date">
                Ordered on: {order.date}
              </p>

              <div className="order-actions">
                <button
                  className="cancel-btn"
                  onClick={() => openCancelModal(order)}
                >
                  Cancel Order
                </button>

                <button
                  className="delete-btn"
                  onClick={() => handleDelete(order.orderId)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))
      )}

      {/* Confirmation Modal */}
      <ConfirmModal
        show={showModal}
        title="Cancel Order"
        message="Do you want to cancel this order?"
        onCancel={() => setShowModal(false)}
        onConfirm={confirmCancel}
      />
    </div>
  );
}

export default ShopDetail;
