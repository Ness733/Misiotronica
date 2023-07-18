import styles from "./Sales.module.css";
import Card from "../Card/Card";
import logo from "../../Imagenes/misiotronica_logo.png";

function Main() {
  return (
    <section className={styles.hero}>
      <ul className={styles.list}>
        <Card cardTitle="Item 1" imgSrc={logo} cardText="Descripción" />
        <Card cardTitle="Item 2" imgSrc={logo} cardText="Descripción" />
        <Card cardTitle="Item 3" imgSrc={logo} cardText="Descripción" />
        <Card cardTitle="Item 4" imgSrc={logo} cardText="Descripción" />
        <Card cardTitle="Item 5" imgSrc={logo} cardText="Descripción" />
        <Card cardTitle="Item 6" imgSrc={logo} cardText="Descripción" />
      </ul>
    </section>
  );
}

export default Main;
