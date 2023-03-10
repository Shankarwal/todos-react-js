import { createSlice } from "@reduxjs/toolkit";
import { loadState } from "../localStorage";

export const StatusFilters = {
  All: "all",
  Active: "active",
  Completed: "completed",
};

const initialState = loadState()
  ? loadState().visibilityFilter
  : StatusFilters.All;

const filterReducer = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilter: (state, { payload }) => (state = payload),
  },
});

export const { setFilter } = filterReducer.actions;

export default filterReducer.reducer;
