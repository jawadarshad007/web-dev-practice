// Express.js Framework

// Introduction to Express.js
// express js aik npm package hai 
// manages everything from recieving a request to sending a response


// Express.js ek backend web framework hai jo Node.js par chalta hai.
// Iska main kaam hai:
// Web server banana
// Routes handle karna (like /home, /about, etc.)
// APIs banana (for frontend to get/send data)
// So basically:
// Node.js = Base
// Express.js = Easy tools to build servers & APIs





// Setting up a basic Express.js server
import express from 'express'
const app = express()

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




