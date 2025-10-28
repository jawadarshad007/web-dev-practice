const express = require('express');
const app = express();




app.get('/home', (req,res)=>{
    res.send('Hello from Express.js in script2.js');
})



app.listen(4000, ()=>{
    console.log('Server is running on port 4000');
});