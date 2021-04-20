let Model = require("../model/projectModel")
let Constants = require("../constants")

//GET
exports.get = function (req, res) {
    Model.find({ isActive: true, isInProgress: res.params.inProgress || false }, null, { sort: { modifiedAt: -1 } }, (err, data) =>
        Constants.handleResponse(err, res, data)
    )
}

//POST
exports.post = function (req, res) {
    var model = new Model()

    model.projectName = req.body.projectName
    model.projectDescription = req.body.projectDescription
    model.projectLinkGit = req.body.projectLinkGit
    model.projectLinkPage = req.body.projectLinkPage
    model.isInProgress = req.body.isInProgress

    model.save((err, data) => Constants.handleResponse(err, res, data))
}

// PUT
exports.put = function (req, res) {
    Model.findById(req.params.id, function (err, data) {
        if (err) Constants.handleResponse(err)

        data.projectName = req.body.projectName || data.projectName
        data.projectDescription = req.body.projectDescription || data.projectDescription
        data.projectLinkGit = req.body.projectLinkGit || data.projectLinkGit
        data.projectLinkPage = req.body.projectLinkPage || data.projectLinkPage
        data.isInProgress = req.body.isInProgress || data.isInProgress
        data.isActive = req.body.isActive || data.isActive

        data = Constants.cleanObject(data)

        data.save((err, data) => Constants.handleResponse(err, res, data))
    })
}
