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
      const { id, name } = action.payload;
      const existingItem = state.find((item) => item.id === id);

      if (existingItem) {
        existingItem.count++;
      } else {
        state.push({ id, name, count: 1 });
      }
    },
    removeItem(state, action) {
      const id = action.payload;
      const newState = state.filter((item) => item.id !== id);
      return newState;
    },
  },
});
export let { addCount, minusCount, addItem, removeItem } = cart.actions;
export default cart;
