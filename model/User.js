//require mongoose
const mongoose = require("mongoose");
//require Schema
const schema = mongoose.Schema;

//create contactSchema

const userSchema = new schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true,
    },

    phone: Number,
});

module.exports = User = mongoose.model("user", userSchema);