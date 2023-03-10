import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todos/todoReducer";
import filterReducer from "./todos/filterReducer";
import { saveState } from "./localStorage";

const store = configureStore({
  reducer: {
    todos: todoReducer,
    visibilityFilter: filterReducer,
  },
});

store.subscribe(() => {
  saveState({
    todos: store.getState().todos,
    visibilityFilter: store.getState().visibilityFilter,
  });
});

export default store;
