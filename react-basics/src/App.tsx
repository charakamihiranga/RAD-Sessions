import './App.css'
import ButtonComponent from "./component/ButtonComponent.tsx"; // not recommend : breaking the rule of solid principle which is single responsibility principle

function App() {

  const count = 10;

  return (
    <>
      <p>{count}</p>
    <ButtonComponent name='Add'/>  {/*Pass a Prop Directly*/}
    <ButtonComponent name='Update'/>  {/*Pass a Prop Directly*/}
    <ButtonComponent name='Delete'/>  {/*Pass a Prop Directly*/}
    </>
  );
}

export default App
