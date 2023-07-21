import styles from "./Sales.module.css";
import Card from "../Card/Card";
import listaArticulos from "./listaArticulos";
import { useState } from "react";
import { Pagination } from "../Pagination/Pagination";
import { useSelector, useDispatch } from "react-redux";
import { searchText } from "../Redux/store";
// import { useNavigate } from "react-router";

function Sales() {
  const currentFilter = useSelector((state) => state.searchContent);
  const [currentPage, setCurrentPage] = useState([1]);
  const [itemsPerPage] = useState(6);
  const dispatch = useDispatch();
  // const navigate = useNavigate();

  // current item
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = listaArticulos.slice(indexOfFirstItem, indexOfLastItem);
  // console.log(currentFilter);

  // items list without special character: ´
  const listaArticulosString = listaArticulos.map((element) =>
    element.nombre.replace("ó", "o")
  );

  // const [allItems, resetItems] = useState(currentItems);

  const x = listaArticulosString.filter((word) => word.includes(currentFilter));
  const y = x.map((item) => item.replace("Modulo", "Módulo"));
  // console.log(y);

  // console.log(listaArticulosString);
  const newItems = () => {
    let c = [];
    for (let i = 0; i < y.length; i++) {
      // console.log(listaArticulos.filter((item) => item.nombre.includes(y[i])));
      c.push(...listaArticulos.filter((item) => item.nombre.includes(y[i])));
    }
    return c;
  };

  // listaArticulos.filter((item) => item.nombre.includes(currentFilter));

  // change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const switchList = () =>
    y.length < listaArticulos.length ? y.length : listaArticulos.length;

  const renderItems = () => (currentFilter === " " ? currentItems : newItems());
  // y.length < listaArticulos.length ? newItems() : currentItems;

  return (
    <section className={styles.hero}>
      <h1>Ventas</h1>
      <h2>Consultar por disponibilidad de stock</h2>
      {y.length < listaArticulos.length ? (
        <button
          className={styles.returnBtn}
          onClick={() => {
            dispatch(searchText(" "));
            renderItems();
          }}
        >
          VOLVER
        </button>
      ) : (
        ""
      )}

      <ul>
        <Card objeto={renderItems()} />
      </ul>
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={switchList()}
        paginate={paginate}
        currentPage={currentPage}
      />
      {y.length < listaArticulos.length ? (
        <button
          className={styles.returnBtn}
          onClick={() => {
            dispatch(searchText(" "));
            renderItems();
            document.getElementById("Navbar").scrollIntoView("smooth");
          }}
        >
          VOLVER
        </button>
      ) : (
        ""
      )}
    </section>
  );
}

export default Sales;
