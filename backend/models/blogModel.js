const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
    title: {
        type : String,
        required : [true, "Please enter blog title"],
        trim : true,
    },
    category : {
        type: String,
        required : [true, "Please enter blog category"],
    },
    author : {
        type: String,
        required :[true, "Please enter blog author"],
    },
    content : {
        type: String,
        required :[true, "Please enter blog content"],
    },
    images : {
        public_id:{
            type: String,
        },
        url: {
            type: String,
        }
    }
})

module.exports = mongoose.model("Blog",blogSchema);