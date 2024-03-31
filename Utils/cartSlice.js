import {createSlice} from "@reduxjs/toolkit"

const cartSlice =  createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload);
        },
        clearCart: (state) => {
            state.items = [];
        },
        removeItem: (state, action) => {
            state.items.pop();
        },
    },
});


// action will be exported by name and reducer by default.

export const {addItem, removeItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer;