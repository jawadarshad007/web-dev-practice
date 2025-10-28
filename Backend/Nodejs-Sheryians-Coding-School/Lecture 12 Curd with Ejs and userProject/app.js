const express = require('express');
const path = require('path')
const userModel= require('./models/user')
const app = express();
const port = 3000;  


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname,'public')))

// This line tells Express:
// “Hey Express! Use EJS as the default template engine whenever I call res.render().”
app.set("view engine", 'ejs');


app.get('/', (req, res) => {
  res.render("index")
});

app.get('/read',async (req, res) => {
  let allUsers=await userModel.find()
  res.render("read", {users: allUsers})
});
app.get('/edit/:userid',async (req, res) => {
  let userToBeEdited=await userModel.findOne({_id:req.params.userid})
  res.render("edit", {user: userToBeEdited})
});
app.post('/update/:userid',async (req, res) => {
    let {name, email, imageUrl} = req.body;
  let updateduser=await userModel.findOneAndUpdate({_id:req.params.userid},{username: name, email: email, ImageUrl: imageUrl}, {new:true} )
  res.redirect('/read');    
});

app.post('/create',async (req, res) => {
    console.log(req.body)

    // here destructing is used to extract name, email, and imageUrl from req.body
    let {name, email, imageUrl} = req.body;
   let createdUser =await userModel.create({
        username: name,
        email: email,
        ImageUrl: imageUrl
    })
    res.redirect('./read');
});

app.get('/delete/:id', async (req, res) => {
  let deletedUser = await userModel.findByIdAndDelete({_id:req.params.id});
  res.redirect('/read');
})

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
}); 