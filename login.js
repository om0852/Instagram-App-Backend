const mongoose = require('mongoose');
const LoginSchema = new mongoose.Schema({
    Email: {
        type: String,
        require: true,
        unqiue: true
    },
    Password: {
        type: String,
        require: "true",
    }
})

const LoginModel = mongoose.model('LoginDetail', LoginSchema);

module.exports = LoginModel