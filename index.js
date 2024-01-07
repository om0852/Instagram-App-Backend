const express = require("express");
const connection = require('./db.js');
const LoginModel = require("./login.js");
const app = express();
const PORT = 5000;
app.use(express.json()); // Add this line to parse JSON bodies
connection();
app.post("/", async (req, res) => {
    res.send("Instagram backend Server is Running");
})
app.post("/data", async (req, res) => {

    const data = await LoginModel.findOne({ Email: req.body.Email });
    if (data) {
        if (data.Password == req.body.Password) {

            res.send("LoginSuccessfully");
        }
        else {

            res.send("Invalid Password");
        }
    }
    else {
        res.send("Account Not Found");

    }
})
app.post("/create", async (req, res) => {
    console.log(req.body)
    try {
        // Assuming the request body contains 'Email' and 'Password'
        const { Email, Password } = req.body;
        const data = await LoginModel.findOne({ Email: Email });
        console.log(data);
        if (data) {
            console.log("Account")
            res.send("Account Already Exist");
        }
        else {

            // Create a new instance of the LoginModel
            const newLogin = new LoginModel({
                Email,
                Password,
            });

            // Save the new instance to the database
            const savedLogin = await newLogin.save();

            res.send('Account created successfully');
        }
    } catch (error) {
        console.error(error.message);
        res.send('Internal Server Error');
    }
})
const start = async () => {
    try {
        app.listen(PORT, () => {
            console.log("Server is start");
        });
    } catch (error) {

    }

}
start();
