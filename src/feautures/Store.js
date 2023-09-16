import { configureStore, createSlice } from "@reduxjs/toolkit";
import products from "../data2";

const initialStore = {
  cart: [],
  total: 0,
  cartamount: 0,
  wishlist: [],
  alert: null,
  showAlert: false,
  searchArray: [],
  inputValue: '',
  success: false,
};

const stateReducer = createSlice({
  name: 'stateSlice',
  initialState: initialStore,
  reducers: {
    addToCart(state, action){
      const alreadyincart = state.cart.find((item) => item.id === action.payload.id)
      if(alreadyincart){
        alreadyincart.amount++
      }else{
        state.cart.push(action.payload)
        state.wishlist = state.wishlist.filter((item)=> item.id !== action.payload.id)
        state.alert = 'Added to cart!'
      }
      state.total = state.total + action.payload.price
    },
    remove(state, action){
        state.cart = state.cart.filter((item)=> item.id !== action.payload.id);
        state.total = state.total - (action.payload.price * action.payload.amount)
    },
    increase(state, action){
      const item = state.cart.find((item) => item.id === action.payload.id);
      item.amount++;
      state.total = state.total + action.payload.price
    },
    decrease(state, action){
       const item = state.cart.find((item) => item.id === action.payload.id)
       if(item.amount > 1){
        item.amount--
       }else{
        state.cart = state.cart.filter((item)=> item.id !== action.payload.id)
       }
       state.total = state.total - action.payload.price
    },
    addToWishlist(state, action){
      const cartitem = state.cart.find((item) => item.id === action.payload.id)
      const item = state.wishlist.find((item) => item.id === action.payload.id)
      if(!item && !cartitem ){
        state.wishlist.push(action.payload)
      }
    },
    removeFromWishlist(state, action){
      state.wishlist = state.wishlist.filter((item) => item.id !== action.payload.id)
    },
    setAlert(state, action){
      state.alert = action.payload.message
      state.showAlert = action.payload.show;
    },
    searchFilter(state, action){
      const emptyInput = action.payload.trim().toLowerCase() === '';
      if(!emptyInput){
        const filteredSearch = products.filter((item) => item.title.trim().toLowerCase().includes(action.payload.trim().toLowerCase()))
        state.searchArray = filteredSearch;
      }else{
        state.searchArray = []
      }
      state.inputValue = action.payload
    },
    setSuccess(state, action){
      state.success = action.payload.state
    }
  }
})
const store = configureStore({reducer: stateReducer.reducer})
export const sliceAction = stateReducer.actions;

export default store;