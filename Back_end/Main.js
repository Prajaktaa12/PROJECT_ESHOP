let express = require("express");
let app = express();
require("./startups/App")(app);
let config = require('config');
let mongoose = require("mongoose");
let port = process.env.PORT || 4600; 
console.log(`NODE_ENV MODE: ${process.env.NODE_ENV}`);
console.log(`app : ${app.get("env")}`);
console.log(`name : ${config.get("name")}`);
console.log(`mode : ${config.get("mode")}`);
console.log(`password : ${config.get("password")}`);
app.use(express.json()); 
app.use("/uploads", express.static("uploads"));
if (!config.get("password")) {
    console.log("ACCESS DENIED");
    process.exit(1);
}
mongoose.connect("mongodb://localhost/siteapi", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})
.then(() => console.log("connected to db"))
.catch(error => console.log(`something went wrong ${error.message}`));
app.listen(port, () => console.log(`port is working on ${port}`));