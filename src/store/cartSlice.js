import { createSlice } from "@reduxjs/toolkit";

const cart = createSlice({
  name: "cart",
  initialState: [
    { id: 0, name: "Black outer", count: 1 },
    { id: 1, name: "Leather pants", count: 2 },
  ],
  reducers: {
    addCount(state, action) {
      const cartId = state.findIndex((state) => {
        return state.id === action.payload;
      });
      state[cartId].count++;
    },
    minusCount(state, action) {
      const cartId = state.findIndex((state) => {
        return state.id === action.payload;
      });
      state[cartId].count--;
    },
    addItem(state, action) {
      state.push(action.payload);
    },
  },
});
export let { addCount, minusCount, addItem } = cart.actions;
export default cart;
