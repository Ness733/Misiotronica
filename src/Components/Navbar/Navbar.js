import styles from "./Navbar.module.css";
import Section from "../Section/Section";
import logo from "../../Imagenes/misiotronica_logo.png";
import Search from "../Search/Search";

function Navbar() {
  return (
    <div className={styles.Nav_bar}>
      <ul className={styles.sections}>
        <img className={styles.logo} src={logo} alt="" />
        <h1 className={styles.logoNombre}>Misiotrónica</h1>
        <Search />
        <Section link="/About" title="Sobre Nosotros" />
        <Section link="/Sales" title="Ventas" />
        <Section link="/Contact" title="Contacto" />
      </ul>
    </div>
  );
}

export default Navbar;
