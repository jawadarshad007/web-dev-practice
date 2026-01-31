const mongoose = require('mongoose');



function connectDb() {
    try {
        mongoose.connect(`mongodb+srv://jawadarshad324_db_user:LGCbcCq8WdcHvDF5@cluster0.lbjzgxi.mongodb.net/authTestDb?retryWrites=true&w=majority&appName=Cluster0`)
        console.log("Database connected successfully")
    } catch (error) {
        console.log("Database connection failed")
    }
}
connectDb();
const userSchema = mongoose.Schema({
    username: String,
    email: String,
    password: String,
    age: Number
})
module.exports = mongoose.model("user", userSchema)