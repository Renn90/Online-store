import { createStore } from "redux";
import reducer from "./Reducer";

const initialStore = {
  cart: [],
  total: 0,
  cartamount: 0,
  wishlist: [],
};

const store = createStore(reducer, initialStore);
export const cartlength = initialStore.cart.length;

export default store;
