const mongoose = require("mongoose");

// console.log(USERNAME);
// console.log(PASSWORD)
const connection = async () => {
    try {
        await mongoose.connect(`mongodb://127.0.0.1:27017/instagram`)
        console.log("database connected")
    } catch (error) {
        console.log(error.message)
    }
}

module.exports = connection