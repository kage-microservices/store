import { configureStore } from "@reduxjs/toolkit";
import { productsStore } from "./products.store";

export const store = configureStore({
  reducer: {
    products: productsStore.reducer,
  },
});

export const actions = {
  products: productsStore.actions,
};
