import styles from "./Contact.module.css";

export function Contact() {
  return (
    <div>
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
        <input className={styles.submitBtn} type="submit" value="Enviar" />
      </form>
    </div>
  );
}
