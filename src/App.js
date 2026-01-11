import { Routes, Route } from "react-router-dom";



import Header from "./components/Header";
import HeroFashion from "./components/HeroFashion";
import CategoriesSection from "./components/CategoriesSection";
import FeaturedProducts from "./components/FeaturedProducts";
import Shop from "./pages/Shop";

import "./App.css";

function App() {
  return (
    <>
      <Header />

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
      </Routes>
    </>
  );
}

export default App;

