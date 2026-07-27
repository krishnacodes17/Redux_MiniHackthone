 import { configureStore } from "@reduxjs/toolkit"

 import CartReducer from "../features/CartSlice"

export const CartStore = configureStore({

    reducer:{
        cart : CartReducer
    }


 })