import './App.css' // Import the CSS file for styling
import { useState } from "react"; // Import the useState hook from React
import { Customer } from "./model/Customer.ts"; // Import the Customer class

function App() {
    // State to store the list of customers
    const [customers, setCustomers] = useState<Customer[]>([])

    // States to store the form input values
    const [name, setName] = useState("")
    const [address, setAddress] = useState("")
    const [email, setEmail] = useState("")
    const [mobile, setMobile] = useState("")

    // Function to add a new customer
    function addCustomer() {
        const customer = new Customer(name, address, email, mobile) // Create a new customer instance
        setCustomers([...customers, customer]) // Add the new customer to the list
    }

    // Function to delete a customer by email
    function deleteCustomer(email: string) {
        setCustomers(customers.filter((customer) => customer.email !== email)) // Filter out the customer with the given email
    }

    // Function to view a customer's details
    function viewCustomer(index: number) {
        const customer = customers[index] // Get the customer at the given index
        setName(customer.name) // Set the form input values to the customer's details
        setAddress(customer.address)
        setEmail(customer.email)
        setMobile(customer.mobile)
    }

    // Function to update a customer's details
    function updateCustomer() {
        const customer = new Customer(name, address, email, mobile) // Create a new customer instance with updated details
        const index = customers.findIndex((customer) => customer.email === email) // Find the index of the customer to update
        if (index !== -1) {
            const newCustomers = [...customers] // Create a copy of the customers array
            newCustomers[index] = customer // Update the customer at the found index
            setCustomers(newCustomers) // Set the updated customers array
        }
    }

    return (
        <>
            <form>
                {/* Input fields for customer details */}
                <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
                <input type="text" placeholder="Address" value={address} onChange={e => setAddress(e.target.value)} />
                <input type="text" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                <input type="text" placeholder="Mobile" value={mobile} onChange={e => setMobile(e.target.value)} />
            </form>
            <div className="btn-container">
                {/* Buttons to add and update customers */}
                <button onClick={addCustomer}>Add Customer</button>
                <button onClick={updateCustomer}>Update Customer</button>
            </div>

            <br />

            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Email</th>
                        <th>Mobile</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Render the list of customers */}
                    {customers.map((customer, index) => (
                        <tr key={index}>
                            <td>{customer.name}</td>
                            <td>{customer.address}</td>
                            <td>{customer.email}</td>
                            <td>{customer.mobile}</td>
                            <td>
                                {/* Buttons to delete and view customer details */}
                                <button onClick={() => deleteCustomer(customer.email)}>Delete</button>
                                <button onClick={() => viewCustomer(index)}>View</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default App // Export the App component as the default export