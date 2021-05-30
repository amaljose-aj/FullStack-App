const express = require("express");
const app = express();
app.use(express.json());
const cors=require('cors')
app.use(cors());
const bodyParser = require('body-parser')
const mongoose= require("mongoose");
app.use(bodyParser.urlencoded({extended: true}));
const port=3001;
mongoose.connect("mongodb+srv://admin-amal:password234@cluster0.9gwk9.mongodb.net/detailsdb", {useNewUrlParser: true,useUnifiedTopology: true});


app.use("/",require("./routes/detailsRoute"));
    
    




app.listen(port);