import styles from "./Main.module.css";
import logo from "../../Imagenes/misiotronica_logo.png";

export function Main() {
  return (
    <div className={styles.landingPage}>
      <img src={logo} alt="" />
      <h1>Bienvenidos a Misiotrónica</h1>
      <p>El sitio donde encontrar todos sus componentes electrónicos.</p>
    </div>
  );
}
