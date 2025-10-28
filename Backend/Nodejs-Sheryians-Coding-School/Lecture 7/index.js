const express=require('express');
const app=express();
const path=require('path')
const port=3000;
const fs=require('fs');


app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.set('view engine','ejs');
app.use(express.static(path.join(__dirname,'public')))

app.get('/',(req,res)=>{
    fs.readdir('./files',(err,files)=>{
        console.log(files)

        // here we are rendering index.ejs and passing the 'files' array to it
        // files is an array of file names present in the 'files' directory
        res.render('index',{files:files});
    });  
});

app.post('/create',(req,res)=>{
   console.log(req.body) 
 fs.writeFile(`./files/${req.body.title.split(" ").join("")}.txt`, req.body.details, (err) => {
  if (err) {
    console.log("Error writing file:", err);
  } else {
    console.log("File created successfully!");
  }
});

   res.redirect('./')
});


app.get('/file/:fileName', (req,res)=>{
    fs.readFile(`./files/${req.params.fileName}`,'utf-8', (err, fileData)=>{
      res.render('show',{filename:req.params.fileName, fileData:fileData});
    })
})

app.listen(port,()=>{
    console.log(`Server is running at http://localhost:${port}`);
});