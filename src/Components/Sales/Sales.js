import styles from "./Sales.module.css";
import Card from "../Card/Card";
import { itemsList } from "./listaArticulos";
import { useState } from "react";
import { Pagination } from "../Pagination/Pagination";
import { useSelector, useDispatch } from "react-redux";
import { searchText } from "../Redux/store";

function Sales() {
  // Parámetros de Redux
  const currentFilter = useSelector((state) => state.searchContent);
  const dispatch = useDispatch();
  // Items por página y página inicial
  const [currentPage, setCurrentPage] = useState([1]);
  const [itemsPerPage] = useState(6);
  // Obtener items según itemsPerPage
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = itemsList.slice(indexOfFirstItem, indexOfLastItem);

  // Filtrar items según el input de la barra de búsqueda
  const filteredItems = itemsList.filter((word) =>
    word.nombre.includes(currentFilter)
  );

  // Cambiar la página actual
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Cambiar lista de artículos si se realizó una busqueda o no
  const switchList = () =>
    filteredItems.length < itemsList.length
      ? filteredItems.length
      : itemsList.length;

  // Renderizar lista si cambió el estado en store de Redux o no
  const renderItems = () =>
    currentFilter === "" ? currentItems : filteredItems;

  // Botón para volver a la lista inicial
  const backButton = () => {
    if (filteredItems.length < itemsList.length) {
      return (
        <button
          className={styles.returnBtn}
          onClick={() => {
            dispatch(searchText(""));
            renderItems();
            document
              .getElementById("Navbar")
              .scrollIntoView({ behavior: "smooth" });
          }}
        >
          VOLVER
        </button>
      );
    }
  };

  return (
    <section className={styles.hero}>
      <h1>Ventas</h1>
      <h2>Consultar por disponibilidad de stock</h2>
      {backButton()}
      <ul>
        <Card objeto={renderItems()} />
      </ul>
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={switchList()}
        paginate={paginate}
        currentPage={currentPage}
      />
      {backButton()}
    </section>
  );
}

export default Sales;
