import styles from "./ShoppingCart.module.css";
import { AiFillCloseCircle } from "react-icons/ai";
import { FaTrash } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { RemoveFromCart, changeQty } from "../../Redux/store";

const ShoppingCart = function ({ visibility, onClose }) {
  const products = useSelector((state) => state.list);

  const dispatch = useDispatch();

  const mappedList = products.map((product) => {
    const total = product.precio * product.cantidad;
    return total;
  });
  const totalCart = mappedList.reduce((a, b) => a + b, 0);

  function numberWithCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const formattedTotal = numberWithCommas(totalCart);

  return (
    <div
      className={styles.Modal}
      style={{ display: visibility ? "block" : "none" }}
    >
      <div className={styles.ShoppingCart}>
        <div className={styles.Header}>
          <h2>Productos</h2>
          <button className={styles.BtnClose} onClick={onClose}>
            <AiFillCloseCircle size={70} />
          </button>
        </div>
        <div className={styles.CartProducts}>
          {products.length === 0 && (
            <span className={styles.EmptyText}>El carrito está vacio.</span>
          )}
          {products.map((product) => (
            <div className={styles.CartProduct} key={product.id}>
              <img src={product.imagen} alt={product.nombre} />
              <div className={styles.ProductInfo}>
                <h3>{product.nombre}</h3>
                <span className={styles.ProductPrice}>
                  ${numberWithCommas(product.precio)} x {product.cantidad} u.{" "}
                  <br />
                  Total: ${numberWithCommas(product.precio * product.cantidad)}
                </span>
              </div>
              <select
                className={styles.Count}
                value={product.count}
                onChange={(event) => {
                  dispatch(changeQty(product.id, Number(event.target.value)));
                }}
              >
                {[...Array(10).keys()].map((number) => {
                  const num = number + 1;
                  return (
                    <option value={num} key={num}>
                      {num}
                    </option>
                  );
                })}
              </select>
              <button
                className={styles.BtnRemove}
                onClick={() => dispatch(RemoveFromCart(product))}
              >
                <FaTrash size={20} />
              </button>
            </div>
          ))}
          {products.length > 0 && (
            <button className={styles.Checkout}>Ir a pagar</button>
          )}
        </div>
        <h1 className={styles.Total}>Monto Total: ${formattedTotal}</h1>
      </div>
    </div>
  );
};

export default ShoppingCart;
