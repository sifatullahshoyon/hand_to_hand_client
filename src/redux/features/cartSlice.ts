import { IListing } from "@/types";
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

// add a new property in IListing
export interface ICartProduct extends IListing {
  orderQuantity: number;
}
interface IInitialState {
  // products: IListing[];
  products: ICartProduct[];
  city: string;
  shippingAddress: string;
}

const initialState: IInitialState = {
  products: [],
  city: "",
  shippingAddress: "",
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const productToAdd = state.products.find(
        (product) => product._id === action.payload._id
      );

      if (productToAdd) {
        productToAdd.orderQuantity += 1;
        return;
      }

      state.products.push({ ...action.payload, orderQuantity: 1 });
    },
    incrementOrderQuantity: (state, action) => {
      const productToIncrement = state.products.find(
        (product) => product._id === action.payload
      );

      if (productToIncrement) {
        productToIncrement.orderQuantity += 1;
        return;
      }
    },
    decrementOrderQuantity: (state, action) => {
      const productToDecrement = state.products.find(
        (product) => product._id === action.payload
      );

      if (productToDecrement && productToDecrement.orderQuantity > 1) {
        productToDecrement.orderQuantity -= 1;
        return;
      }
    },
    removeProduct: (state, action) => {
      state.products = state.products.filter(
        (product) => product._id !== action.payload
      );
    },
    updateShippingAddress: (state, action) => {
      state.shippingAddress = action.payload;
    },
  },
});

// product
export const orderedProductsSelector = (state: RootState) => {
  return state.cart.products;
};

// calculate price
export const subTotalSelector = (state: RootState) => {
  return state.cart.products.reduce((acc, product) => {
    const str = product.price;
    const num = Number(str.replace(/,/g, ""));
    return acc + num * product.orderQuantity;
  }, 0);
};

// address
export const shippingAddressSelector = (state: RootState) => {
  return state.cart.shippingAddress;
};

export const {
  addProduct,
  incrementOrderQuantity,
  decrementOrderQuantity,
  removeProduct,
  updateShippingAddress,
} = cartSlice.actions;
export default cartSlice.reducer;
