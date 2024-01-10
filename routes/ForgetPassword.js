import nodemailer from 'nodemailer';
import LoginModel from '../login.js';
const ForgetPassword = async (req, res) => {
    try {
        console.log(req.body)
        const data = await LoginModel.findOne({ Email: req.body.Email });
        if (req.body.Otp) {
            if (data.Otp == req.body.Otp) {
                res.send("Verify Successfully");
            }
            else {
                res.send("Invalid Otp")
            }
        }
        else {

            // console.log(data)

            const random4DigitNumber = Math.floor(Math.random() * 9000) + 1000;
            if (data) {


                // Create a transporter
                const transporter = nodemailer.createTransport({
                    service: 'gmail',
                    auth: {
                        user: 'projectcode188@gmail.com',
                        pass: 'qoyq bbzx gquq eoxi',
                    },
                });

                // Email options
                const mailOptions = {
                    from: 'projectcode188@gmail.com',
                    to: req.body.Email,
                    subject: 'Forget Password ',
                    text: "Your otp is " + random4DigitNumber + ",Don't share your otp ",
                };

                // Send email
                transporter.sendMail(mailOptions, (error, info) => {
                    if (error) {
                        console.error(error);
                    } else {
                        console.log('Email sent: ' + info.response);
                    }
                });
                await LoginModel.updateOne({ Email: req.body.Email }, { Otp: random4DigitNumber });

                res.send("Otp Sent Successfully");
            }
            else {
                res.send("User Account Not Found");
            }
        }
    }
    catch (error) {
        res.send("otp failed to sent");
    }
}
export default ForgetPassword;