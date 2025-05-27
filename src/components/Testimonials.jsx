// src/components/Testimonials.jsx
import './Testimonials.css';

function Testimonials() {
  return (
    <section className="testimonials">
      <h2>Testimonios y Resultados</h2>
      <div className="testimonial">
        <p>
          “Llegué sin saber nada y ahora entreno con confianza. El ambiente es motivador y el trato personalizado hizo toda la diferencia.”
        </p>
        <span>– Carla M., clienta desde enero 2024</span>
      </div>

      <div className="testimonial">
        <p>
          “En 3 meses bajé 7 kilos y recuperé mi energía. Nunca me sentí juzgado, todo lo contrario. 100% recomendado.”
        </p>
        <span>– Jorge R., alumno online</span>
      </div>

      <div className="before-after-placeholder">
        <p>* Muy pronto mostraremos imágenes de transformaciones reales 🔥</p>
      </div>
    </section>
  );
}

export default Testimonials;
