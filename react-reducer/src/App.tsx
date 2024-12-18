import {useReducer, useState} from 'react'
import './App.css'
import {nameReducer} from "./reducers/NameReducer.ts";

function App() {
    const [name, dispatch] = useReducer(nameReducer, '')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    return (
        <>
            <h1>{name}</h1>
            <br/>
            <input type="text" onChange={(e) => {setFirstName(e.currentTarget.value)}}/>
            <input type="text" onChange={(e) => {setLastName(e.currentTarget.value)}}/>
            <br/>
            <button onClick={() => dispatch({firstName, lastName})}>Show</button>
        </>
    )
}

export default App