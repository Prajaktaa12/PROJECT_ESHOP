let express = require("express");
let cors = require('cors');
let contact = require("../routes/Api/contactApi");
let user = require("../routes/Api/userDetailApi");
let login = require("../middleware/login");
let cart = require("../routes/Api/userCartApi");
let product = require("../routes/Api/productApi");
let Category = require("../routes/Api/categoryapi");
let file = require("../routes/Api/image");
let forgotpassword = require("../middleware/forgotpassword");
let resetpassword = require("../middleware/resetpassword");
let error = require("../exception/error");

module.exports = function (app) {
    app.use(express.json()); 
    app.use(cors());
    app.use("/api", contact);
    app.use("/api", user);
    app.use("/api", login);
    app.use("/api", cart);
    app.use("/api",file);
    app.use("/api",Category);
    app.use("/api",product,);
    app.use("/api", forgotpassword);
    app.use("/api", resetpassword);
    app.use(error);
}
    


