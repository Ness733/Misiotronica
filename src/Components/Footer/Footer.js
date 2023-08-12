import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <small>
        ©️ Copyright {""}
        <a
          href="https://ness733.github.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          Nestor Rosales
        </a>{" "}
        2023
      </small>
    </div>
  );
}
