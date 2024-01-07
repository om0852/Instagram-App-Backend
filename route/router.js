import express from "express";
import ForgetPassword from "../routes/ForgetPassword.js";
import updatePassword from "../routes/UpdatePassword.js";


const router = express.Router();

router.get("/info", (req, res) => {
    res.send("hello om");

})
router.post("/ForgetPassword", ForgetPassword);
router.post("/UpdatePassword", updatePassword);
export default router;