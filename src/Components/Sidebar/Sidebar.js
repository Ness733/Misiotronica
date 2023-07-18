import styles from "./Sidebar.module.css";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

export function Sidebar() {
  const [state, setState] = useState("inactive");
  const [status, setOpen] = useState("closed");

  let sidebarRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!sidebarRef.current.contains(e.target)) {
        setState("inactive");
        setOpen("closed");
      }
    };

    document.addEventListener("mousedown", handler);
  });

  function toggleSidebar() {
    if (state === "inactive") {
      setState("active");
    } else {
      setState("inactive");
    }
  }

  function toggleButton() {
    if (status === "closed") {
      setOpen("open");
    } else {
      setOpen("closed");
    }
  }

  return (
    <span className={styles.Shadows}>
      <button
        className={`${styles.openSidebar} ${styles[status]}`}
        onClick={() => {
          toggleSidebar();
          toggleButton();
        }}
      >
        <div className={styles.burger}></div>
        <div className={styles.burger}></div>
        <div className={styles.burger}></div>
      </button>
      <div ref={sidebarRef} className={`${styles.Sidebar} ${styles[state]}`}>
        <ul>
          <Link className={styles.links} to="/">
            Inicio
          </Link>
          <Link className={styles.links} to="/about">
            Sobre Nosotros
          </Link>
          <Link className={styles.links} to="/sales">
            Ventas
          </Link>
          <Link className={styles.links} to="/contact">
            Contacto
          </Link>
        </ul>
      </div>
    </span>
  );
}
