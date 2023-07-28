import styles from "./Navbar.module.css";
import Section from "../Section/Section";
import logo from "../../Imagenes/misiotronica_logo.png";
import Search from "../Search/Search";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import { useState } from "react";
import { GiShoppingBag } from "react-icons/gi";
import { useSelector } from "react-redux";

function Navbar() {
  const [cartsVisibility, setCartVisible] = useState(false);
  const products = useSelector((state) => state.list);

  return (
    <div id="Navbar" className={styles.Nav_bar}>
      <ShoppingCart
        visibility={cartsVisibility}
        onClose={() => setCartVisible(false)}
      />
      <ul className={styles.sections}>
        <img className={styles.logo} src={logo} alt="" />
        <h1 className={styles.logoNombre}>Misiotrónica</h1>
        <Search />
        <Section link="/Main" title="Inicio" />
        <Section link="/About" title="Sobre Nosotros" />
        <Section link="/Sales" title="Ventas" />
        <Section link="/Contact" title="Contacto" />
        <button className={styles.Cart}>
          <div className={styles.CartBg}>
            <GiShoppingBag size={50} onClick={() => setCartVisible(true)} />
          </div>
          {products.length > 0 && (
            <span className={styles.ProductCount}>{products.length}</span>
          )}
        </button>
      </ul>
    </div>
  );
}

export default Navbar;
