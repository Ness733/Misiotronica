import styles from "./About.module.css";
import frente from "../../Imagenes/misiotronica_local.jpg";

export function About() {
  return (
    <div className={styles.About}>
      <h1>Sobre Nosotros</h1>
      <img src={frente} alt="Frente Casa Central" />
      <p>
        Misiotrónica nace como una respuesta sencilla a una pregunta milenaria.
        ¿Dónde puedo conseguir esto? Desde nuestros inicios en 2009 nos hemos
        puesto como objetivo diario el poder facilitar a nuestros clientes los
        componentes necesarios para que puedan realizar los suyos. <br /> <br />
        Nuestra ámplia carta de proveedores internacionales nos permite disponer
        siempre del componente preciso para el trabajo, y no lo que más se le
        parezca.
        <br /> <br />
        Los invitamos a recorrer nuestro sitio y visitar nuestra casa central en
        Av. Zapiola 2922, Posadas, Misiones.
      </p>
    </div>
  );
}
