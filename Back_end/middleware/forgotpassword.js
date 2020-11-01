let express = require("express");
let router = express.Router();
let crypto = require("crypto");
let nodemailer = require("nodemailer");
let User = require("../db/schema/userDetailModel");

router.post("/forgotpassword", async (req,res) => {
    try{
    let token = crypto.randomBytes(32).toString("hex");
    let user = await User.findOne({'userLogin.userEmail': req.body.userLogin.userEmail});
    if(!user) {return res.status(404).send({message: "Invalid Email ID"}) };
    user.resetPasswordToken = token;
    user.resetPasswordExpires = Date.now() + 3600000
    await user.save();

    let transporter = nodemailer.createTransport({
        host : 'smtp.gmail.com',
        port : 465,
        secure : true,
        auth : {
            user: 'Admin-Gmail',
            pass: 'Admin-Password'
        }
    });

    if(!transporter) res.status(401).send({
        message : 'Something went wrong'
    });

    let mailOptions = {
        from :' "P.A : " <Admin-Gmail> ',
        to : user.userLogin.userEmail,
        subject : 'Reset Your Passsword',
        text :'Open this link to change password http://localhost:3000/renewpassword/' +
        token
    };

    transporter.sendMail(mailOptions, (error,info) => {
        if(error){
            return console.log(error);
        }
    console.log('Message sent : %s', info.messageId);
    });
    res.send({message: "Check your mail"})
   }
   catch(ex){
       res.send(ex.message);
   }
});


module.exports = router;