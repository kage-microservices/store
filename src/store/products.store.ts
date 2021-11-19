import { createSlice } from "@reduxjs/toolkit";

interface ProductStore {
  products: {
    name: string;
    price: number;
  }[];
}

export const productsStore = createSlice({
  name: "products",
  initialState: {
    products: [{ name: "test", price: 20 }],
  },
  reducers: {
    addProduct: (state, action) => {
      state.products = [...state.products, action.payload];
    },
  },
});
