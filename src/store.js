import { configureStore, createSlice } from "@reduxjs/toolkit";
import Cart from "./routes/Cart";
import user from "./store/userSlice";
import cart from "./store/cartSlice";

export default configureStore({
  reducer: {
    user: user.reducer,
    cart: cart.reducer,
  },
});
