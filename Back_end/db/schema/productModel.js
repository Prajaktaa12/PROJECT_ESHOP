let mongoose = require('mongoose');
 
let productSchema = new mongoose.Schema({
    name:{type: String, min:4, max:50, required:true},
    image:{type: String,min:4, max:50, required:true},
    description:{type: String, min:4, max:50, required:true},
    price:{type: Number, required:true},
    offerprice:{type: String},
    isAvailable:{type: Boolean, required:true},
    isTodayOffer:{type: Boolean, required:true},
    category:{type: String, min:4, max:50, required:true},
    subCategory:{type: String, min:4, max:50, required:true},
    recordDate:{type:Date, default:Date.now},
    updateDate:{type:Date, default:Date.now}

});
let product = mongoose.model('Product', productSchema);

module.exports = product;