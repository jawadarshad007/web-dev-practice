const express = require("express")
const noteModel = require("./models/note.model")
const cors = require("cors")
const path = require("path")


const app = express()
app.use(express.json())
app.use(cors())// is sa app ka server cross origin request ko accept kr leta ha, mean koi dosari website ap ki website pr request kr skahte ha
app.use(express.static("./public")) //ya public folder ka files ko publicaly avaiable bana deta ha , is ka pass jab index.html file jo ka public folder ka andr parhe ha wo request krte ha like http://localhost:3000/assets/index-BpEtEHq6.js  , ya dekhe ga ka public folder andr assets/index ki file ha ka nai , mil jane pr ise render krwahe ga 

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




console.log(__dirname)// ya app ko Current file ki directory ka absolute path batati ha

// this is wild card , ya in APIs ko handle kre ga jo app na create nai kin.
// mean agr user na galti sa un APIs pr request send kr di jo ap na create ki hi nai
app.use("*name", (req,res)=>{
    // res.send("This is wild card")
    res.sendFile(path.join(__dirname, "..", "/public/index.html"))    
    })

module.exports = app;
