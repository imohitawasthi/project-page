let Model = require("../model/userModel")
let Constants = require("../constants")

//GET
exports.get = function (req, res) {
    Model.find({ isActive: true }, null, { sort: { modifiedAt: -1 } }, (err, data) =>
        Constants.handleResponse(err, res, data)
    )
}

//POST
exports.post = function (req, res) {
    var model = new Model()

    model.username = req.body.username
    model.password = req.body.password
    model.fullName = req.body.fullName
    model.email = req.body.email

    model.save((err, data) => Constants.handleResponse(err, res, data))
}

// PUT
exports.put = function (req, res) {
    Model.findById(req.params.id, function (err, data) {
        if (err) Constants.handleResponse(err)

        data.username = req.body.username || data.username
        data.password = req.body.password || data.password
        data.fullName = req.body.fullName || data.fullName
        data.email = req.body.email || data.email
        data.isActive = req.body.isActive || data.isActive

        data = Constants.cleanObject(data)

        data.save((err, data) => Constants.handleResponse(err, res, data))
    })
}
