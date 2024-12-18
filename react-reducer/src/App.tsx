import { useReducer, useState } from 'react';
import './App.css';
import { nameReducer } from './reducers/NameReducer.ts';

const initialState = { firstName: '', lastName: '' };

function App() {
    const [name, dispatch] = useReducer(nameReducer, initialState);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    return (
        <>
            <h1>{name.firstName} {name.lastName}</h1>
            <br />
            <input type="text" onChange={(e) => setFirstName(e.currentTarget.value)} />
            <input type="text" onChange={(e) => setLastName(e.currentTarget.value)} />
            <br />
            <button onClick={() => dispatch({ type: "PUSH_NAME", payload: { firstName, lastName } })}>Show</button>
        </>
    );
}

export default App;