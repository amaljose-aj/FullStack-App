const express = require("express");
const router=express.Router();
const Details = require("../models/nodeModel");
router.route("/create").post((req,res)=>{
    const name2=req.body.name1;
    const age2=req.body.age1;
    const gender2=req.body.gender1;
    const email2=req.body.email1;
    const phone2=req.body.phone1;
    const address2 = req.body.address1;

    const item=new Details({
        Name:name2,
        Age:age2,
        Gender:gender2,
        Email:email2,
        Phone:phone2,
        Address:address2
     });
     item.save();

})


router.route("/list").get((req,res) => {
    Details.find().then(foundDetails => res.json(foundDetails))
    
    
})


module.exports = router;
