const mongoose = require('mongoose');
const userSchem = new mongoose.Schema({
    name : String,
    email : String,
    password : String
})

const userModel = mongoose.model("userModel", userSchem);

module.exports = userModel;