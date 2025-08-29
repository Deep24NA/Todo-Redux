import { configureStore } from "@reduxjs/toolkit";
import sliceReducer from "../features/todoSlice"

export const store = configureStore({
    reducer: sliceReducer
})