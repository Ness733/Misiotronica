import { configureStore } from "@reduxjs/toolkit";

const searchInput = "Search";

export function searchText(value) {
  return {
    type: searchInput,
    value: value,
  };
}

const initialState = {
  searchContent: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case searchInput:
      return {
        searchContent: action.value,
      };
    default:
      return state;
  }
};

export const store = configureStore({ reducer });
