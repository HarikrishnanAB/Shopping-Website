import categories from "../data/categories";

function Categories() {
  return (
    <section className="categories">
      <h2>Categories</h2>
      <div className="category-grid">
        {categories.map((cat, i) => (
          <div key={i} className="category-card">
            {cat}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Categories;
