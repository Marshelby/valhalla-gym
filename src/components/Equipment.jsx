// src/components/Equipment.jsx
import './Equipment.css';

function Equipment() {
  return (
    <section className="equipment">
      <h2>Equipamiento</h2>
      <p>
        En Valhalla Gym entrenas con equipamiento de alto nivel:
      </p>
      <ul>
        <li>🏋️‍♂️ Trotadora</li>
        <li>🏋️‍♂️ Pesas libres y mancuernas de alto peso</li>
        <li>🏋️‍♂️ Rack para sentadillas y press</li>
        <li>🏋️‍♂️ Barra olímpica y barra hexagonal</li>
        <li>🏋️‍♂️ TRX y sistema de calistenia</li>
        <li>🏋️‍♂️ Paralelas, dominadas y chalecos con peso</li>
        <li>🏋️‍♂️ Hip thrust, bosu y colchonetas</li>
      </ul>
      <p className="note">* Muy pronto subiremos fotos reales de nuestras instalaciones</p>
    </section>
  );
}

export default Equipment;
