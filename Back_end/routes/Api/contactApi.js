let express = require("express"); 
let router = express.Router();
let nodemailer = require("nodemailer");
const Joi = require("@hapi/joi");
const contacts = require("../../db/schema/contactModel");
let asyncMiddleware = require("../../wrapper/middleware");

router.post("/contact/sendmail", asyncMiddleware(async (req, res) => {
    let result = validationError(req.body);
    if(result.error) {return res.status(403).send(result.error.details[0].message) }
    try{
        let contact = await contacts({
            'Name': req.body.Name,
            'Email': req.body.Email,
            'Message': req.body.Message
        });
        contact = await contact.save();

    let transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: 'User-Gmail',  
                pass: 'User-Password'
            }
        });
        if(!transporter) res.status(401).send({
            message: 'Something went wrong'
        })
         let mailOptions = {
             from:contact.Email,
             to:'"FamMart" <Admin-Gmail>',
             subject: 'Welcome To FamMart: Q & C',
             text: 'Queries & Complaints \n' +
                 'Name :' + contact.Name + '\n' +
                 'Email :' + contact.Email + '\n' +
                 'Message :'+ contact.Message +'\n'
         };

         transporter.sendMail(mailOptions, (error, info) => {
             if(error){
                 return console.log(error);
             }
             console.log('Message sent: %s', info.messageId);
         });
         res.status(200).send({
            'message': 'message sent'
        })
         
    }
    catch (ex) {
       res.status(401).send(ex);
    }
}));

function validationError(message) {
    let schema = Joi.object({
        Name: Joi.string().min(3).max(100).required(),
        Email: Joi.string().min(5).max(100).required(),
        Message: Joi.string().min(4).max(100).required()

    });
    return schema.validate(message);
};

module.exports = router;
