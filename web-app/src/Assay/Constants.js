
const apiPort = ''
const apiHost = 'gorest.co.in'
const apiProtocol = 'https://'

const processResponse = (response) => {
    if (response.ok && response.data && response.data.results && response.data.results.length > 0) {
        return response.data.results[0]
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