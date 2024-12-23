import { useContext, useState } from "react";
import { CustomerContext } from "../store/CustomerProvider.tsx";

export function AddCustomer() {
    const [name, setName] = useState('');
    const [customers, dispatch] = useContext(CustomerContext);

    function handleSubmit() {
        dispatch({ type: "ADD_CUSTOMER", payload: { name } });
    }

    return (
        <>
            <input type="text" placeholder='Name' onChange={(e) => { setName(e.target.value) }} />
            <button onClick={handleSubmit}>Add Customer</button>


        </>
    );
}