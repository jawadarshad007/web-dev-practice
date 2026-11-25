const express = require("express")
const noteModel = require("./models/note.model")
const cors = require("cors")


const app = express()
app.use(express.json())
app.use(cors())// is sa app ka server cross origin request ko accept kr leta ha, mean koi dosari website ap ki website pr request kr skahte ha

app.post("/api/notes",async (req,res)=>{
    const {title, description} = req.body;

    const note =await noteModel.create({
        title, description
    })

    res.status(201).json({
        message: "Note created Successfully",
        note
    })
})


app.get("/api/notes",async (req,res)=>{
    const notes =await noteModel.find()// find method always return data in arrray of oject format

    res.status(200).json({
        message: "All notes fetched",
        notes
    })
})


app.delete("/api/notes/:id",async (req,res)=>{
   const id = req.params.id
   await noteModel.findByIdAndDelete(id)

   res.status(200).json({
    message: "Note del successfully"
   })
})


app.patch("/api/notes/:id",async (req,res)=>{
   const id = req.params.id
   const {description} = req.body

    await  noteModel.findByIdAndUpdate(id, {description})

    res.status(200).json({
        message : "Note updated successfully"
    })
})


module.exports = app;
