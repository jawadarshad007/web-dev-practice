const mongoose = require('mongoose');


// A schema in Mongoose defines the structure of your data — like a “blueprint” for documents inside a collection.
const userSchema = mongoose.Schema({
    name: String,
    username: String,
    email: String
})
module.exports = mongoose.model('user', userSchema);