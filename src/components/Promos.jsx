// src/components/Promos.jsx
import './Promos.css';

function Promos() {
  return (
    <section className="promos">
      <img
        src="/promociones.png"
        alt="Promociones"
        className="promos-title-image"
      />
      <div className="promo-card">
        <h3>🔥 Planes Libres con Descuento 🔥</h3>
        <p>
          Aprovecha nuestra promoción especial en planes libres y entrena sin límites.
        </p>
        <p className="disclaimer">* Cupos limitados. Promoción válida por tiempo limitado.</p>
      </div>
    </section>
  );
}

export default Promos;
