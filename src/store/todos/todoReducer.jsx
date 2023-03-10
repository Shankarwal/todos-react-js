import { createSlice, createSelector } from "@reduxjs/toolkit";
import { loadState } from "../localStorage";

const initialState = loadState() ? loadState().todos : [];

const todoReducer = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, { payload }) => {
      state.push(payload);
    },
    toggleTodo: (state, { payload }) => {
      return state.map((todo) =>
        todo.id === payload ? { ...todo, completed: !todo.completed } : todo
      );
    },
    deleteTodo: (state, { payload }) => {
      return state.filter((todo) => todo.id !== payload);
    },
    clearDone: (state) => {
      return state.filter((todo) => !todo.completed);
    },
    sortTodos: (state, { payload }) => {
      if (payload === "oldest") {
        state.sort(
          (a, b) => Number(new Date(a.date)) - Number(new Date(b.date))
        );
      } else if (payload === "latest") {
        state.sort(
          (a, b) => Number(new Date(b.date)) - Number(new Date(a.date))
        );
      }
    },
  },
});

export const { addTodo, toggleTodo, deleteTodo, clearDone, sortTodos } =
  todoReducer.actions;

export default todoReducer.reducer;

export const selectTodoById = createSelector(
  (state) => state.todos,
  (_, id) => id,
  (todos, id) => todos.find((todo) => todo.id === id)
);

export const selectFilteredTodos = createSelector(
  (state) => state.todos,
  (state) => state.visibilityFilter,
  (todos, visibilityFilter) => {
    switch (visibilityFilter) {
      case "all":
        return todos;
      case "active":
        return todos.filter((todo) => !todo.completed);
      case "completed":
        return todos.filter((todo) => todo.completed);
    }
  }
);

export const selectFilteredTodosByIds = createSelector(
  selectFilteredTodos,
  (filteredTodos) => filteredTodos.map((todo) => todo.id)
);
