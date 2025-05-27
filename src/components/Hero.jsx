// src/components/Hero.jsx
import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="overlay">
        <div className="hero-content">
          <h1>Valhalla Gym</h1>
          <p className="slogan">Sudor, constancia y gloria</p>
          <a href="https://wa.me/56XXXXXXXXX" className="cta-btn">Entrena con nosotros</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
