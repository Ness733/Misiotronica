import styles from "./Pagination.module.css";

export const Pagination = ({
  itemsPerPage,
  totalItems,
  paginate,
  currentPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  // set active button focus
  // const setFocus = (e) => {
  //   e.target.focus();
  // };

  return (
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
  );
};
