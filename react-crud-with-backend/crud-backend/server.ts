import express from 'express';

const app = express();
app.use(express.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, content-type');
    

    next();
});

app.get('/getCustomers', (req, res) => {
    
  console.log('get request received');
  const customers = [
    { id: 1, name: 'Charaka' },
    { id: 2, name: 'Mihiranga' }
  ];  
  res.send(customers);
  
});

app.post('/addCustomer', (req, res) => { 
    console.log('add request received');
    console.log(req.body);
});

app.put('/updateCustomer', (req, res) => { 
    console.log('update request received');
    console.log(req.body);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
