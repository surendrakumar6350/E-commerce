import { configureStore } from "@reduxjs/toolkit";
import Slice  from "./Slice";
import productSlice from "./remainingSlices/ProductPage";
import reviewSlice from "./remainingSlices/Reviews";
import HomeProductSlice from "./remainingSlices/Homeproducts";
import cartslice from "./remainingSlices/cart";

export const Store = configureStore({
    reducer : {
Slice: Slice,
productSlice: productSlice,
reviewSlice: reviewSlice,
HomeProductSlice: HomeProductSlice,
cartslice: cartslice
    }
})

