// In Node.js, the fs module (short for File System) is a built-in module that allows you to work with the file system on your computer.
// It lets you:

// Write files
// fs.writeFile(path, data[, options], callback)

// Append files
// fs.appendFile(path, data[, options], callback)

// Rename files
// fs.rename(oldPath, newPath, callback)

// Copy files
// fs.copyFile(src, dest[, mode], callback)

// Delete files
// fs.unlink(path, callback)
// fs.rm(path[, options], callback) // for directories, use { recursive: true }

// Update files (overwrite or modify)
// fs.writeFile(path, data[, options], callback)
// fs.truncate(path, len, callback)

// Create directories
// fs.mkdir(path[, options], callback)

// Read files
// fs.readFile(path[, options], callback)

// Read directories
// fs.readdir(path[, options], callback)

// And much more...

const fs = require('fs');

// fs.writeFile("example.txt", "Hello, World!", (err) => {
//     if (err) console.error(err);
//     else console.log("File written successfully");
// })

// // appendfile means add data to the end of the file 
// fs.appendFile("example.txt", " Some new data through appendFile", (err) => {
//     if (err) console.error(err);
//     else console.log("Data append successfully");
// })

// // renamefile means change the name of the file
// fs.rename("example.txt", "newExample.txt", (err) => {
//     if (err) console.error(err);
//     else console.log("File renamed successfully");
// })


// copyfile means copy the file to another location
// fs.copyFile(src, dest[, mode], callback)
// fs.copyFile("newExample.txt", "./copy.txt", (err) => {
//     if (err) console.error(err);
//     else console.log("File copied successfully");
// })


// generate error
// fs.copyFile("newExample.txt", "./copy2/copy.txt", (err) => {
//     if (err) console.error(err.message);
//     else console.log("File copied successfully");
// })

// unlink means delete the file
// fs.unlink("copy.txt", (err) => {
//     if (err) console.error(err);
//     else console.log("File deleted successfully");
// })

// rm means delete the directory 
// fs.rm("./demo" , {recursive : true} , (err) => {
//     if (err) console.error(err);
//     else console.log("Directory deleted successfully");
// })


// readFile means read the content of the folder
// Without "utf8" → You get a Buffer (binary data). so use toString() to convert it to a readable format.
// fs.readFile("newExample.txt", (err, data) => {
//     if (err) console.error(err);
//     else console.log("File content:", data.toString());
// })

// With "utf8" → Node.js automatically decodes the file content into a readable string.
fs.readFile("newExample.txt", "utf8" ,(err, data) => {
    if (err) console.error(err);
    else console.log("File content:", data);
})


// mkdir means make directory
// fs.mkdir("demo" , (err) => {
//     if (err) console.error(err);
//     else console.log("Directory created successfully");     
// })


// readdir means read the content of the folder
fs.readdir("./demo" , (err, files) => {
    if (err) console.error(err);
    else console.log("Directory content:", files);
})