import { useNavigate } from "react-router-dom";

import menImg from "../assets/men.jpg";
import womenImg from "../assets/women.jpg";
import kidsImg from "../assets/kids.jpg";

function HeroFashion() {
  const navigate = useNavigate();

  return (
    <section className="hero-fashion">
      {/* MEN */}
      <div
        className="fashion-card big"
        style={{ backgroundImage: `url(${menImg})` }}
      >
        <div className="fashion-content">
          <h2>Men Fashion</h2>
          <button onClick={() => navigate("/category/men")}>
            Shop Now
          </button>
        </div>
      </div>

      <div className="fashion-right">
        {/* WOMEN */}
        <div
          className="fashion-card small"
          style={{ backgroundImage: `url(${womenImg})` }}
        >
          <div className="fashion-content">
            <h2>Women Fashion</h2>
            <button onClick={() => navigate("/category/women")}>
              Shop Now
            </button>
          </div>
        </div>

        {/* KIDS */}
        <div
          className="fashion-card small"
          style={{ backgroundImage: `url(${kidsImg})` }}
        >
          <div className="fashion-content">
            <h2>Kids Fashion</h2>
            <button onClick={() => navigate("/category/kids")}>
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroFashion;
