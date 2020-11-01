let express = require("express");
let router = express.Router();
let bcrypt = require("bcrypt");
let model = require("../db/schema/userDetailModel");

router.post("/login", async (req, res) => {
    let user = await model.findOne({ "userLogin.userEmail": req.body.userLogin.userEmail });
    if (!user) { return res.status(404).send({ message: "Invalid email id" }) }
    let validpassword = await bcrypt.compare(req.body.userLogin.userPassword, user.userLogin.userPassword);
    if (!validpassword) { return res.status(404).send({ message: "Invalid password" }) };
    let token = user.JwtToken();
    res.header("x-auth-token", token).send({ message: "LOGIN DONE", token:token});
    
});

module.exports = router;
