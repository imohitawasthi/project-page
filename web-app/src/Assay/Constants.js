const apiPort = ":8080"
const apiHost = "localhost"
const apiProtocol = "http://"

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

export default {
    apiPort,
    apiHost,
    apiProtocol,

    dateFormat,

    processResponse,
    createContentRendererMeta,
}
