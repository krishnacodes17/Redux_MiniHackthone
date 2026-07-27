import { createSlice } from "@reduxjs/toolkit";



export const CartSlice = createSlice({
    name:"Cart",

    initialState:{
        cart:[]
    },

    reducers:{
        addToCart: (state, action)=>{
            const product = action.payload

            const existProduct = state.cart.find((item)=>item.id  === product.id)

            if(existProduct){
                existProduct.quantity +=1
            }
            else{
                state.cart.push({
                    ...product, quantity :1
                })
            }

            // console.log(product.id)
        },

        removeFromCart: (state,action)=>{
            const productId = action.payload

            state.cart = state.cart.filter((item)=> item.id !== productId)
        },


        increaseQuantity :(state,action)=>{
            const productId = action.payload

            const product = state.cart.find((item)=> item.id === productId)

            if(product){
                product.quantity +=1
            }
        },


        decreaseQuantity:(state ,action)=>{
            const productId = action.payload

            const product = state.cart.find((item)=> item.id === productId)

            if(!product) return

            if(product.quantity > 1){
                product.quantity -= 1
            }else{
                state.cart = state.cart.filter((item)=> item.id !== productId)
            }
        },


        clearCart : (state)=>{
            state.cart =[]
        }
    }


})


export const {addToCart ,removeFromCart , decreaseQuantity , increaseQuantity, clearCart} = CartSlice.actions
export default CartSlice.reducer