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
import CategoryShop from "./pages/CategoryShop";


import "./App.css";

function App() {
  return (
    <>
      <Header />
      <ScrollToTop />

      <Routes>
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

        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order-success" element={<OrderSuccess />} />
        <Route path="/shop-detail" element={<ShopDetail />} />
        <Route path="/order-cancelled" element={<OrderCancelled />} />
        <Route path="/category/:category" element={<CategoryShop />} />
      </Routes>
    </>
  );
}

export default App;
