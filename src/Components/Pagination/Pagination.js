import styles from "./Pagination.module.css";
import { useSelector } from "react-redux/es/hooks/useSelector";

export const Pagination = ({
  itemsPerPage,
  totalItems,
  paginate,
  currentPage,
}) => {
  const pageNumbers = [];
  const currentFilter = useSelector((state) => state.searchContent);

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const selectPageOne = (number) => {
    // Usando === no convertia la página 1 a la página activa
    // eslint-disable-next-line
    if (number == currentPage) {
      return `${styles.active}`;
    }
  };

  return currentFilter === "" ? (
    <div>
      <ul className={styles.Pagination}>
        {pageNumbers.map((number = 1) => (
          <li key={number} className={`${styles.pageItem}`}>
            <button
              id={`P${number}`}
              onClick={() => {
                paginate(number);
              }}
              className={`${styles.pageNumber} ${selectPageOne(number)}`}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </div>
  ) : (
    <div className={styles.endSearch}>
      <h2>No se encontraron más resultados</h2>
    </div>
  );
};
