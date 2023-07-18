import styles from "./Search.module.css";

function Search() {
  return (
    <div className={styles.searchBar}>
      <input
        className={styles.searchBox}
        type="text"
        placeholder="¿Qué esta buscando?"
      ></input>
      <input className={styles.searchBtn} type="submit" value="Buscar"></input>
    </div>
  );
}

export default Search;
