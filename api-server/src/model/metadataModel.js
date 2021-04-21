var mongoose = require('mongoose');

//schema
var schema = mongoose.Schema({
    metadataContent: [{
        key: String,
        label: String,
        url: String
    }],
    metadataType: String,
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
module.exports = mongoose.model('metadata', schema);