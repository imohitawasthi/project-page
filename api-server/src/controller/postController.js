let Model = require("../model/postModel")
let Constants = require("../constants")

//GET
exports.get = function (req, res) {
    Model.find({ isActive: true }, null, { sort: { modifiedAt: -1 } }, (err, data) => Constants.handleResponse(err, res, data))
}

//POST
exports.post = function (req, res) {
    var model = new Model()

    model.postName = req.body.postName
    model.postDescription = req.body.postDescription
    model.postContent = req.body.postContent

    model.save((err, data) => Constants.handleResponse(err, res, data))
}

// PUT
exports.put = function (req, res) {
    Model.findById(req.params.id, function (err, data) {
        if (err) Constants.handleResponse(err)

        data.postName = req.body.postName || data.postName
        data.postDescription = req.body.postDescription || data.postDescription
        data.postContent = req.body.postContent || data.postContent
        data.isActive = req.body.isActive || data.isActive

        data = Constants.cleanObject(data)

        data.save((err, data) => Constants.handleResponse(err, res, data))
    })
}
