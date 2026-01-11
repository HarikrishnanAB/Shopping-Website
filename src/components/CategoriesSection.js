import cat1 from "../assets/cat1.jpg";
import cat2 from "../assets/cat2.jpg";
import cat3 from "../assets/cat3.jpg";
import cat4 from "../assets/cat4.jpg";

const categories = [
  { name: "Fashion", count: 100, image: cat1 },
  { name: "Electronics", count: 100, image: cat2 },
  { name: "Footwear", count: 100, image: cat3 },
  { name: "Cosmetics", count: 100, image: cat4 },
  { name: "Cameras", count: 100, image: cat2 },
  { name: "Men Wear", count: 100, image: cat1 },
  { name: "Beauty", count: 100, image: cat4 },
  { name: "Shoes", count: 100, image: cat3 },
];

function CategoriesSection() {
  return (
    <section className="categories-section">
      <h2 className="section-title">CATEGORIES</h2>

      <div className="categories-grid">
        {categories.map((cat, index) => (
          <div key={index} className="category-card">
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
