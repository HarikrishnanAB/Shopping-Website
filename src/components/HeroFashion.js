import menImg from "../assets/men.jpg";
import womenImg from "../assets/women.jpg";
import kidsImg from "../assets/kids.jpg";

function HeroFashion() {
  return (
    <section className="hero-fashion">
      <div
        className="fashion-card big"
        style={{ backgroundImage: `url(${menImg})` }}
      >
        <div className="fashion-content">
          <h2>Men Fashion</h2>
          <button>Shop Now</button>
        </div>
      </div>

      <div className="fashion-right">
        <div
          className="fashion-card small"
          style={{ backgroundImage: `url(${womenImg})` }}
        >
          <div className="fashion-content">
            <h2>Women Fashion</h2>
            <button>Shop Now</button>
          </div>
        </div>

        <div
          className="fashion-card small"
          style={{ backgroundImage: `url(${kidsImg})` }}
        >
          <div className="fashion-content">
            <h2>Kids Fashion</h2>
            <button>Shop Now</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroFashion;
