var mongoose = require('mongoose');

//schema
var schema = mongoose.Schema({
    goodReadName: {
        type: String,
        required: true
    },
    goodReadLink: {
        type: String,
        require: true
    },
    isActive: {
        type: Boolean,
        default: true
    },
    goodReadAddedOn: {
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