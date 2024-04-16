import { configureStore } from "@reduxjs/toolkit";
import { sidebarSlice } from "./reducers/sidebar";

export const store = configureStore({
  reducer: {
    sidebar: sidebarSlice.reducer,
  },
});

export const sidebarActions = sidebarSlice.actions;
