import { createSlice } from "@reduxjs/toolkit";

const setItemsfunc = (items, numOfItems) => {
  localStorage.setItem("cart", JSON.stringify(items))
  localStorage.setItem("totalCartItems", JSON.stringify(numOfItems))
}

const cartItems = localStorage.getItem("cart") !== null ? JSON.parse(localStorage.getItem("cart")) : [];
const cartNum = localStorage.getItem("totalCartItems") !== null ? JSON.parse(localStorage.getItem("totalCartItems")) : []

const initialState = {
  numberCart: cartNum,
  Carts: cartItems,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const payload = action.payload;
      if (state.numberCart === 0) {
        const item = {
          ...payload,
          quantity: 1,
        };
        state.numberCart = 1;
        state.Carts.push(item);
        setItemsfunc(state.Carts, state.numberCart);
      } else {
        let check = false;
        state.Carts.forEach((item) => {
          if (item.id === payload.id) {
            item.quantity++;
            check = true;
          }
        });
        if (!check) {
          const newItem = {
            ...payload,
            quantity: 1,
          };
          state.Carts.push(newItem);
          setItemsfunc(state.Carts, state.numberCart);
        }
        state.numberCart++;
        setItemsfunc(state.Carts, state.numberCart);
      }
    },
    deleteFromCart: (state, action) => {
      const payload = action.payload;
      state.Carts = state.Carts.filter((item) => item.id !== payload.id);
      state.numberCart -= payload.quantity;
      setItemsfunc(state.Carts, state.numberCart);
    },
    emptyCart: (state, action) => {
      state.Carts = [];
      state.numberCart = 0;
      setItemsfunc(state.Carts, state.numberCart);
    },
    increaseQuantity: (state, action) => {
      const payload = action.payload;
      state.Carts.forEach((item) => {
        if (item.id === payload) {
          item.quantity++;
        }
      });
      state.numberCart++;
      setItemsfunc(state.Carts, state.numberCart);
    },
    decreaseQuantity: (state, action) => {
      const payload = action.payload;
      state.Carts.forEach((item) => {
        if (item.id === payload) {
          item.quantity--;
        }
      });
      state.numberCart--;
      setItemsfunc(state.Carts, state.numberCart);
    },
  },
});

export const {
  addToCart,
  deleteFromCart,
  increaseQuantity,
  decreaseQuantity,
  emptyCart
} = cartSlice.actions;

export default cartSlice.reducer;