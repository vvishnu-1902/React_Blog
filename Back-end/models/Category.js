const mongoose = require("mongoose");

const Category = mongoose.Schema({
    name:{
        type: String,
        requird: true,
    }    
},
{timestamps : true}
);


mongoose.model("Category", Category);