import { useNavigate } from "react-router-dom";

import cat1 from "../assets/cat1.jpg"; // Men
import cat2 from "../assets/cat2.jpg"; // Women
import cat3 from "../assets/cat3.jpg"; // Kids
import cat4 from "../assets/cat4.jpg"; // Electronics
import cat5 from "../assets/cat5.jpg"; // Footwear
import cat6 from "../assets/cat6.jpg"; // Beauty

const categories = [
  { name: "Men Fashion", count: 6, image: cat1, route: "/category/men" },
  { name: "Women Fashion", count: 6, image: cat2, route: "/category/women" },
  { name: "Kids Fashion", count: 6, image: cat3, route: "/category/kids" },

  { name: "Electronics", count: 5, image: cat4 },
  { name: "Footwear", count: 4, image: cat5 },
  { name: "Beauty", count: 3, image: cat6 },
];

function CategoriesSection() {
  const navigate = useNavigate();

  return (
    <section className="categories-section">
      <h2 className="section-title">CATEGORIES</h2>

      <div className="categories-grid">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="category-card"
            onClick={() => cat.route && navigate(cat.route)}
            style={{ cursor: cat.route ? "pointer" : "default" }}
          >
            <img src={cat.image} alt={cat.name} />

            <div className="category-info">
              <h4>{cat.name}</h4>
              <p>{cat.count} Products</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CategoriesSection;
