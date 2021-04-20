// a library to wrap and simplify api calls
import Api from "./AssayApi"
import Constants from "./Constants"

export default class AssayMaster {
    constructor(options) {
        this.phiRef = options

        this.fetchMenuOptions = function* (that, config) {
            let response = yield Api.fetchMenuOptions()

            return Constants.processResponse(response)
        }

        this.fetchAboutMe = function* (that, config) {
            let response = yield Api.fetchAboutMe()
            
            return Constants.processResponse(response)
        }

        this.fetchCompletedProjects = function* (that, config) {
            let response = yield Api.fetchCompletedProjects()
            
            return Constants.processResponse(response)
        }

        this.fetchPendingProjects = function* (that, config) {
            let response = yield Api.fetchPendingProjects()
            
            return Constants.processResponse(response)
        }

        this.fetchPosts = function* (that, config) {
            let response = yield Api.fetchPosts()
            
            return Constants.processResponse(response)
        }

        this.fetchGoodReads = function* (that, config) {
            let response = yield Api.fetchGoodReads()
            
            return Constants.processResponse(response)
        }
    }
}
