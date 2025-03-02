import {configureStore} from "@reduxjs/toolkit";
import customerReducer from "../reducers/CustomerReducer";

export const store = configureStore({
    reducer :{
        customer : customerReducer
    }
})

export type AppDispatch = typeof store.dispatch;