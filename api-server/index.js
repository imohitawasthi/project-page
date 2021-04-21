//Imports
let express = require("express")
let bodyParser = require("body-parser")
let mongoose = require("mongoose")
var cors = require("cors")

let apiRoutes = require("./src/routes")
let constants = require("./src/constants")

//Start App
let app = express()

app.use(
    cors({
        origin: "http://localhost:3000",
        optionsSuccessStatus: 200,
    })
)
app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

// Welcome message
app.get("/", (req, res) => res.send("Welcome to Express"))

const mongo = mongoose.connect(constants.dbPath, constants.dbOptions)

mongo.then(
    () => {
        console.log("connected")
    },
    (error) => {
        console.log(error, "error")
    }
)

//Use API routes in the App
app.use("/api-public", apiRoutes.routesPublic)
app.use("/api-private", apiRoutes.routesPrivate)

// Launch app to the specified port
app.listen(constants.apiPort, function () {
    console.log("Running Server on Port " + constants.apiPort)
})
