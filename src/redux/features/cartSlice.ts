import { IListing } from "@/types";
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

// add a new property in IListing
export interface ICartProduct extends IListing {
  orderQuantity: number;
}

interface IShippingInfo {
  name: string;
  email: string;
  address: string;
  type: string;
  price: string;
}
interface IInitialState {
  // products: IListing[];
  products: ICartProduct[];
  city: string;
  shippingAddress: IShippingInfo | null;
}

// interface IInitialState {
//   products: ICartProduct[];
//   city: string;
//   shippingAddress: IShippingInfo | null;
// }

const initialState: IInitialState = {
  products: [],
  city: "",
  shippingAddress: null,
};

// const initialState: IInitialState = {
//   products: [],
//   city: "",
//   shippingAddress: null,
// };

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
    updateCity: (state, action) => {
      state.city = action.payload;
    },
    updateShippingAddress: (state, action) => {
      state.shippingAddress = action.payload;
    },
  },
});

//* product
export const orderedProductsSelector = (state: RootState) => {
  return state.cart.products;
};

export const orderSelector = (state: RootState) => {
  return {
    products: state.cart.products.map((product) => ({
      product: product._id,
      quantity: product.orderQuantity,
    })),
    shippingAddress: `${state.cart.shippingAddress}`,
    paymentMethod: "Online",
  };
};

//* payment
export const subTotalSelector = (state: RootState) => {
  return state.cart.products.reduce((acc, product) => {
    const str = product.price;
    const num = Number(str.replace(/,/g, ""));
    return acc + num * product.orderQuantity;
  }, 0);
};

export const shippingCostSelector = (state: RootState) => {
  if (
    state.cart.city &&
    state.cart.city === "Dhaka" &&
    state.cart.products.length > 0
  ) {
    return 60;
  } else if (
    state.cart.city &&
    state.cart.city !== "Dhaka" &&
    state.cart.products.length > 0
  ) {
    return 120;
  } else {
    return 0;
  }
};

export const grandTotalSelector = (state: RootState) => {
  const subTotal = subTotalSelector(state);
  const shippingAddress = shippingAddressSelector(state);
  console.log("shipping address redux =>", shippingAddress);
  const shippingAddressPrice = parseFloat(shippingAddress?.price || "0");
  return subTotal + shippingAddressPrice;
};

//* Address
export const citySelector = (state: RootState) => {
  return state.cart.city;
};

export const shippingAddressSelector = (state: RootState) => {
  return state.cart.shippingAddress;
};

export const {
  addProduct,
  incrementOrderQuantity,
  decrementOrderQuantity,
  removeProduct,
  updateCity,
  updateShippingAddress,
} = cartSlice.actions;
export default cartSlice.reducer;
