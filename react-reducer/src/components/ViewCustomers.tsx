import {useContext} from "react";
import {CustomerContext} from "../store/CustomerProvider.tsx";
import {Customer} from "../model/Customer.ts";

export function ViewCustomers() {
    const [customers, dispatch] = useContext(CustomerContext);
    return (

        <>
            {customers.map((customer: Customer, index: number) => (
                <div key={index}>
                    {customer.name}
                </div>
            ))}
        </>
    );
}