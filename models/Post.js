const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    userId:{
     type:String,
     required:true   
    },
    desc:{
        type:String,
        max:500
    },
    img:{
        type:String,
    },
    likes:{
        type:array,
        default:[]
    },
    },
  { timestamps: true }
);

module.exports = mongoose.model("Post", UserSchema);
