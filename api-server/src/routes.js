//initialize express router
let routesPublic = require("express").Router()
let routesPrivate = require("express").Router()

//import controllers
let aboutMeController = require("./controller/aboutMeController")

let controllers = [
    {
        path: "about-me",
        controller: aboutMeController,
    },
]

//set API response

controllers.forEach((e) => {
    routesPublic.route(`/${e.path}`).get(e.controller.get)
    routesPrivate.route(`/${e.path}`).post(e.controller.post)
    routesPrivate.route(`/${e.path}/:id`).put(e.controller.put)
})

//Export API routes
module.exports = { routesPublic, routesPrivate }
