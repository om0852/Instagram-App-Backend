import mongoose from 'mongoose';
const LoginSchema = new mongoose.Schema({
    Email: {
        type: String,
        require: true,
        unqiue: true
    },
    Password: {
        type: String,
        require: "true",
    },
    Otp: {
        type: Number
    }
})

const LoginModel = mongoose.model('LoginDetail', LoginSchema);

export default LoginModel