// src/components/Hero.jsx
import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="overlay">
        <div className="hero-content">
          <img
            src="/valhalla.png"
            alt="Valhalla Gym - Sudor, constancia y gloria"
            className="hero-title-image"
          />
          <a
            href="https://wa.me/56962496012?text=Hola%2C%20vi%20tu%20p%C3%A1gina%20de%20Valhalla%20Gym%20y%20me%20interesa%20entrenar.%20%C2%BFTienes%20cupos%20disponibles%3F"
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
