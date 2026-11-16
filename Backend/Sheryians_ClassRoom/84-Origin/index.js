// What is Server
// Server is like a machine jis ka pass kud ka Operating system, khud ka processor, khud ka memory(RAM) and khud ki Storage hote hai.
// is machine ko ase program kia jata ha ka user koi bhi request kare to server us request ko process kare aur uska response user ko de.



// npm init -y
    // mean to initializa folder ka is ma Node ki applicaiton bane gyi 
//Express.js
    // Express.js is a framework of Node.js which is used to build web applications and APIs. With the help of Express.js we easily create server.



const express =  require("express")

const app = express() // server create
//now we have to start the server
app.listen("3000") // server start  