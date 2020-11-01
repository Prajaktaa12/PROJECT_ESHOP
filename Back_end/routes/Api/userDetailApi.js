let express = require("express");
let Joi = require("@hapi/joi");
let model = require("../../db/schema/userDetailModel");
let router = express.Router();
let bcrypt = require("bcrypt");
let usermiddleware = require("../../middleware/user");
let admin = require("../../middleware/admin");
let asyncMiddleware = require("../../wrapper/middleware");

router.get("/currentuser", usermiddleware, asyncMiddleware(async (req, res) => {
     let users= await model.findById(req.user._id).select("-userLogin.userPassword");
     res.send(users);
}));

router.get("/allusers", [usermiddleware,admin] , asyncMiddleware(async (req, res) => {
    let user = await model.find();
    res.send({ data:user });
}));

router.post("/register", asyncMiddleware(async (req, res) => {
    let user = await model.findOne({ "userLogin.userEmail": req.body.userLogin.userEmail });
    console.log(user);
if(user) {return res.status(403).send({message:"emailid already exists"})}
    let { error } = ValidationError(req.body);
    if (error) { return res.send(error.details[0].message) };
    let newData = new model({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        newsLetterCheck: req.body.newsLetterCheck,
        userLogin: req.body.userLogin,
        termsAcceptCheck:req.body.termsAcceptCheck,
        resetPasswordToken:req.body.resetPasswordToken,
        resetPasswordExpires:req.body.resetPasswordExpires,
        isAdmin: req.body.isAdmin
   });
    let salt = await bcrypt.genSalt(10);
    newData.userLogin.userPassword = await bcrypt.hash(newData.userLogin.userPassword, salt);
    let token = newData.JwtToken();
    let data = await newData.save();
    res.header("x-auth-token", token).send({ message: "thank you for registration", data});
}));

function ValidationError(error) {
    let Schema = Joi.object({
        firstName: Joi.string().min(4).max(100).required(),
        lastName: Joi.string().min(4).max(200).required(),
        newsLetterCheck: Joi.boolean(),
        userLogin: {
            userEmail: Joi.string().required().email(),
            userPassword: Joi.string().required()
        },
        termsAcceptCheck: Joi.boolean().required(),
        resetPasswordToken: Joi.string(),
        resetPasswordExpires: Joi.date(), 
        isAdmin: Joi.boolean(),
    });
    return Schema.validate(error);
}

module.exports = router;