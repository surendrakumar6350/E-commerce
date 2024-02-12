import { configureStore } from "@reduxjs/toolkit";
import Slice  from "./Slice";
import productSlice from "./remainingSlices/ProductPage";
import reviewSlice from "./remainingSlices/Reviews";
import HomeProductSlice from "./remainingSlices/Homeproducts";
import cartslice from "./remainingSlices/cart";
import usersSlice from "./remainingSlices/allusers";
import paymentSlice from "./remainingSlices/payment";

export const Store = configureStore({
    reducer : {
Slice: Slice,
productSlice: productSlice,
reviewSlice: reviewSlice,
HomeProductSlice: HomeProductSlice,
cartslice: cartslice,
usersSlice: usersSlice,
paymentSlice: paymentSlice
    }
})

