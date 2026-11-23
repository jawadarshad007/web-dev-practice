const mongoose = require("mongoose")


function connectToDb(){
    mongoose.connect("mongodb+srv://Jawad:pfFVC02rBJBoormv@cluster0.5zni9bn.mongodb.net/91-Curd_Operations")
    .then(()=>{
        console.log("Connected to DB")
    })
}


module.exports = connectToDb;