import './App.css';
import {useState} from "react";

function App() {

    const [count, setCount] = useState(0);

    return (
        <>
            <h1>{count}</h1>
            <br/>
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => setCount(count - 1)}>-</button>
        </>
    );
}

export default App;
