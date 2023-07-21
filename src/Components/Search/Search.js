import styles from "./Search.module.css";
import { useDispatch } from "react-redux";
import { searchText } from "../Redux/store";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useEffect } from "react";

export default function Search() {
  const searchInput = document.getElementById("searchValue");
  const dispatch = useDispatch();
  const readState = useSelector((state) => state.searchContent);
  useEffect(() => {
    dispatch(searchText(" "));
  }, [dispatch]);
  const getSearch = () => {
    console.log(readState);
    try {
      setTimeout(() => {
        const getText = searchInput.value !== "" ? searchInput.value : " ";
        const newGetText = getText
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, ""); // remove accents

        // console.log(newGetText);
        if (newGetText !== " ") {
          // dispatch(searchText(newGetText[0].toUpperCase() + newGetText.slice(1)));
          dispatch(
            searchText(
              newGetText
                .toLowerCase()
                .split(" ")
                .map((element) => element[0].toUpperCase() + element.slice(1))
                .join(" ") // set search input to lowercase, then split each word and capitalize them before joining.
            )
          );
          searchInput.value = "";
        }
      }, 500);
    } catch {}
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
              // searchInput.value = "";
            }, 500);
          }}
        ></input>
      </Link>
    </div>
  );
}
