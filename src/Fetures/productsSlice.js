import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk("products/fetchPost", async () => {
    const data = await axios.get('products.json');
    return data.data;
})

const productsSlice = createSlice({
    name: "products",
    initialState: {
        isLoading: false,
        error: null,
        products: [],
    },

    extraReducers: builder => {

        builder.addCase(fetchProducts.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.products = action.payload;
        });
        builder.addCase(fetchProducts.rejected, (state, action) => {
            state.isLoading = false;
            state.products = [];
            state.error = action.payload;
        });
    }
})


export default productsSlice.reducer;