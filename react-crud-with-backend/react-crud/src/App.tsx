import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  useEffect(() => {
    console.log("useEffect triggered:::");

    fetch('http://localhost:3000/')
        .then(response => response.text())
        .then(data => console.log(data))
        .catch((error: any) => console.log(error));
  }, [count, count2]);

  return (
      <>
        <button onClick={() => setCount(count + 1)}>Count:: {count}</button>
        <br />
        <br />
        <button onClick={() => setCount2(count2 + 1)}>Count:: {count2}</button>
      </>
  );
}

export default App;