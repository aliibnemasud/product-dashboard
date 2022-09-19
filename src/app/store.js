import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../Fetures/cartSlice";
import productsSlice from "../Fetures/productsSlice";

const store = configureStore({
    reducer: {
        products: productsSlice,
        cart: cartSlice,
    }
});

export default store;