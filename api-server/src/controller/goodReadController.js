let Model = require("../model/goodReadModel")
let Constants = require("../constants")

//GET
exports.get = function (req, res) {
    Model.find({ isActive: true }, null, { sort: { modifiedAt: -1 } }, (err, data) => Constants.handleResponse(err, res, data))
}

//POST
exports.post = function (req, res) {
    var model = new Model()

    model.goodReadName = req.body.goodReadName
    model.goodReadLink = req.body.goodReadLink

    model.save((err, data) => Constants.handleResponse(err, res, data))
}

// PUT
exports.put = function (req, res) {
    Model.findById(req.params.id, function (err, data) {
        if (err) Constants.handleResponse(err)

        data.goodReadName = req.body.goodReadName || data.goodReadName
        data.goodReadLink = req.body.goodReadLink || data.goodReadLink
        data.isActive = req.body.isActive || data.isActive

        data = Constants.cleanObject(data)

        data.save((err, data) => Constants.handleResponse(err, res, data))
    })
}
