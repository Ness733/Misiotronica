import styles from "./Card.module.css";
// import listaArticulos from "../Sales/listaArticulos";

function Card({ objeto }) {
  return (
    <div className={styles.list}>
      {objeto.map((item) => {
        return (
          <div key={item.nombre} className={styles.cardTile}>
            <li>
              <h3>{item.nombre}</h3>
              <img src={item.imagen} alt=""></img>
              {/* <p>{props.cardText}</p> */}
              <button className={styles.consultarBtn}>CONSULTAR</button>
            </li>
          </div>
        );
      })}
    </div>
  );
}

export default Card;
