import { configureStore } from "@reduxjs/toolkit";

const searchInput = "Search";

export function searchText(value) {
  return {
    type: searchInput,
    value: value,
  };
}

const initialState = {
  searchContent: " ",
};

// Reducer
// (previousState, action) => newState

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case searchInput:
      return {
        ...state,
        searchContent: action.value,
      };
    default:
      return state;
  }
};

export const store = configureStore({ reducer });
console.log("Initial State", store.getState());
store.subscribe(() => console.log("update state", store.getState()));

// store.dispatch(searchText("Modulo"));
