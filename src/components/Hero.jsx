// src/components/Hero.jsx
import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="overlay">
        <div className="hero-content">
          <img
            src="/titulo-valhalla-naranja.png"
            alt="Valhalla Gym - Sudor, constancia y gloria"
            className="hero-title-image"
          />
          <a
            href="https://wa.me/56962496012"
            className="cta-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Entrena con nosotros
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
