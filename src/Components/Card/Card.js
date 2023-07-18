import styles from "./Card.module.css";

function Card(props) {
  return (
    <div className={styles.cardTile}>
      <h3>{props.cardTitle}</h3>
      <img src={props.imgSrc} alt=""></img>
      <p>{props.cardText}</p>
      <button className={styles.consultarBtn}>CONSULTAR</button>
    </div>
  );
}

export default Card;
