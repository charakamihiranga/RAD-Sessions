import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Customer} from "../models/Customer.ts";

const initialState : Customer[] = [];
const customerSlice = createSlice({
    name: 'customer',
    initialState,
    reducers: {
        addCustomer: (state, action: PayloadAction<Customer>) => {
            console.log(action.payload);
            state.push(action.payload);
            },
        removeCustomer: (state, action) => {
            return state.filter(customer => customer.id !== action.payload);
            },
        updateCustomer: (state, action) => {
            const index = state.findIndex(customer => customer.id === action.payload.id);
            if (index !== -1) {
                state[index] = action.payload;
            }
        }
    }
})

export const {addCustomer, removeCustomer, updateCustomer} = customerSlice.actions;
export default customerSlice.reducer;