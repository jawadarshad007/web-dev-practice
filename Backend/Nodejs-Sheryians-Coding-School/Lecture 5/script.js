// form handling and working with the forms
// handle backend process of forms and making sure the data coming from any frontend
// lib, fw, templating engines, we still handle it at the backend



// Session and Cookies
// cookies are small files that are stored on the client side
// sessions are stored on the server side and a session id is stored on the client side
// cookies can be used to store small amount of data, sessions can be used to store large amount of data
// cookies are sent with every request, sessions are not
// cookies can be accessed by the client side, sessions cannot

// Session => From login to logout





// Setting up a basic Express.js server
import express from 'express'
const app = express()

// blob => Binary Large Object 
// tumne to bheja tha plain text par server ko mila blob which is not directly readable
// ab is cheej ko hanld karna padega ki hum us blob ko waapas se readable kar sake
app.use(express.json()) 
app.use(express.urlencoded({ extended: true })) 
// Middleware in Express.js
// jab bhi server request accept karta hai waha se route ke beech pahuchne tak
// agar aap us request ko beech me rokte ho and kuchh perform karte ho, to ye
// element middleware kehlaata hai
app.use((req, res, next) =>{
    console.log("This is my first middleware")
    next();
})

app.use((req, res, next) =>{
    console.log("This is my second middleware")
    next();
})


// Create Routes
// Route => In URL , except the domain name , the rest of the URL is called routes
app.get("/" , (req, res) => {
    res.send("Hello World from Express.js")
})
app.get("/profile" , (req, res, next) => {
    // res.send("This is profile page ")
    return next(new Error("This is an error from profile page"))
})

// error handler
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})
app.listen(3000)




