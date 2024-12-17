import {Customer} from "../model/Customer.ts";
import {useContext} from "react";
import {CustomerContext} from "../component/CustomerProvider.tsx";
import {useNavigate} from "react-router";
import {UpdateCustomer} from "./UpdateCustomer.tsx";


export function Dashboard() {
    const navigate = useNavigate();
    let [customers,setCustomers] = useContext(CustomerContext);
    function handleDelete(email: string) {
        setCustomers(customers.filter((customer: Customer) => customer.email !== email))
        navigate('/')
    }
    function handleUpdate(email: string) {
        navigate(`/update/${email}`);
    }
    return (
        <>
            <h3>Dashboard</h3>
            <br/>

            {customers.map((customer: Customer, index: number) => (
                <div key={index}>
                    {customer.name} - {customer.email}
                    <button onClick={() => handleDelete(customer.email)}>Delete</button>
                    <button onClick={() => handleUpdate(customer.email)}>Update</button>
                </div>
            ))}
        </>
    );
}