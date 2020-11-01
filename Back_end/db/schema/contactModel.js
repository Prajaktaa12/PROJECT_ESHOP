const mongoose = require('mongoose'); 

let contactSchema = new mongoose.Schema({
    Name: {type: String, min: 4, max: 100, required: true},
    Email: {type: String, required: true, unique: true},
    Message: {type: String, required: true}
});

let contactModel = mongoose.model("contact", contactSchema);

module.exports = contactModel;