import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Header.css";

function Header() {
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchText.trim() !== "") {
      navigate(`/shop?search=${searchText}`);
      setSearchText("");
    }
  };

  return (
    <>
      {/* TOP INFO BAR */}
      <div className="top-info-bar">
        <div className="top-left">
          <span>About</span>
          <span>Contact</span>
          <span>Help</span>
          <span>FAQs</span>
        </div>

        <div className="top-right">
          <span>My Account</span>
          <span>USD</span>
          <span>EN</span>
        </div>
      </div>

      {/* MAIN HEADER */}
      <div className="top-header">
        <div className="logo">
          <span className="logo-dark">AIDA</span>
          <span className="logo-yellow"> SHOP</span>
        </div>

        <div className="search-bar">
          <input
            type="text"
            placeholder="Search for products"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          />
          <button onClick={handleSearch}>🔍</button>
        </div>

        <div className="contact">
          <small>Customer Service</small>
          <strong>+91 98765 43210</strong>
        </div>
      </div>

      {/* NAV BAR */}
      <div className="nav-bar">
        <div className="categories-btn">☰ Categories</div>

        <div className="nav-links">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/shop">Shop</NavLink>
          <NavLink to="/shop-detail">Shop Detail</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>

        <div className="nav-icons">
          <span>♡</span>
          <span>🛒</span>
        </div>
      </div>
    </>
  );
}

export default Header;
