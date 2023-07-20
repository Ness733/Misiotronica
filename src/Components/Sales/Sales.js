import styles from "./Sales.module.css";
import Card from "../Card/Card";
import listaArticulos from "./listaArticulos";
import { useState } from "react";
import { Pagination } from "../Pagination/Pagination";

function Ventas() {
  const [currentPage, setCurrentPage] = useState([1]);
  const [itemsPerPage] = useState(6);

  // current item
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = listaArticulos.slice(indexOfFirstItem, indexOfLastItem);

  // change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <section className={styles.hero}>
      <h1>Ventas</h1>
      <ul>
        <Card objeto={currentItems} />
      </ul>
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={listaArticulos.length}
        paginate={paginate}
      />
    </section>
  );
}

export default Ventas;
