import './App.css';
import { ButtonComponent } from "./component/ButtonComponent";

function App() {

    const handleClick = (name: string) => {
        alert(name + " Clicked!");
    }

    return (
        <>
            <ButtonComponent onselect={handleClick}>Button A</ButtonComponent>
            <ButtonComponent onselect={handleClick}>Button B</ButtonComponent>
        </>
    );
}

export default App;
