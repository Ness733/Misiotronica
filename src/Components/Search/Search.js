import styles from "./Search.module.css";
import { searchText } from "../Redux/store";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

export default function Search() {
  const dispatch = useDispatch();
  const readState = useSelector((state) => state.searchContent);

  const [value, setValue] = useState(readState);

  const getSearch = () => {
    const getText = value;
    console.log(getText);
    const newGetText = getText
      .normalize("NFD")
      .replace(
        /([^n\u0300-\u036f]|n(?!\u0303(?![\u0300-\u036f])))[\u0300-\u036f]+/gi,
        "$1"
      )
      .normalize();

    if (newGetText !== "") {
      dispatch(
        searchText(
          newGetText
            .toLowerCase()
            .split(" ")
            .map((element) => element[0].toUpperCase() + element.slice(1))
            .join(" ")
        )
      );
    }
  };

  return (
    <div className={styles.searchBar}>
      <input
        onChange={(e) => {
          setValue(e.target.value);
          getSearch();
        }}
        className={styles.searchBox}
        type="text"
        id="searchValue"
        value={value}
        placeholder="¿Qué esta buscando?"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            getSearch();
            setValue("");
          } else {
            return;
          }
        }}
      ></input>

      <Link to="/Sales">
        <input
          className={styles.searchBtn}
          type="submit"
          value="Buscar"
          onClick={() => {
            getSearch();
            setValue("");
          }}
        ></input>
      </Link>
    </div>
  );
}
