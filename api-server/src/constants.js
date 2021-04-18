const apiPort = 8080

const dbPath = "mongodb://localhost/project-page"
const dbOptions = { useNewUrlParser: true, useUnifiedTopology: true }

const handleResponse = (err, res, data) => {
    if (err)
        res.json({
            status: "error",
            message: err,
        })
    res.json({
        status: "success",
        data: data,
    })
}

const cleanObject = (obj) => {
    for (var propName in obj) {
      if (obj[propName] === null || obj[propName] === undefined) {
        delete obj[propName];
      }
    }
    return obj
  }

module.exports = {
    apiPort,

    dbPath,
    dbOptions,

    handleResponse,
    cleanObject
}
