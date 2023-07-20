import styles from "./Pagination.module.css";

export const Pagination = ({ itemsPerPage, totalItems, paginate }) => {
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
              onClick={(e) => {
                paginate(number);
                if (e.relatedTarget === null) {
                  e.target.focus();
                }
              }}
              className={`${styles.pageNumber}`}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
