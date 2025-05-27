// src/components/About.jsx
import './About.css';

function About() {
  return (
    <section className="about">
      <h2 className="section-title">Entrena sin excusas</h2>
      <p>
        En <span className="marca">Valhalla Gym</span> te ofrecemos un espacio privado, completo y diseñado para que alcances tu mejor versión.
        Entrenamientos personalizados, planes libres y asesorías online para todos los niveles.
      </p>
      <p>
        Nuestro horario es amplio: <span className="horario">de 9:00 a 22:00 hrs</span>, ideal para adaptarse a tu rutina.
        Nos enfocamos en hombres, mujeres, adultos mayores, personas con sobrepeso, deportistas y quienes recién comienzan.
      </p>
      <p className="frase-final">
        Haz del sudor tu escudo, de la constancia tu arma.
      </p>
    </section>
  );
}

export default About;
