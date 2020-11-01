let mongoose = require("mongoose");

let imageSchema = new mongoose.Schema({
    image : {type: String}
});

let image = mongoose.model("fileuploads", imageSchema);

module.exports = image;