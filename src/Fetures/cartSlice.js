import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        isLoading: false,
        error: null,
        cart: [],
    },

    reducers: {
        add (state, action) {
           state.cart.push(action.payload)
        },
        
        remove (state, action) {
            state.cart = state.filter(items => items._id !== action.payload )
        }
    }    
})

export const {add, remove} = cartSlice.actions;

export default cartSlice.reducer;