const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Post = mongoose.model("Post");
const Comment = mongoose.model("Comments");


router.get('/Comments',(req,res) =>{
    Comment.find()
    .populate("post", "_id title")
    .then(Comment =>{
        res.json({ Comment })
    })
    .catch(err =>{
        console.log(err)
    });
});


router.get("/Comments/Posts/:postId",(req,res) =>{
    Comment.find({post: {_id: req.params.postId}})
    .populate("post", "_id title")
    .then(posts =>{
        res.json({ posts })
    })
    .catch(err =>{
        console.log(err)
    });
});


router.get("/Comments-num",(req,res) =>{
    Comment.count({})
    .then(Comment =>{
        res.json({ Comment })
    })
    .catch(err =>{
        console.log(err)
    });
});




router.post('/new-comment',(req,res) =>{
    const {body, post} = req.body;

    if (!body || !post){
        res.json({ err:"All fields are required" });
    }

    Post.findOne({ _id: post.id })
    .then(post_found =>{
        
        const comment = new Comment({
            body,
            post: post_found,
            
        });
    
        comment.save().then(() =>{
            res.json({ msg:"Comment created" })
        }).catch((err) =>{
            console.log(err);
        });

    })
    .catch(err =>{
        console.log(err)
    });

    
});


    


module.exports = router;