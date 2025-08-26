// const calculate = require('./sum.js');

// //Object destructing
// const {sum , multiply} = calculate;


// console.log("Hii");
// console.log(sum(9, 3));
// console.log(multiply(9, 10));

const http = require('http');

const server = http.createServer((req,res)=>{
console.log("Request is made from browser to server");

// const obj ={
//     name: "Avinash",
//     surname: "Bawage"
// }
// res.writeHead(200, {'content-type': 'text/plain'});
// res.end('Hello from server');

// res.writeHead(200,{"content-type": "application/json"})

// res.end(JSON.stringify(obj));
});

server.listen(3000, ()=>{
    console.log("Server is listening on port 3000");
});