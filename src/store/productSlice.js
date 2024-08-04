import { createSlice } from "@reduxjs/toolkit";
import { products } from "../utils/constants/general";

export const productSlice = createSlice({
  name: "fruites",
  initialState: {
    products,
    isOpenCart: false,
    cartProduct: [],
  },
  reducers: {
    openCart: (state) => {
      state.isOpenCart = true;
    },
    closeCart: (state) => {
      state.isOpenCart = false;
    },

    addProduct: (state, action) => {
      const newProduct = state.products.find(
        (item) => item.id === action.payload
      );
      if (newProduct) {
        newProduct.isBought = true;
        newProduct.quantyti = 1;

        state.cartProduct.push(newProduct);
      }
    },
    incrementQuantyti: (state, action) => {
      const product = state.cartProduct.find(
        (item) => item.id === action.payload
      );

      if (product) {
        product.quantyti = product.quantyti + 1;
      }
    },
    decrementQuantyti: (state, action) => {
      const product = state.cartProduct.find(
        (item) => item.id === action.payload
      );

      if (product) {
        if (product.quantyti > 1) {
          product.quantyti += 1;
        } else {
          state.cartProduct = state.cartProduct.filter(
            (item) => item.id !== action.payload
          );
          const orginalProduct = state.products.find(
            (item) => item.id === action.payload
          );

          if (orginalProduct) {
            orginalProduct.isBought = false;
          }
        }
      }
    },
  },
});
export const {
  openCart,
  closeCart,
  addProduct,
  incrementQuantyti,
  decrementQuantyti,
} = productSlice.actions;
export const productReducer = productSlice.reducer;
