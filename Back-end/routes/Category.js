const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Category = mongoose.model("Category");

router.get('/Category',(req,res) =>{
    Category.find()
    .then(Category =>{
        res.json({ Category })
    })
    .catch(err =>{
        console.log(err)
    });
});


router.get("/Category-num",(req,res) =>{
    Category.count({})
    .then(Category =>{
        res.json({ Category })
    })
    .catch(err =>{
        console.log(err)
    });
});




router.post('/new-category',(req,res) =>{
    const { name } = req.body;        //category

    if (!name ){            //|| !category
        res.json({ err:"All fields are required" });
    }

    const category = new Category({
        name
        // category
    });

    category.save().then(() =>{
        res.json({ msg:"category created" })
    }).catch((err) =>{
        console.log(err);
    });
});


module.exports = router;