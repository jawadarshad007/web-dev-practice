const express = require("express")

const app = express()

app.use(express.json())

const notes = []  // ya apni value RAM ma store kr rha ha , and server jab bhi restart hoga to ye value delete ho jayegi , isliye hum database use krte ha



app.post("/notes",(req,res)=>{
    notes.push(req.body)
   
    //  HTTP Status Codes: Servers use HTTP status codes to indicate the outcome of a client's request  .
    // APi ka responce hamasaha json format ma jana chaiya
    res.status(201).json({
        message: "Note created successfully"
    })
})

app.get("/notes",(req,res)=>{
    res.status(200).json({
        notes: notes
    })
})

app.delete("/notes/:index" , (req,res)=>{
    delete notes[req.params.index]
    res.status(204).json({
        message : `Note at index ${req.params.index} is successfully deleted`
    })
})

app.patch("/notes/:index" , (req,res)=>{
    notes[req.params.index].description = req.body.description;
    res.status(200).json({
        message: `Note at index ${req.params.index} is successfully updated`
    })

})





module.exports = app;
