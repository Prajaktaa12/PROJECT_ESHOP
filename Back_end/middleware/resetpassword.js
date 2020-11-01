let express = require("express");
let router = express.Router();
let Joi = require("@hapi/joi");
let bcrypt = require("bcrypt");
let userModel = require("../db/schema/userDetailModel");

router.post("/resetpassword/:token", async (req,res) => {
    let result = validationError(req.body);
    if(result.error) {return res.status(403).send(result.error.details[0].message) }
    try{
        let user = await userModel.findOne({
            resetPasswordToken: req.params.token,
            resetPasswordExpires: {$gt: Date.now()}
        });
        if(!user) {return res.status(401).send({message: "Invalid token or token expired"}) };

        let oldpassword = await bcrypt.compare(req.body.userLogin.userPassword, user.userLogin.userPassword);
        if(oldpassword){return res.status(402).send({message: "Password cannot be same as oldpassword"}) };

        user.userLogin.userPassword = req.body.userLogin.userPassword;
        user.resetPasswordToken = undefined;
        user.resetPasswordExpires = undefined;
        let salt = await bcrypt.genSalt(10);
        user.userLogin.userPassword = await bcrypt.hash(user.userLogin.userPassword, salt);
        user = await user.save();
        res.send({message : "Password Changed", data: user})
    }
    catch (ex) {
        res.status(401).send(ex);
    }
})

function validationError(error){
   let schema = Joi.object().keys({
       userLogin:{
           userPassword: Joi.string().min(4).max(100).required()
       }
   });
   return schema.validate(error);
};

module.exports = router;