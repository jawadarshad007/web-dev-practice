require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');
const userModel = require('./models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const sendEmail = require('./utils/sendEmail'); 
const port = 3000;

// Set up EJS and middleware
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());

// ======= ROUTES =======

// Home page
app.get('/', (req, res) => {
  res.render('index');
});

// Create User (Register)
app.post('/create', (req, res) => {
  let { username, email, password, age } = req.body;

  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, async (err, hash) => {
      try {
        // Save user in MongoDB
        let createdUser = await userModel.create({
          username: username,
          email: email,
          password: hash,
          age: age
        });

        // Create JWT token
        let token = jwt.sign({ email: email }, "secretkey");
        res.cookie("token", token);

      
        await sendEmail(
          email,
          `Welcome to Our App, ${username}!`,
          `
            <h2 style="color:blue;">Welcome ${username} 🎉</h2>
            <p>Thank you for registering on our app.</p>
            <p>We’re excited to have you onboard!</p>
          `
        );

        // Send response
        res.render('profile', {alert: 'User created successfully! A welcome email has been sent to your email address.'});
        
          
      

      } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).send("Error creating user");
      }
    });
  });
});

// Login page
app.get('/login', (req, res) => {
  res.render('login');
});

// Login process
app.post('/login', async (req, res) => {
  let user = await userModel.findOne({ email: req.body.email });

  if (!user) return res.send("User not found");

  bcrypt.compare(req.body.password, user.password, (err, result) => {
    if (result) {
      let token = jwt.sign({ email: user.email }, "secretkey");
      res.cookie("token", token);
      res.render('profile', { user });
    } else {
      res.send("Incorrect password");
    }
  });
});


app.get('/logout', (req, res) => {
  res.cookie('token', "");
  res.redirect('/');
});

app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`);
});
