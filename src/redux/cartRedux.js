import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: [],
        quantity: 0,
        total: 0,
    },
    reducers: {
        addProduct: (state, action) => {
            state.quantity += 1;
            state.products.push(action.payload);
            state.total += action.payload.price * action.payload.quantity;
        },
        increaseQuantity: (state, action) => {
            state.products = state.products.map((product) => {
                if (product._id === action.payload.id) {
                    product.quantity += 1;
                }
                return product;
            });
            state.total = state.products.reduce((total, product) => total + product.price * product.quantity, 0);
        },
        decreaseQuantity: (state, action) => {
            state.products = state.products.map((product) => {
                if (product._id === action.payload.id) {
                    if (product.quantity > 1) {
                        product.quantity -= 1;
                    }
                }
                return product;
            });
            state.total = state.products.reduce((total, product) => total - product.price * product.quantity, 0);
            console.log(state.total);
        },

        removeItemFromCart: (state, action) => {
            state.products = state.products.filter((product) => product._id !== action.payload.id);
            state.total = state.products.reduce((total, product) => total - product.price * product.quantity, 0);
        },
        clearCart: (state, action) => {
            state.products = [];
            state.quantity = 0;
            state.total = 0;
        },
    },
});

console.log(cartSlice);

export const { addProduct, increaseQuantity, clearCart, decreaseQuantity, removeItemFromCart } = cartSlice.actions;
export default cartSlice.reducer;
