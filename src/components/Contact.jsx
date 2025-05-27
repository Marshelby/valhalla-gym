// src/components/Contact.jsx
import './Contact.css';

function Contact() {
  return (
    <section className="contact">
      <h2>Contáctanos</h2>
      <p>¿Tienes dudas? ¿Quieres reservar tu entrenamiento? Escríbenos directamente o completa el formulario:</p>
      
      <form onSubmit={(e) => e.preventDefault()}>
        <input type="text" placeholder="Tu nombre" required />
        <input type="email" placeholder="Tu correo" required />
        <textarea placeholder="Cuéntanos tu objetivo o consulta..." required></textarea>
        <button type="submit">Enviar mensaje</button>
      </form>

      <a href="https://wa.me/56XXXXXXXXX" className="cta-btn" target="_blank" rel="noopener noreferrer">
        📱 Habla directo por WhatsApp
      </a>
    </section>
  );
}

export default Contact;
