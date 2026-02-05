import { NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <>
      {/* ===== TOP UTILITY BAR ===== */}
      <div className="top-utility-bar">
        <div className="utility-left">
          <span>About</span>
          <span>Contact</span>
          <span>Help</span>
          <span>FAQs</span>
        </div>

        <div className="utility-right">
          <span>My Account</span>
          <span>USD</span>
          <span>EN</span>
        </div>
      </div>

      {/* ===== MAIN HEADER ===== */}
      <div className="top-header">
        <div className="logo">
          <span className="logo-dark">AIDA</span>
          <span className="logo-yellow"> SHOP</span>
        </div>

        <div className="search-bar">
          <input type="text" placeholder="Search for products" />
          <button>🔍</button>
        </div>

        <div className="contact">
          <small>Customer Service</small>
          <strong>+91 98765 43210</strong>
        </div>
      </div>

      {/* ===== NAV BAR ===== */}
      <div className="nav-bar">
        <div className="categories">☰ Categories</div>

        <div className="nav-links">
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/shop">Shop</NavLink>
          <NavLink to="/shop-detail">Shop Detail</NavLink>

          <span>Contact</span>
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
