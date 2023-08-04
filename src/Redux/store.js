import { configureStore } from "@reduxjs/toolkit";

export const searchText = (value) => {
  return {
    type: "Search",
    value: value,
  };
};

export const addToCart = (object) => {
  return {
    type: "Add Product",
    payload: {
      nombre: object.nombre,
      imagen: object.imagen,
      id: object.id,
      precio: object.precio,
      cantidad: object.cantidad,
    },
  };
};

export const changeQty = (objectId, cantidad) => {
  return {
    type: "Change Quantity",
    payload: {
      id: objectId,
      cantidad,
    },
  };
};

export const RemoveFromCart = (object) => {
  return {
    type: "Remove Product",
    payload: object.id,
  };
};

const removeProduct = (Array, id) => {
  return Array.filter((obj) => obj.id !== id);
};

const initialState = {
  list: [],
  searchContent: "",
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "Search":
      return {
        ...state,
        searchContent: action.value,
      };
    case "Add Product":
      return {
        ...state,
        list: [...state.list, action.payload],
      };
    case "Remove Product":
      const newList = removeProduct(state.list, action.payload);
      return {
        ...state,
        list: newList,
      };
    case "Change Quantity":
      const { id, cantidad } = action.payload;

      const changeCantidad = (id, cantidad) => {
        const temp = [...state.list];

        const newArray = temp.map((item) => {
          if (item.id === id) {
            return { ...item, cantidad: cantidad };
          }
          return item;
        });
        return newArray;
      };
      return {
        ...state,
        list: changeCantidad(id, cantidad),
      };
    default:
      return state;
  }
};

export const store = configureStore({ reducer });
