let express = require("express");
let Joi = require("@hapi/joi");
let router = express.Router();
let Model = require("../../db/schema/categoryModel");
let Category = Model.Category;
let subCategory = Model.subCategory;
let admin = require("../../middleware/admin");
let Usermiddleware = require("../../middleware/user");
let asyncMiddleware = require("../../wrapper/middleware");

router.post("/addcategory", asyncMiddleware(async (req,res) => {
    let {error} = ValidationError(req.body);
    if (error) {return res.send(error.details[0].message) };
    let categorys= new Category ({
        categoryName: req.body.categoryName,
        subCategory: req.body.subCategory
    });
    let data= await categorys.save();
    res.send({ message: "Added", data});
}));

router.get("/allcategory", asyncMiddleware(async(req,res) => {
    let data = await Category.find();
    res.send(data);
}));

router.get("/findcategory/:id", asyncMiddleware(async(req,res) => {
  let categorys = await Category.findById(req.params.id);
  res.send(categorys);
}));

router.delete("/removecategory/:id", asyncMiddleware(async(req,res) => {
    let categorys = await Category.findByIdAndRemove(req.params.id);
    if(!categorys) {return res.send(404).send({ message: "Invalid Id"}) };
    res.send({message: "Category removed"});
}));

router.get("/category/:category/page/:pageNo", asyncMiddleware(async(req,res) => {
  let categorys = await Category.find(req.params.categoryName);
  res.send({data : categorys});

  let pageSize = 10;
  let page = parseInt(req.params.pageIdx) || 1;
  if(page < 0 || page === 0) {
    return res.status(403).send("Invalid page number, should start with 1");
  }
  let data = await Category
  .find()
  .skip((pageSize * page) - pageSize)
  .limit(pageSize);
 
  let collectionSize = await Category.count();
  if(!Category) {
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

router.get("/category/:category/subcategory/:subcategory/page/:pageNo", asyncMiddleware(async(req,res) => {
  let categorys = await Category.find(req.params.categoryName);
  res.send({data : categorys});

  let subcategory = await Category.find(req.params.subCategory);
  res.send({data : subcategory});

  let pageSize = 10;
  let page = parseInt(req.params.pageIdx) || 1;
  if(page < 0 || page === 0) {
    return res.status(403).send("Invalid page number, should start with 1");
  }
  let data = await Category
  .find()
  .skip((pageSize * page) - pageSize)
  .limit(pageSize);
 
  let collectionSize = await Category.count();
  if(!Category) {
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

function ValidationError(error) {
    let Schema = Joi.object({
        categoryName: Joi.string().min(4).max(50).required(),
        subCategory: Joi.array().required()

    });
    return Schema.validate(error);
}

module.exports = router; 