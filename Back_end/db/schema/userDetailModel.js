const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const config = require("config");

let userSchema = new mongoose.Schema({
   firstName: {type: String, min: 4, max: 100, required:true},
   lastName: {type: String, min: 4, max: 100, required:true},
   newsLetterCheck: {type: Boolean},
   userLogin:{
       userEmail: {type: String, min:4, max:100, required:true},
       userPassword: {type: String, unique:true, min:4, max:100, required:true}
   },
   termsAcceptCheck:{type:Boolean, required:true},
   resetPasswordToken: {type:String},
   resetPasswordExpires: {type:Date},
   isAdmin: {type:Boolean},
   recordDate: {type:Date, default:Date.now},
   updateDate: {type:Date, default:Date.now}
});

userSchema.methods.JwtToken = function() {
    let token = jwt.sign({ _id: this._id, isAdmin: this.isAdmin }, config.get("password"));
    return token;
};

let userModel = mongoose.model("userdetails", userSchema);

module.exports = userModel;