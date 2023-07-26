import styles from "./Contact.module.css";
import { useState } from "react";

export function Contact() {
  const [formStatus, setStatus] = useState(0);
  const onClick = (n) => setStatus(n);

  return (
    <div>
      {formStatus === 1 && (
        <div className={styles.Popup}>
          <button
            onClick={() => {
              onClick(0);
            }}
            className={styles.CloseBtn}
          >
            &times;
          </button>
          <h1>Mensaje Enviado con exito 🎉</h1>
        </div>
      )}
      <form className={styles.contactDiv}>
        <h1>Contacto</h1>
        <label>Nombre Completo</label>
        <input
          className={styles.name}
          type="text"
          name="fullname"
          placeholder="Nombre completo."
        />
        <label>Email de contacto</label>
        <input
          className={styles.email}
          type="text"
          name="email"
          placeholder="Dirección de Email."
        />
        <textarea
          className={styles.textArea}
          name="subject"
          placeholder="Su mensaje aquí..."
        ></textarea>
        <button
          onClick={() => {
            onClick(1);
          }}
          className={styles.submitBtn}
          type="button"
          value="Enviar"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}
