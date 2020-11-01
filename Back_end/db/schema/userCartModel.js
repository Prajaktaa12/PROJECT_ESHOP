const mongoose = require('mongoose');

let cartItemSchema = new mongoose.Schema({
    productId:{type: String, min:4, max:50, required:true},
    name:{type: String, min:4, max:50, required:true},
    image:{type: String, min:4, max:50, required:true},
    price:{type: Number, required:true},
    quantity:{type: Number, required:true},
    totalprice:{type: Number, required:true},
    recordDate:{type:Date, default:Date.now},
    updateDate:{type:Date, default:Date.now}
});

let cartItem = mongoose.model('cartItem', cartItemSchema);

let userCartSchema = new mongoose.Schema({
    userEmail:{type: String, min:4, max:50, required:true},
    cartItem:[cartItemSchema]
});

let userCartItem = mongoose.model('userCartItem', userCartSchema);

module.exports = {userCartItem, cartItem};