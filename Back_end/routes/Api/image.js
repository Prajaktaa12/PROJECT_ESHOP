let express = require("express");
let router = express.Router();
let asyncMiddleware = require("../../wrapper/middleware");
// let Joi = require("@hapi/joi");
// let bcrypt = require("bcrypt");
// let admin = require("../../middleware/admin");
// let usermiddleware = require("../../middleware/user");
let file = require ("../../db/schema/file");
let port = "http://localhost:4600";
let multer = require("multer");

let storage = multer.diskStorage({
    destination: function(req,file,cb){
      cb(null, "../../../API/uploads/");
    },
    filename: function(req,file,cb){
      cb(null, file.originalname);
    }
     
  });
  
  let fileFilter = (req,file,cb) => {
    if (file.mimetype === "image/jpg" || file.mimetype === "image/png" || file.mimetype === "image/jpeg")
    {cb (null,true)}
    else
    {cb(null,false)};
  };
  
  let uploads = multer({
    storage: storage,
    limits: {
      fileSize: 1024 * 1204 * 5
    },
    fileFilter: fileFilter
  })
  
router.post("/addimage", uploads.single("image"), asyncMiddleware(async (req,res) =>{
  try{
    let data = new file({
      image: port + "/uploads/" + req.file.filename
    });
      if(!data) {return status(404).send({message:"Invalid File"}) }
      let result = await data.save();
      res.send({
        message:"File uploaded", 
         d: result
      });

  }
  catch(ex){
    res.send(ex.message)
  }
  
}));

router.get("/images", asyncMiddleware(async (req,res) => {
  let data = await file.find();
    res.send(data);
}));

module.exports = router;