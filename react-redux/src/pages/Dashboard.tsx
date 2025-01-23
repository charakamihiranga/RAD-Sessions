import {Customer} from "../models/Customer.ts";
import {useSelector} from "react-redux";
import {RootState} from "@reduxjs/toolkit/query";

export function Dashboard() {
    const customers: Customer[] = useSelector((state: RootState) => state.customer);
    return (
        <>
            Dashboard
            {customers.map((customer: Customer) => (
                <div key={customer.email}>{customer.name + ' ' + customer.email + ' ' + customer.phone}</div>))}
        </>
    );
}

