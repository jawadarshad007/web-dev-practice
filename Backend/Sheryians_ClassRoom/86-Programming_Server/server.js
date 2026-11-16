const express = require('express');

const app = express(); // server instance created   

// idr hm server ko program kr rahn hn, ka user request behji to isko kya responce behjna ha 
app.get("/", (req,res)=>{
    res.send("Hello World")

})

app.get("/about", (req,res)=>{
    res.send("This is about page")

})


app.listen("3000") // server started on port 3000