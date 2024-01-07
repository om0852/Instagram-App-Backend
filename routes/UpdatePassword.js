import LoginModel from "../login.js"

const updatePassword = async (req, res) => {
    try {
        console.log(req.body);
        const data = await LoginModel.updateOne({ Email: req.body.Email }, { Password: req.body.Password });
        res.send("Password Update Successfully");
    }
    catch (Error) {
        res.send("Password Doesn,t Change try again");
    }
}

export default updatePassword;