const express = require('express');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt') // for password encryption and decryption
// bcrypt is used for password hashing — not encryption.
// This means:
// Passwords are converted to unreadable, irreversible strings.
// Even if a hacker sees the database, they can’t read passwords.
const jwt = require('jsonwebtoken') 
const app = express();

app.use(cookieParser());

app.get('/', (req, res) => {
    // cookie mean server sa browser pa kuch data store krwadena 
    // cookie mean small piece of data stored on client side
    // cookies are stored in key value pair format
    // cookies are stored in browser
    // cookies are sent with every request to server
    // res.cookie("name", "Jawad")   // set cookie
    // res.send('Done');


// encryption  => data ko is tarah se convert karna(by any algorithm or any method) ki wo readable na rahe through bcrypt


    //     bcrypt.genSalt()
    // ➤ This function creates a random “salt”, which is a unique random string used to make the password encryption stronger.
    // 10 means “salt rounds” (the higher the number, the slower and more secure the hash process).
    bcrypt.genSalt(10, (err, salt) => {
        // salt is random string added to password before encryption
        console.log(salt)
        //         bcrypt.hash()
        // ➤ This function takes your plain password (“mypassword123”) and the salt, and then creates a hashed (encrypted) version of the password.
        bcrypt.hash("mypassword123", salt, (err, hash) => {
            // now we have to store this hash in database
            console.log(hash)  
        })
    })



//     jwt.sign() (for Authentication)
// After password hashing comes user authentication, handled by JWT (JSON Web Token).
    let token=jwt.sign({email: "jawad123@gmail.com"}, "secretkey",)
//     What happens here:
// jwt.sign() creates a token — a small encoded string that proves the user is logged in.
// The first argument { email: "jawad123@gmail.com" } is called the payload (user data).
// "secretkey" is your private key used to sign the token (should be stored in .env file).
// This token is sent back to the client (browser) so that the user doesn’t need to log in again for every request.
    res.cookie("token", token)   //Stores the JWT token in a browser cookie.
    res.send('Done');
    console.log("Token:----",token)

});

app.get('/read', (req, res) => {
    // cookie ab hr request k sath server pa bheji jaye gae
    console.log(req.cookies)
    // console.log(req.cookies.token)
    res.send('read page')

    //    jwt.verify() 
    // ➤ This function takes the token we received from the client (req.cookies.token) and the same secret key ("secretkey") that was used to create the token.
    // It checks if the token is valid and was not tampered with. If the token is valid, it returns the decoded data (like the email) that was originally signed into the token.
    let decoded=jwt.verify(req.cookies.token, "secretkey")
    console.log("decoded-----",decoded)


    //     bcrypt.compare 
    // This is a function from the bcrypt library that checks whether a plain text password matches a stored bcrypt hash.
    // Important: it does not decrypt anything — it hashes the candidate password in the same way and compares the outputs.
    bcrypt.compare("mypassword123", "$2b$10$6XWkDd6zjxmeJc4hTn5EtOx3FNWSG5sC08szI7euye5jLZGO07a9C", (err, result) => {
        console.log(result)
    })
})



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});            