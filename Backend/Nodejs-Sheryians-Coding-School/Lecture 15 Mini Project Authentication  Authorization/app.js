const cookieParser = require('cookie-parser');
const userModel = require('./models/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const express = require('express');
const app = express();
const port = 3000;

const path = require('path')


app.set("view engine", "ejs")
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')))
app.use(cookieParser())


app.get('/', (req, res) => {
  res.render('index');
});

app.post('/create', (req, res) => {
    let {username, email, password, age} = req.body;
    bcrypt.genSalt(10,(err, salt)=>{
      bcrypt.hash(password, salt,async (err, hash)=>{
            let createdUser = await  userModel.create({
        username: username,
        email: email,
        password:hash,
        age: age
    })    

    let token = jwt.sign({email:email}, "secretkey")
    res.cookie("token", token)
    res.send(createdUser)
      })
    })

});

app.get('/login', (req, res)=>{
    res.render('login') 
})

app.post('/login',async (req, res)=>{
  let user = await userModel.findOne({email: req.body.email})
  console.log(user)
  if (!user) return res.send("Something went Wrong")
  bcrypt.compare(req.body.password, user.password, (err, result)=>{
    console.log("Password matched: ",result)
    if (result){
        let token = jwt.sign({email:user.email}, "secretkey")
    res.cookie("token", token)
    res.render('profile')
      //  res.send("Yes you can login")
    }
    else res.send("You cannt login")
    
})
})

app.get('/logout', (req, res)=>{
    res.cookie('token', "")
    res.redirect('/')
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});