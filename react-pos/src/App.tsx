import './App.css'
import {ChangeEvent, useState} from "react";


function App() {

  const [names, setNames] = useState({
    firstName: 'John',
    lastName: 'Doe'
  })

  function handleNameChange(event: ChangeEvent<HTMLInputElement>){
    setNames({
      ...names,
      [event.target.name]: event.target.value
    })
  }

  return (
      <>
        <input name='firstName' type='text' placeholder='First Name' onChange={handleNameChange}></input>
        <input name='lastName' type='text' placeholder='Last Name' onChange={handleNameChange}></input>

        <br/>

        <h2>{names.firstName} {names.lastName}</h2>
      </>
  )
}

export default App