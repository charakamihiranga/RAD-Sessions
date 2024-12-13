import './App.css'
import {useState} from "react";

function App() {

    const [names, setNames] = useState({
        firstName: 'John',
        lastName: 'Doe'
    })

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    function handleNameChange(){
        setNames({
            ...names,
            firstName: firstName,
            lastName: lastName
        })
    }

    return (
        <>
            <input name='firstName' type='text' placeholder='First Name' onChange={(e) => {setFirstName(e.target.value)}}></input>
            <input name='lastName' type='text' placeholder='Last Name' onChange={(e) => {setLastName(e.target.value)}}></input>
            <button onClick={handleNameChange}> Display</button>

            <br/>

            <h2>{names.firstName} {names.lastName}</h2>
        </>
    )
}

export default App