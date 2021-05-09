import React from "react"

const apiPort = ""
const apiHost = "api-pp.thesapiens.in"
const apiProtocol = "https://"

const dateFormat = "MMM Do YY"

const processResponse = (response) => {
    if (response.ok && response.data && response.data.data && response.data.data.length > 0) {
        return response.data.data
    } else {
        return {
            error: response.problem,
        }
    }
}

const createContentRendererMeta = (payload, keyMap) => {
    const { api, content } = keyMap
    return payload.map((element) => {
        let o = {}
        api.map((e, i) => {
            o = { ...o, [content[i]]: element[e] }
        })
        return o
    })
}

const noDataMessage = () => (
    <div className="no-data-message">
        Oops! no data available.
    </div>
)

export default {
    apiPort,
    apiHost,
    apiProtocol,

    dateFormat,

    processResponse,
    createContentRendererMeta,
    noDataMessage
}
