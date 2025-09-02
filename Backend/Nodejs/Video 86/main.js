// Two ways to create Modules in Node.js
// 1. ECMAScript ES6 Modules (ESM)
// 2. CommonJS Modules

// CommonJS Modules (they are default in Node.js)
// e.g. module.exports, require()
// these are synchronous

// ECMAScript ES6 Modules (ESM)
// e.g. export, import
// these are asynchronous
// to enable ESM in Node.js, add "type": "module" in package.json file


// Example of a simple HTTP server using CommonJS Modules
const http = require('http');
// Example of a simple HTTP server using ESM
import http from 'http';
const hostname = '127.0.0.1';
const port = 3000;
 
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1>Hello World</h1>\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});


// nodemon main.js is used to restart the server automatically on code changes
// to install nodemon globally use the command: npm install --global nodemon



// Importing named export 'a' from mymodule.js
// example of ECMAScript ES6 Modules (ESM)
import {a} from './mymodule.js';
console.log(a);

// Importing default export from mymodule.js
// example of ECMAScript ES6 Modules (ESM)
import objects from "./mymodule.js";
console.log(objects);


// Importing using CommonJS Modules
// example of CommonJS Modules
const q = require('./mymodule2.js');
console.log(q);
console.log(q.a , __dirname) , __filename;