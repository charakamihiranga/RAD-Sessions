import {configureStore} from "@reduxjs/toolkit";
import customerSlice from "../slice/CustomerSlice.ts";

export const store = configureStore({
    reducer: {
        customer : customerSlice,
    }
});
