let express = require("express");
let Joi = require("@hapi/joi");
let router = express.Router();
let Model = require("../../db/schema/userCartModel");
let userCartItem = Model.userCartItem;
let Admin = require("../../middleware/admin");
let Usermiddleware = require("../../middleware/user");
let asyncMiddleware = require("../../wrapper/middleware");

//let Auth = require("../../middleware/auth");

router.get("/allusercart", [Usermiddleware, Admin], asyncMiddleware(async (req, res) => {
    let usercart = await userCartItem.find();
    res.send({data : usercart});
}));

router.post("/cartbyuser", asyncMiddleware(async (req,res) => {
    let usercart = await userCartItem.findOne({'userEmail': req.body.userEmail});
    if(!usercart){
        return res.status(403).send("Data not found");
    }
    res.send({
      message: "success",
      data : usercart
    });
}));

router.post("/addtocart", asyncMiddleware(async (req, res) => {
    let result = ValidationError(req.body);
    if (result.error) {return res.send(error.details[0].message) };
    let usercart = new userCartItem ({
    userEmail: req.body.userEmail,
    cartItem: req.body.cartItem
    });
    usercart = await usercart.save();
    res.send({ message: "Added to cart", d: usercart});
}));

router.put("/updatecart/:id", asyncMiddleware(async (req,res) => {
    let usercart = await userCartItem.findById(req.params.id);
    if(!usercart) {return res.status(404).send({ message: "Invalid Id"}) };
    let {error} = ValidationError(req.body);
    if(error){return res.send(error.details[0].message) };
    usercart.cartItem= req.body.cartItem;
    let data = await usercart.save();
    res.send({message: "Cart is updated", d: data});
}));

router.delete("/removefromcart/:id", asyncMiddleware(async (req,res) => {
    let usercart = await userCartItem.findByIdAndRemove(req.params.id);
    if(!usercart) {return res.send(404).send({ message: "Invalid Id"}) };
    res.send({message: "Item removed from cart"});
}));

function ValidationError(error) {
    let Schema = Joi.object({
    userEmail: Joi.string().min(4).max(50).required(),
    cartItem: Joi.array().required()

    });
    return Schema.validate(error);
}

module.exports = router; 