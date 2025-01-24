import {Customer} from "../models/Customer";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import axios from "axios";

export const initialState : Customer[] = [];

const api = axios.create({
    baseURL : "http://localhost:3000/customer"
})

export const saveCustomer = createAsyncThunk(
    'customer/saveCustomer',
    async (customer: Customer) => {
        try {
            const response = await api.post('/add', customer);
            return response.data;
        } catch (error) {
            return console.log('error',error)
        }
    }
);

export const getCustomers = createAsyncThunk(
    'customer/getCustomers',
    async ()=>{
        try{
            const response = await api.get('/view');
            return response.data;
        }catch(err){
            console.log(err);
        }
    }
)


const customerSlice = createSlice({
    name : 'customer',
    initialState,
    reducers:{
        addCustomer(state, action:PayloadAction<Customer>){
            state.push(action.payload);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(saveCustomer.fulfilled, (state, action) => {
                state.push(action.payload);
                alert("customer saved successfully");
                console.log(action.payload)
            })
            .addCase(saveCustomer.rejected, (state, action) => {
                console.error("failed to save customer:", action.payload);
            })
            .addCase(saveCustomer.pending, (state, action) => {
                console.error("save customer pending");
            });
        builder
            .addCase(getCustomers.fulfilled, (state, action) => {
                action.payload.map((customer:Customer) => {
                    state.push(customer);
                })
            })
            .addCase(getCustomers.pending, (state, action) => {
                console.log("pending get customer:", action.payload);
            })
            .addCase(getCustomers.rejected, (state, action) => {
                console.error("failed to save customer:", action.payload);
            });
    }
});

export const {addCustomer}  = customerSlice.actions;
export default customerSlice.reducer;