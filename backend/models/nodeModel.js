const mongoose = require("mongoose");
const details={
    Name:String,
    Age:String,
    Gender:String,
    Email:String,
    Phone:String,
    Address:String
};
const Details = mongoose.model("detail",details);
module.exports = Details;