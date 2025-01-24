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

    async function addCustomer() {
        const customers = [
            { id: 1, name: 'Vikasitha' }
        ];
        const response = await api.post('addCustomer', customers);
        console.log(response.data);
    }

    async function updateCustomer() {
        const customer = [
            { id: 1, name: 'Charaka' }
        ];
        const response = await api.put('updateCustomer', customer);
        console.log(response.data);
    }

    getCustomers();
    addCustomer();
    updateCustomer()
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