
const apiPort = ':8080'
const apiHost = 'localhost'
const apiProtocol = 'http://'

const processResponse = (response) => {
    if (response.ok && response.data && response.data.data && response.data.data.length > 0) {
        return response.data.data
    } else {
        return {
            error: response.problem,
        }
    }
}

export default {
    apiPort,
    apiHost,
    apiProtocol,

    processResponse
}