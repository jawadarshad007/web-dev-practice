// server start krna 
// Database sa connection banana




const app = require("./src/app")
const mongoose = require("mongoose")

// mongoose package help to server our with mongodb
function connectToDb(){

    // ya URL compass ma mongodb compass ko cluster sa connect kr rahe thi , so hm na apne server ko database sa connect krna ha, is ka is ka end pa database ka name likhna hota / ka baad 
    // agr app ase Db ka name likh daate ho jo exist hi nai krte ,to ya pahle is db o create krte ha than is sa connect krwa deeta ha
    mongoose.connect("mongodb+srv://malikjawadarshad7777_db_user:niLcHjWSKtEjBGMc@cluster0.5zni9bn.mongodb.net/90-Database")
    .then(()=>{
        console.log("Successfully Connected to Database")
    })
}
connectToDb()


app.listen(3000 , ()=>{
    console.log("Server runnning on port 3000")
})