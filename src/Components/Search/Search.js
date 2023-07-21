import styles from "./Search.module.css";
import { useDispatch } from "react-redux";
import { searchText } from "../Redux/store";
import { Link } from "react-router-dom";

export default function Search() {
  const searchInput = document.getElementById("searchValue");
  const dispatch = useDispatch();

  const getSearch = () => {
    setTimeout(() => {
      const getText = searchInput.value;
      const newGetText = getText;

      console.log(newGetText);
      if (getText !== "") {
        // dispatch(searchText(newGetText[0].toUpperCase() + newGetText.slice(1)));
        dispatch(
          searchText(
            getText
              .toLowerCase()
              .split(" ")
              .map((element) => element[0].toUpperCase() + element.slice(1))
              .join(" ")
          )
        );
        searchInput.value = "";
      } else {
        dispatch(searchText(""));
      }
    }, 100);
  };

  return (
    <div className={styles.searchBar}>
      <input
        className={styles.searchBox}
        type="text"
        id="searchValue"
        placeholder="¿Qué esta buscando?"
      ></input>
      <Link to="/Sales">
        <input
          className={styles.searchBtn}
          type="submit"
          value="Buscar"
          onClick={() => {
            getSearch();
            setTimeout(() => {
              searchInput.value = "";
            }, 200);
          }}
        ></input>
      </Link>
    </div>
  );
}
