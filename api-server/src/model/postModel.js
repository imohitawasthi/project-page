var mongoose = require('mongoose');

//schema
var schema = mongoose.Schema({
    postName: {
        type: String,
        required: true
    },
    postDescription: {
        type: String,
        required: true
    },
    postContent: [{
        content: Array,
        contentType: String,
    }],
    isActive: {
        type: Boolean,
        default: true
    },
    postPublishedOn: {
        type: Date,
        default: Date.now
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    modifiedAt: {
        type: Date,
        default: Date.now
    }
});

//Export
module.exports = mongoose.model('posts', schema);