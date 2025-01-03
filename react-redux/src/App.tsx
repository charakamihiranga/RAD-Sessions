import {useDispatch, useSelector} from 'react-redux';
import './App.css'

function App() {
  const count = useSelector(state => state);
  const dispatch = useDispatch();

  return (
    <>
      {count}
      <br/>
      <button onClick={() => dispatch({type:'INCREMENT', payload: 1})}>Increment</button>
      <button onClick={() => dispatch({type:'DECREMENT', payload: 1})}>Decrement</button>
    </>
  )
}

export default App
