const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'Enter first name']
    },
    lastName: {
        type: String,
        required: [true, 'Enter last name']
    },
    email: {
        type: String,
        required: [true, 'Enter email id']
    },
    password: {
        type: String,
        required: [true, 'Enter password']
    },
   
})

mongoose.model("UserModel", userSchema);
