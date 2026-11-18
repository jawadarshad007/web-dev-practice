// Mostly two tasks are done in this file
// 1-server create krna
// 2-server congif krna

const express = require("express")
const app = express() // server instance created 


app.use(express.json())

const notes = []

app.post("/notes",(req,res)=>{
    notes.push(req.body)
    
    res.send("Note Created")
    console.log(notes)
})


app.get("/notes",(req,res)=>{
    res.send(notes)
})

//params ---- :index this part is dynamic
app.delete("/notes/:index" , (req,res)=>{
    // req.params contains values extracted from dynamic segments of the URL.
    // console.log(req.params)
    console.log(req.params.index)


    delete notes[req.params.index]
    res.send(`note on index ${req.params.index} deleted succesfully`)
})


app.patch("/notes/:index",(req,res)=>{
    notes[req.params.index].description = req.body.description;
    res.send(`note on index ${req.params.index} updated succesfully`)
})

module.exports = app; 