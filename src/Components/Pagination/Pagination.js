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
  console.log(currentFilter);

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return currentFilter === "" ? (
    <div>
      <ul className={styles.Pagination}>
        {pageNumbers.map((number) => (
          <li key={number} className={styles.pageItem}>
            <button
              onClick={() => {
                paginate(number);
              }}
              className={`${styles.pageNumber} ${
                styles[number === currentPage ? "active" : ""]
              }`}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </div>
  ) : (
    <div>
      <h2 className={styles.endSearch}>No se encontraron más resultados</h2>
    </div>
  );
};
