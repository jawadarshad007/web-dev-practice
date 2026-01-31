const mongoose=require('mongoose')

const connectDB =async ()=>{
    try{
         await mongoose.connect('mongodb+srv://jawadarshad324_db_user:LGCbcCq8WdcHvDF5@cluster0.lbjzgxi.mongodb.net/usersTestProject?retryWrites=true&w=majority&appName=Cluster0');
         console.log("Connection to DB is successful")
    }
    catch(err){
        console.log("Error while connecting to DB:", err)
    }
}
connectDB();

const userSchema = mongoose.Schema({
        username: String,
        email: String,
        ImageUrl: String
})
module.exports = mongoose.model('user',userSchema)