// a library to wrap and simplify api calls
import apisauce from "apisauce"
import Constants from "./Constants"

class Api {
    constructor() {
        this.createEndpoint = (baseURL) =>
            apisauce.create({
                // base URL is read from the "constructor"
                baseURL: baseURL + "/api-public/",
                // here are some default headers
                headers: {
                    "Cache-Control": "no-cache",
                },
                // timeout...
                timeout: 2400000,
            })

        this.initialize = (baseURL) => {
            this.apiClient = this.createEndpoint(baseURL)
        }

        this.fetchMenuOptions = () => this.apiClient.get("metadata/MENU")
        this.fetchAboutMe = () => this.apiClient.get("about-me", null, {})
        this.fetchCompletedProjects = () => this.apiClient.get("projects/false", null, { })
        this.fetchPendingProjects = () => this.apiClient.get("projects/true", null, { })
        this.fetchPosts = () => this.apiClient.get("posts", null, {})
        this.fetchGoodReads = () => this.apiClient.get("good-reads", null, {})

        this.setToken = (token) => {
            this.apiClient.setHeader("Authorization", "Bearer " + token)
        }
    }
}

// let's return back our create method as the default.
export default new Api()
