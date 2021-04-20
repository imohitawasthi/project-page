//initialize express router
let routesPublic = require("express").Router()
let routesPrivate = require("express").Router()

//Controllers
let controllers = require("./../meta/routes-config")

//set APIs
controllers.forEach(e => {

    e.methods.GET.forEach(v => {
        routesPublic.route(`/${e.path}${v}`).get(e.controller.get)
    })
    e.methods.POST.forEach(v => {
        routesPublic.route(`/${e.path}${v}`).post(e.controller.post)
    })
    e.methods.PUT.forEach(v => {
        routesPublic.route(`/${e.path}${v}`).put(e.controller.put)
    })
})

//Export API routes
module.exports = { routesPublic, routesPrivate }
