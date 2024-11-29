import './App.css';
import {ReactNode, useState} from "react";
import { ButtonComponent } from "./component/ButtonComponent.tsx";

function App() {
    const [count, setCount] = useState(0);

    const handleCLick = (value: ReactNode) => {
        if (value === "Add") {
            setCount(count + 1);
        } else if ( value === "Sub") {
            setCount(count - 1);
        }
    };

    return (
        <>
            <h1>{count}</h1>
            <br />
            <ButtonComponent onSelect={handleCLick}>Add</ButtonComponent>
            <ButtonComponent onSelect={handleCLick}>Sub</ButtonComponent>
        </>
    );
}

export default App;
