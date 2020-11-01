let express = require("express");
let router = express.Router();
let Joi = require("@hapi/joi");
let product = require("../../db/schema/productModel");
let admin = require("../../middleware/admin");
let usermiddleware = require("../../middleware/user");
let asyncMiddleware = require("../../wrapper/middleware");

router.post("/addproduct", asyncMiddleware(async (req,res) =>{
  let { error } = ValidationError(req.body);
    if (error) { return res.status(400).send(error.details[0].message ) };
  let products = new product({
      name: req.body.name,
      image: req.body.image,
      description:req.body.description,
      price: req.body.price,
      offerprice: req.body.offerprice,
      isAvailable: req.body.isAvailable,
      isTodayOffer: req.body.isTodayOffer,
      category: req.body.category,
      subCategory: req.body.subCategory,
    });
    let data = await products.save();
    res.send({message: "Product Added", d: data });  
}));

router.put("/updateproduct/:id", asyncMiddleware(async (req,res) => {
  let result = ValidationError(req.body);
  if(result.error){return res.status(403).send(result.error.details[0].message)};
  let products = await product.findByIdAndUpdate(req.params.id,{
    name: req.body.name,
    image: req.body.image,
    description:req.body.description,
    price: req.body.price,
    offerprice: req.body.offerprice,
    isAvailable: req.body.isAvailable,
    isTodayOffer: req.body.isTodayOffer,
    category: req.body.category,
    subCategory: req.body.subCategory,
  });
  let data = await products.save();
  res.send({message: "Product is updated", d: data});
}));

router.delete("/removeproduct/:id", asyncMiddleware(async(req,res) => {
  let products = await product.findByIdAndRemove(req.params.id);
    if(!products) {return res.send(404).send({ message: "Invalid Id"}) };
    res.send({message: "Product removed"});
}));

router.get("/allproducts", asyncMiddleware(async(req,res) => {
  let data = await product.find();
    res.send(data);
}));
  
router.get("/product/:id", asyncMiddleware(async(req,res) => {
  let data = await product.findById(req.params.id);
    res.send(data);
}));

router.get("/latestproduct", asyncMiddleware(async(req,res) => {
  let products = await product.find().limit(8);
  if(!products){
    return res.send.status(403).send('Data not found');
  }
  res.send({message:"success", data: products});
}));

router.get("/offerproduct", asyncMiddleware(async(req,res) => {
  let products = await product.find({isTodayOffer:true})
  if(!products.data){
    res.send(products)
  }else {
    res.send({message: "Data not found"});
  }
}));

router.get("/productcategory", asyncMiddleware(async(req,res) => {
  let products = await product.find({category:"FOOTWARE"})
  if(!products.data){
    res.send(products)
  }else {
    res.send({message: "Data not found"});
  }
}));

router.get("/productpage/:pageNo", asyncMiddleware(async (req,res) => {
  let pageSize = 4;
  let page = parseInt(req.params.pageIdx) || 1;
  if(page < 0 || page === 0) {
    return res.status(403).send("Invalid page number, should start with 1");
  }
  let data = await product
  .find()
  .skip((pageSize * page) - pageSize)
  .limit(pageSize);
 
  let collectionSize = await product.count();
  if(!product) {
    return res.status(403).send("Data not found");
  }
 res.send({
     message: "success",
     data: data,
     page: page,
     pageSize: pageSize,
     collectionSize: collectionSize
    })
}));

router.get("/search/:name", (async(req,res) => {
  let regex = new RegExp(req.params.name, 'i');
  let products = await product.find({name:regex});
  res.send(products);
}));


function ValidationError(error) {
    let Schema = Joi.object({
        name:Joi.string().min(4).max(50).required(),
        image:Joi.string().min(4).max(50).required(),
        description:Joi.string().min(4).max(50).required(),
        price: Joi.number().required(),
        offerprice:Joi.number(),
        isAvailable:Joi.boolean().required(),
        isTodayOffer:Joi.boolean().required(),
        category:Joi.string().min(4).max(50).required(),
        subCategory:Joi.string().min(4).max(50).required()
      });
    return Schema.validate(error);
}
module.exports = router;