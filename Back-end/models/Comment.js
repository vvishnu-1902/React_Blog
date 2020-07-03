const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const Comment = mongoose.Schema({
    body:{
        type: String,
        requird: true,
    },
    post:{
        type: ObjectId,
        ref: "Post",
    }
},
{timestamps : true}
);


mongoose.model("Comments", Comment);