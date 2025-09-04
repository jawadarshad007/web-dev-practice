const express = require('express'); 
const app = express();
const path = require('path');

// Parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Setting up public static files
// static files like css, js, images
// console.log(path.join(__dirname, 'public'));  is same as console.log(__dirname + '/public');
app.use(express.static(path.join(__dirname, 'public')));
// console.log(path.join(__dirname, 'public'));

// EJS Setup
// first install ejs using npm i ejs
// Setup ejs as view engine
// Render ejs file 
app.set("view engine" , "ejs")

app.get('/', (req, res) => {
    res.render('index');
})
// Dynamic Routing => How to get data coming from frontend  at backend route
// :name is a placeholder
// sabse pahle browser par jaao
// url likhiye apna jo aapko chahiye and enter dabaaiye
// ab us url route ko create kariye
// res bhejive kuchh bhi
// ab-usi-url-ko-agar dynamic •banaana hai-to realise karo-konsa part-dynamic-hai aur•
// us-part-ke-aage-route mein: laga do
app.get('/profile/:username', (req, res) => {
    // to catch that dynamic data we use req.params
    // console.log(req.params);
    const name = req.params.username;
    res.send(`Welcome to ${name} `);
})
app.get('/profile/:username/:age', (req, res) => {
    // to catch data coming from frontend form
    // console.log(req.body);
   
    res.send(`Welcome to ${req.params.username}. Your age is ${req.params.age}`);
});  
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});