const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const { text } = require("express");
const Post = mongoose.model("Post");
const Category = mongoose.model("Category");

router.get("/Posts",(req,res) =>{
    Post.find()
    .populate("category", "_id name")
    .then(posts =>{
        res.json({ posts })
    })
    .catch(err =>{
        console.log(err)
    });
});




router.get("/Posts/:id",(req,res) =>{
    Post.find({_id: req.params.id})
    .populate("category", "_id name")
    .then(posts =>{
        res.json({ posts })
    })
    .catch(err =>{
        console.log(err)
    });
});


router.get("/Posts/Category/:catId",(req,res) =>{
    Post.find({category: {_id: req.params.catId}})
    .populate("category", "_id name")
    .then(posts =>{
        res.json({ posts })
    })
    .catch(err =>{
        console.log(err)
    });
});




router.get("/Featured",(req,res) =>{
    Post.find({isFeatured: true})
    .populate("category", "_id name")
    .then(posts =>{
        res.json({ posts })
    })
    .catch(err =>{
        console.log(err)
    });
});


router.get("/Trending",(req,res) =>{
    Post.find()
    .sort({numOfLikes: -1})
    .populate("category", "_id name")
    .then(posts =>{
        res.json({ posts })
    })
    .catch(err =>{
        console.log(err)
    });
});


router.get("/Fresh",(req,res) =>{
    Post.find()
    .sort({_id: -1}).limit(3)
    .populate("category", "_id name")
    .then(posts =>{
        res.json({ posts })
    })
    .catch(err =>{
        console.log(err)
    });
});


router.post("/new-post",(req,res) =>{
    const {title, imgUrl, description, category, numOfLikes, isFeatured} = req.body;

    if (!title || !imgUrl || !description || !category || !numOfLikes || !isFeatured){
        res.json({ err:"All fields are required" });
    }

    Category.findOne({ _id: category.id })
    .then(cat =>{
        
        const post = new Post({
            title,
            imgUrl,
            description,
            numOfLikes,
            isFeatured,
            category: cat,
        });
    
        post.save().then(() =>{
            res.json({ msg:"post created" })
        }).catch((err) =>{
            console.log(err);
        });

    })
    .catch(err =>{
        console.log(err)
    });

    
});




router.get("/Search/:str",(req,res) =>{
    const { str } = req.params;

    if (!str){
        res.json({ err:"Not Found" });
    }

    Post.find({ $text: { $search: str } })
    .then(posts =>{
        res.json({ msg :"Found!",posts })
    })
    .catch(err =>{
        console.log(err)
    });

    
});

module.exports = router;