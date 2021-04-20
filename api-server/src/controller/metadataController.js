let Model = require("../model/metadataModel")
let Constants = require("../constants")

const META_TYPE = [
    'MENU'
]

//GET
exports.get = function (req, res) {
    Model.find({ isActive: true, metadataType: req.params.type }, null, { sort: { modifiedAt: -1 }, limit: 1 }, (err, data) => Constants.handleResponse(err, res, data))
}

//POST
exports.post = function (req, res) {
    var model = new Model()

    model.metadataContent = req.body.metadataContent
    model.metadataType = req.body.metadataType

    if ( !META_TYPE.includes(model.metadataType) ) {
        return Constants.handleResponse(true, 'Meta type not valid')
    }

    model.save((err, data) => Constants.handleResponse(err, res, data))
}

// PUT
exports.put = function (req, res) {
    Model.findById(req.params.id, function (err, data) {
        if (err) Constants.handleResponse(err)

        data.metadataContent = req.body.metadataContent || data.metadataContent
        data.metadataType = req.body.metadataType || data.metadataType
        data.isActive = req.body.isActive || data.isActive

        data = Constants.cleanObject(data)

        if ( !META_TYPE.includes(model.metadataType) ) {
            return Constants.handleResponse(true, 'Meta type not valid')
        }
        
        data.save((err, data) => Constants.handleResponse(err, res, data))
    })
}
