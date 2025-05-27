// src/components/Promos.jsx
import './Promos.css';

function Promos() {
  return (
    <section className="promos">
      <h2>Promociones</h2>
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
