import { configureStore } from "@reduxjs/toolkit";
import toDoReducer from "./Todo-slice";

export const store = configureStore({
  reducer: {
    todo: toDoReducer,
  },
});
