import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import HeroFashion from "./components/HeroFashion";
import CategoriesSection from "./components/CategoriesSection";
import FeaturedProducts from "./components/FeaturedProducts";
import ScrollToTop from "./components/ScrollToTop";

import Shop from "./pages/Shop";
import ProductDetail from "./pages/ProductDetail";
import Checkout from "./pages/Checkout";
import OrderSuccess from "./pages/OrderSuccess";
import ShopDetail from "./pages/ShopDetail";
import OrderCancelled from "./pages/OrderCancelled";

import "./App.css";

function App() {
  return (
    <>
      {/* Fixed Header */}
      <Header />

      {/* Fix scroll position when route changes */}
      <ScrollToTop />

      <Routes>
        {/* HOME */}
        <Route
          path="/"
          element={
            <>
              <HeroFashion />
              <CategoriesSection />
              <FeaturedProducts />
            </>
          }
        />

        {/* SHOP */}
        <Route path="/shop" element={<Shop />} />

        {/* PRODUCT DETAILS */}
        <Route path="/product/:id" element={<ProductDetail />} />

        {/* CHECKOUT */}
        <Route path="/checkout" element={<Checkout />} />

        {/* ORDER SUCCESS */}
        <Route path="/order-success" element={<OrderSuccess />} />

        {/* SHOP DETAILS / ORDERS */}
        <Route path="/shop-detail" element={<ShopDetail />} />

        <Route path="/order-cancelled" element={<OrderCancelled />} />
      </Routes>
    </>
  );
}

export default App;
