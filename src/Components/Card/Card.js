import styles from "./Card.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../Redux/store";

function Card({ objeto }) {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.list);
  console.log(products);
  const addProductToCart = (product) => {
    const newProduct = {
      nombre: product.nombre,
      imagen: product.imagen,
      id: product.id,
      precio: product.precio,
      cantidad: 1,
    };

    dispatch(addToCart(newProduct));
  };

  return (
    <div className={styles.list}>
      {objeto.map((item) => {
        return (
          <div key={item.nombre} className={styles.cardTile}>
            <li>
              <h3>{item.nombre}</h3>
              <img src={item.imagen} alt={item.nombre}></img>
              <p className={styles.Price}>{`$${item.precio}`}</p>
              <button
                onClick={() => {
                  if (products.some((product) => product.id === item.id))
                    return;
                  else {
                    addProductToCart(item);
                  }
                }}
                className={styles.consultarBtn}
              >
                Añadir al carrito
              </button>
            </li>
          </div>
        );
      })}
    </div>
  );
}

export default Card;
