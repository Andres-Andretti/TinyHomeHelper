const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
    title: String,
    body: String,
    user: String,
    tags: [String],
    // selectedFile: String,
    comments: String,
    likes: {
        type: [String],
        default: [],
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
});

var PostMessage = mongoose.model('PostMessage', postSchema); 

module.exports = PostMessage

