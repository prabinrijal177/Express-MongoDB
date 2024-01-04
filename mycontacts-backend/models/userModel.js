const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username:{
        type: 'string',
        required: [true, "Please enter a username"],
    },
    email:{
        type: 'string',
        required: [true, "Please add a email address"],
        unique: [true, "Email already exists"],
    },
    password:{
        type: 'string',
        required: [true, "Please enter a password"],
    },
},
    {
        timestamp: true,
    }
);
module.exports = mongoose.model('User',userSchema);