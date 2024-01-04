const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema(
    {
        user_id:{
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "user",

        },
    name:{
        type: String,
        required: [true, "please provide a name"],
    },
    email:{
        type: String,
        required: [true, "please provide a email"],
    },
    phone:{
        type: String,
        required: [true, "please provide a phone number"],

    },
},
{
   timestamps: true,
}

);

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;