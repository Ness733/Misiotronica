import styles from "./NotFound.module.css";
import image from "../../Imagenes/notfound.png";

export const NotFound = () => {
  return (
    <div className={styles.DivNotFound}>
      <h1>
        Error 404 <br /> Página no encontrada
      </h1>
      <img src={image} alt="404 Not found" />
    </div>
  );
};
