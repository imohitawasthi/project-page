import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { Router } from "react-router-dom"
import { CookiesProvider } from "react-cookie"

import history from "./history"
import Routes from "./routes"
import configureStore from "./Store/Store"

import Assay from "./Assay/Assay"
import Constants from "./Assay/Constants"

import "./Theme/scss/index.scss"

const store = configureStore()

Assay.initialize({ apiPort: Constants.apiPort, apiUrl: Constants.apiHost, apiProtocol: Constants.apiProtocol })
Assay.setSession("")

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Routes />
        </Router>
    </Provider>,
    document.getElementById("root")
)
