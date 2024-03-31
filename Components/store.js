import {configureStore} from "@reduxjs/toolkit";
import cartSlice from "../Utils/cartSlice";
import authSlice from '../Utils/authSlice';

const Store = configureStore({
    reducer: {
        cart: cartSlice,
        auth: authSlice
    },

});

export default Store;



// create a store - 
/**
 * create Store
 *  - configureStore() - RTK
 * 
 * Provide my store to app
 *  <Provider store = {store}> - import from react-redux
 * 
 * Slice
 *  -RTK -createSlice({
 * name:
 * initial state:
 * reducers:{
 * }
 * 
 * })
 * 
 * put that slice into the store
 * -{
 *  reducer: {
 *          cart: cartSlice
 *            }     
 *   }
 *
 * 
 * 
 */