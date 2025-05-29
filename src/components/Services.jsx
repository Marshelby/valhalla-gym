// src/components/Services.jsx
import './Services.css';

function Services() {
  return (
    <section className="services">
      <img
        src="/servicioshoy.png"
        alt="Servicios"
        className="services-title-image"
      />
      <ul>
        <li>✅ Entrenamientos personalizados según tus metas</li>
        <li>✅ Planes libres para entrenar con autonomía</li>
        <li>✅ Asesorías a distancia vía WhatsApp</li>
        <li>✅ Rutinas adaptadas a todos los niveles</li>
        <li>✅ Clases presenciales en nuestro gimnasio privado</li>
      </ul>
      <p className="note">* Hasta 5 personas por sesión para mantener la calidad y el enfoque</p>
    </section>
  );
}

export default Services;
