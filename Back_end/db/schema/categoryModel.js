let mongoose = require('mongoose');
let subCategorySchema = new mongoose.Schema({
    name: {type: Array,required:true}
});
let subCategory = mongoose.model('subCategory', subCategorySchema);

let categorySchema = new mongoose.Schema({
    categoryName:{type: String, min:4, max:50, required:true},
    subCategory:[subCategorySchema]
});
let Category = mongoose.model('Category', categorySchema);
 
module.exports = {Category,subCategory};