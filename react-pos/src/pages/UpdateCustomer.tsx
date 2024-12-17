import {useContext, useEffect, useState} from "react";
import {CustomerContext} from "../component/CustomerProvider.tsx";
import {Customer} from "../model/Customer.ts";
import {useNavigate, useParams} from "react-router";

export function UpdateCustomer() {
    const navigate = useNavigate();
    const [customers, setCustomers] = useContext(CustomerContext);
    const {email} = useParams();

    const [name,setName] = useState("");
    const [phone,setPhone] = useState("");

    useEffect(() => {
        const customer = customers.find((c: Customer) => c.email === email);
        if (customer) {
            setName(customer.name);
            setPhone(customer.phone);
        }
    }, [email, customers]) // [email, customers] is the dependency array it will run the effect whenever email or customers changes

    function handleUpdate() {
        const updatedCustomers = customers.map((customer: Customer) =>
            customer.email === email ? { ...customer, name, phone } : customer
        );
        setCustomers(updatedCustomers);
        navigate('/');
    }
    return (
        <>
            <header><h2>Update Customer</h2></header>
            <br/>

            <input type="text" placeholder="name" value={name} onChange={(e)=> { setName(e.target.value)}}/>
            <input type="text" placeholder="phone" value={phone} onChange={(e)=> { setPhone(e.target.value)}}/>

            <br/>
            <button onClick={handleUpdate}>Update Customer</button>
        </>
    );
}