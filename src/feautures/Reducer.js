import { GET_TOTAL, REMOVE } from "../feautures/Action";
import { ADD } from "../feautures/Action";
import { INCREASE } from "../feautures/Action";
import { DECREASE } from "../feautures/Action";
import { ADDTOWISHLIST, REMOVEWISHLIST } from "../feautures/Action";

function reducer(state, action) {
  if (action.type === REMOVE) {
    return {
      ...state,
      cart: state.cart.filter((item) => item.id !== action.payload.id),
    };
  }
  if (action.type === ADD) {
    const tempcart = state.cart.filter((item) => item.id === action.payload.id);
    if (tempcart.length > 0) {
      let tempcartamount = state.cart.map((cartitem) => {
        if (cartitem.id === action.payload.id) {
          cartitem = { ...cartitem, amount: cartitem.amount + 1 };
        }
        return cartitem;
      });
      return { ...state, cart: tempcartamount };
    } else {
      state.cart.push(action.payload);
    }
  }

  if (action.type === DECREASE) {
    let tempcartamount = [];
    if (action.payload.amount === 1) {
      tempcartamount = state.cart.filter(
        (cartitem) => cartitem.id !== action.payload.id
      );
    } else {
      tempcartamount = state.cart.map((cartitem) => {
        if (cartitem.id === action.payload.id) {
          cartitem = { ...cartitem, amount: cartitem.amount - 1 };
        }
        return cartitem;
      });
    }
    return { ...state, cart: tempcartamount };
  }
  if (action.type === INCREASE) {
    let tempcartamount = state.cart.map((cartitem) => {
      if (cartitem.id === action.payload.id) {
        cartitem = { ...cartitem, amount: cartitem.amount + 1 };
      }
      return cartitem;
    });
    return { ...state, cart: tempcartamount };
  }
  if (action.type === ADDTOWISHLIST) {
    const tempwishlist = state.wishlist.filter(
      (item) => item.id === action.payload.id
    );
    if (tempwishlist.length > 0) {
      let tempwishlistamount = state.wishlist.map((cartitem) => {
        if (cartitem.id === action.payload.id) {
          cartitem = { ...cartitem, whishlist: action.payload.id };
        }
        return cartitem;
      });
      return { ...state, whishlist: tempwishlistamount };
    } else {
      state.wishlist.push(action.payload);
    }
  }
  if (action.type === REMOVEWISHLIST) {
    return {
      ...state,
      wishlist: state.wishlist.filter((item) => item.id !== action.payload.id),
    };
  }
  if (action.type === GET_TOTAL) {
    let { total, amount } = state.cart.reduce(
      (carttotal, cartItem) => {
        const { price, amount } = cartItem;
        const itemtotal = price * amount;
        carttotal.total += itemtotal;
        carttotal.amount += amount;
        return carttotal;
      },
      {
        total: 0,
        amount: 0,
      }
    );
    total = parseFloat(total.toFixed(2));
    return { ...state, total, amount };
  }
  return state;
}

export default reducer;
