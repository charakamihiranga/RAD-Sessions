import './App.css'
import {ButtonComponent, SmallButtonComponent} from "./component/ButtonComponent.tsx"; // not recommend : breaking the rule of solid principle which is single responsibility principle

function App() {

  return (
    <>
    <ButtonComponent/>
    <SmallButtonComponent/>
    </>
  );
}

export default App
