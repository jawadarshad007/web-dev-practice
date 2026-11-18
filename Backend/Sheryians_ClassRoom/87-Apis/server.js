const express = require('express');

const app = express(); // server instance created

app.use(express.json()) // middleware use kr rhe ha jo express ka server ko enable krta ha ka wo req.body ka data ko read kr ske.



const notes = []

// jis method ki API create krne ho wo app ka sath likhte 
app.post("/notes",(req,res)=>{

    //req.body contains the data sent by the client (frontend/Postman) to the server in the request body.
    console.log(req.body)
    // ya express ka server by default itna capable nai hota ka  req.body ka data ko read kr ske, is lia hume express.json() middleware use krna parta hai.
    
    notes.push(req.body)

    res.send("Note Created")
})


// app.get() Express.js ka method hai jo GET HTTP requests ko handle karne ke liye use hota hai.
app.get('/notes', (req, res) => {
    res.send(notes);
});


// jasie hi server start hoga, mean jab app ka server request sunne ka lia ready ha, tab ya callback function run hoga.
app.listen(3000, () => {
    console.log('Server is running on port 3000');
})