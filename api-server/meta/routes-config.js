//import controllers
let aboutMeController = require("../src/controller/aboutMeController")
let goodReadController = require("../src/controller/goodReadController")
let metadataController = require("../src/controller/metadataController")
let postController = require("../src/controller/postController")
let projectController = require("../src/controller/projectController")
let userController = require("../src/controller/userController")

let controllers = [
    {
        path: "about-me",
        controller: aboutMeController,
        methods: {
            GET: [''],
            POST: [''],
            PUT: ['/:id']
        }
    },
    {
        path: "good-reads",
        controller: goodReadController,
        methods: {
            GET: [''],
            POST: [''],
            PUT: ['/:id']
        }
    },
    {
        path: "metadata",
        controller: metadataController,
        methods: {
            GET: ['/:type'],
            POST: [''],
            PUT: ['/:id']
        }
    },
    {
        path: "posts",
        controller: postController,
        methods: {
            GET: [''],
            POST: [''],
            PUT: ['/:id']
        }
    },
    {
        path: "projects",
        controller: projectController,
        methods: {
            GET: ['/:inProgress'],
            POST: [''],
            PUT: ['/:id']
        }
    },
    {
        path: "user",
        controller: userController,
        methods: {
            GET: [''],
            POST: [''],
            PUT: ['/:id']
        }
    },
]

module.exports = controllers