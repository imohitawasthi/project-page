let Model = require("../model/aboutMeModel")
let Constants = require("../constants")

//GET
exports.get = function (req, res) {
    Model.find({ isActive: true }, null, { sort: { modifiedAt: -1 }, limit: 1 }, (err, data) => Constants.handleResponse(err, res, data))
}

//POST
exports.post = function (req, res) {
    var model = new Model()

    model.aboutMeContent = req.body.aboutMeContent

    model.save((err, data) => Constants.handleResponse(err, res, data))
}

// PUT
exports.put = function (req, res) {
    Model.findById(req.params.id, function (err, data) {
        if (err) Constants.handleResponse(err)

        data.aboutMeContent = req.body.aboutMeContent || data.aboutMeContent
        data.isActive = req.body.isActive || data.isActive

        data = Constants.cleanObject(data)

        data.save((err, data) => Constants.handleResponse(err, res, data))
    })
}
