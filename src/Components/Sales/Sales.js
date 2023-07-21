import styles from "./Sales.module.css";
import Card from "../Card/Card";
import listaArticulos from "./listaArticulos";
import { useState } from "react";
import { Pagination } from "../Pagination/Pagination";
import { useSelector } from "react-redux";

function Ventas() {
  const currentFilter = useSelector((state) => state.searchContent);
  const [currentPage, setCurrentPage] = useState([1]);
  const [itemsPerPage] = useState(6);

  // current item
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = listaArticulos.slice(indexOfFirstItem, indexOfLastItem);
  console.log(currentFilter);

  const newItems = listaArticulos.filter((item) =>
    item.nombre.includes(currentFilter)
  );
  console.log(newItems);
  // change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const switchList = () =>
    newItems.length < listaArticulos.length
      ? newItems.length
      : listaArticulos.length;

  const renderItems = () =>
    newItems.length < listaArticulos.length ? newItems : currentItems;

  return (
    console.log(newItems.length, listaArticulos.length),
    (
      <section className={styles.hero}>
        <h1>Ventas</h1>
        <ul>
          <Card objeto={renderItems()} />
        </ul>
        <Pagination
          itemsPerPage={itemsPerPage}
          totalItems={switchList()}
          paginate={paginate}
          currentPage={currentPage}
        />
      </section>
    )
  );
}

export default Ventas;
