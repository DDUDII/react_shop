import { createSlice } from "@reduxjs/toolkit";

const cart = createSlice({
  name: "cart",
  initialState: [
    { id: 0, name: "Black outer", count: 1 },
    { id: 1, name: "Leather pants", count: 2 },
  ],
});

export default cart;
