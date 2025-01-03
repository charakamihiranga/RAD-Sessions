import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {useState} from "react";
import {Modal} from "../components/Modal.tsx";
import {addCustomer} from "../slice/CustomerSlice.ts";
import {v4 as uuidv4} from "uuid";

export function  AddCustomer() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    function handleSubmit() {
        const newCustomer = {
            id: uuidv4(),
            name,
            email,
            phone,
        };
        dispatch(addCustomer(newCustomer));
        navigate("/");
    }
    return (
        <>
            <header>
                <h2>Add Customer</h2>
            </header>
            <br/>
            <Modal
                handleSubmit={handleSubmit}
                setName={setName}
                setEmail={setEmail}
                setPhone={setPhone}
            >
                Add Customer
            </Modal>
        </>
    );
}
