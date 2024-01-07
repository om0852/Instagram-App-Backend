import mongoose from "mongoose"
// console.log(USERNAME);
// console.log(PASSWORD)
const connection = async () => {
    try {
        await mongoose.connect(`mongodb+srv://omsalunke:Bdognom0852@cluster0.yglcmf1.mongodb.net/`)
        console.log("database connected")
    } catch (error) {
        console.log(error.message)
    }
}

export default connection