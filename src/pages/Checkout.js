import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Checkout.css";

function Checkout() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const product = state?.product;

  const [form, setForm] = useState({
    name: "",
    address: "",
    city: "",
    phone: "",
  });

  const [errors, setErrors] = useState({});

  if (!product) {
    return <h2 style={{ padding: "40px" }}>No product selected</h2>;
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!form.name.trim()) newErrors.name = "Full name is required";
    if (!form.address.trim()) newErrors.address = "Address is required";
    if (!form.city.trim()) newErrors.city = "City is required";
    if (!form.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(form.phone)) {
      newErrors.phone = "Enter a valid 10-digit phone number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleProceed = () => {
    if (!validateForm()) return;

    const existingOrders =
      JSON.parse(localStorage.getItem("orders")) || [];

    const newOrder = {
      orderId: Date.now(),
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      status: "Yet to Deliver",
      date: new Date().toLocaleString(),
      customer: form,
    };

    localStorage.setItem(
      "orders",
      JSON.stringify([...existingOrders, newOrder])
    );

    navigate("/order-success", { state: { order: newOrder } });
  };

  return (
    <div className="checkout">
      <h2>Checkout</h2>

      <div className="checkout-container">
        {/* FORM */}
        <div className="checkout-form">
          <div className="form-group">
            <label>Full Name</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your full name"
            />
            {errors.name && <small className="error">{errors.name}</small>}
          </div>

          <div className="form-group">
            <label>Address</label>
            <input
              name="address"
              value={form.address}
              onChange={handleChange}
              placeholder="Enter your address"
            />
            {errors.address && (
              <small className="error">{errors.address}</small>
            )}
          </div>

          <div className="form-group">
            <label>City</label>
            <input
              name="city"
              value={form.city}
              onChange={handleChange}
              placeholder="Enter your city"
            />
            {errors.city && <small className="error">{errors.city}</small>}
          </div>

          <div className="form-group">
            <label>Phone Number</label>
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
            />
            {errors.phone && <small className="error">{errors.phone}</small>}
          </div>

          <button className="proceed-btn" onClick={handleProceed}>
            PROCEED
          </button>
        </div>

        {/* SUMMARY */}
        <div className="checkout-summary">
          <h3>Order Summary</h3>
          <img src={product.image} alt={product.name} />
          <p className="product-name">{product.name}</p>
          <p className="product-price">₹{product.price}</p>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
