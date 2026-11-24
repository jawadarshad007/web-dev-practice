const express = require("express")
const noteModel = require("./models/notes.model")



const app = express()
app.use(express.json())

app.post("/notes" ,async (req, res)=>{
    const {title, description} = req.body // req.body sa direct data read nai kr skhate, is ka lia hme express.json() malware ki need hote ha 

    // hm model ka bine curd operation perform nai kr skakte , is lia hme mode ki need ha
    const note = await noteModel.create({
        title, description
     })   

     res.status(201).json({
        message : "Note created successfully",
        note
     })
})


app.get("/notes" ,async (req,res)=>{
     const notes = await noteModel.find() // find method always return data in arrray of oject format

     res.status(200).json({
        message: "Notes fetched successfully",
        notes
     })
})


module.exports = app;