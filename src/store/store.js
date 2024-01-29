import { configureStore } from "@reduxjs/toolkit";
import ShopSliceReducer from "./slices/shopSlice";

const store=configureStore({
    reducer:{
        shop:ShopSliceReducer
    }
})
export default store