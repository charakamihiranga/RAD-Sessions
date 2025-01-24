import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  const api = axios.create({
      baseURL: 'http://localhost:3000/',
  });
  useEffect(() => {

    async function getCustomers() {
        const response = await api.get('getCustomers');
        console.log(response.data);
    }

    getCustomers();

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