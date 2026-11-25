const mongoose = require("mongoose")

const noteSchema = new mongoose.Schema({
    title: String,
    description : String
}) 

// Database ma curd operation perform krne ka lia hme Model create krna parhta ha , is Model ka bina hm aik bhi curd opeartion perform nai kr skahte .


// same type of data ko hm database ma hm aik Collection ma rakhte hn , like hamare tamam notes ka  data same types ka ho ga , iss lie tamam notes ko hm aik Collection ma rakhte hn,
//Is Collection ka name hm na notes rakha ha wo hm na mongoose.model ma dia ha.
const noteModel = mongoose.model("notes", noteSchema)


module.exports = noteModel;