// moongoes help to connect application(node) server with mongodb server database
// all mongoose related code is async
const express = require('express');
const connectDB = require('./db')
const userModel = require('./usermodel')
const app = express();



// Connect to the database first
connectDB();

app.get('/', (req, res) => {
    res.send('Hello World');
});

//create
app.get('/create', async (req, res) => {
    // this is async code
    try {
        let createUser = await userModel.create({
            name: "Jawad",
            email: "Jawad@gamil.com",
            username: "Jawad123"
        })
        res.send(createUser)
    }
    catch (err) {
        res.send(err.message)
    }
})


//read
app.get('/read', async (req, res) => {
    try {
        // here you read all users and .find() always gives U a array
        // let users = await userModel.find()

        // this will read only user you give in find and .find() always gives U a array
        // let users = await userModel.find({name: "Jawad update"})

        // .findOne() gives U an abject
        // let users = await userModel.findOne({name: "Jawad update"})


        let users = await userModel.find()

        res.send(users)
    }
    catch (err) {
        res.send(err.message)

    }
})

//update
app.get('/update', async (req, res) => {
    try {
        // userModel.findOneAndUpdate(findone, update, {new:true})
        let updateUser = await userModel.findOneAndUpdate({ username: "Jawad123" }, { name: "Jawad update" }, { new: true })
        res.send(updateUser)
    }
    catch (err) {
        res.send(err.message)
    }
})


// delete
app.get('/delete', async (req, res) => {
    try {
        let users = await userModel.findOneAndDelete({ name: "Jawad" })
        res.send(users)
    }
    catch (err) {
        res.send(err.message)

    }
})



app.listen(3000, () => {
    console.log('Server is running on port 3000');
});