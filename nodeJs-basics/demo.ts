import * as http from 'http';

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.write('<h1>Hello World</h1>');
       
    } else if(req.url === '/add'){
        res.write('<h1>Hello Customer</h1>');
    }
    res.end();
})

server.listen(3000)