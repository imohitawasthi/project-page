var mongoose = require('mongoose');

//schema
var schema = mongoose.Schema({
    aboutMeContent: [{
        content: String,
        contentType: String,
    }],
    isActive: {
        type: Boolean,
        default: true
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