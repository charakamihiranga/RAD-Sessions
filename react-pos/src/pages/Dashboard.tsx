import {Customer} from "../model/Customer.ts";
import {useContext} from "react";
import {CustomerContext} from "../component/CustomerProvider.tsx";


export function Dashboard() {
    const [customers] = useContext(CustomerContext);
    return (
        <>
            <h3>Dashboard</h3>
            <br/>

            {customers.map((customer: Customer, index: number) => (
                <div key={index}>
                    {customer.name} - {customer.email}
                </div>
            ))}
        </>
    );
}